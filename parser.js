"use strict";
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var Token_1 = require("./Token");
var antlr4 = require('./antlr4');
var Lexer = require('./g1Lexer.js').g1Lexer;
var Parser = require('./g1Parser.js').g1Parser;
var asmCode = "";
var labelCounter = 0;
function parse(txt) {
    var stream = new antlr4.InputStream(txt);
    var lexer = new Lexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new Parser(tokens);
    parser.buildParseTrees = true;
    var handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners();
    parser.addErrorListener(handler);
    var antlrroot = parser.program();
    var root = walk(parser, antlrroot);
    return makeAsm(root);
}
exports.parse = parse;
function walk(parser, node) {
    var p = node.getPayload();
    if (p.ruleIndex === undefined) {
        var line = p.line;
        var lexeme = p.text;
        var ty = p.type;
        var sym = parser.symbolicNames[ty];
        if (sym === null) {
            sym = lexeme.toUpperCase();
        }
        var T = new Token_1.Token(sym, lexeme, line);
        return new TreeNode_1.TreeNode(sym, T);
    }
    else {
        var idx = p.ruleIndex;
        var sym = parser.ruleNames[idx];
        var N = new TreeNode_1.TreeNode(sym, undefined);
        for (var i = 0; i < node.getChildCount(); i++) {
            var child = node.getChild(i);
            N.children.push(walk(parser, child));
        }
        return N;
    }
}
function makeAsm(root) {
    asmCode = "";
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    return asmCode;
}
function emit(instr) {
    asmCode += instr + "\n";
}
function programNodeCode(n) {
    // program -> braceblock
    if (n.sym != "program") {
        ICE();
    }
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n) {
    // braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n) {
    // stmts -> stmt stmts | lambda
    if (n.children.length == 0) {
        return;
    }
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function stmtNodeCode(n) {
    // stmt -> cond | loop | returnStmt SEMI
    var c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "returnStmt":
            returnStmtNodeCode(c);
            break;
        default:
            ICE();
    }
}
function returnStmtNodeCode(n) {
    // returnStmt -> RETURN expr
    exprNodeCode(n.children[1]);
    emit("ret");
}
function exprNodeCode(n) {
    // expr -> NUM
    var d = parseInt(n.children[0].token.lexeme, 10);
    emit("mov rax, " + d);
}
function condNodeCode(n) {
    // cond -> IF LP expr RP braceblock |
    //   IF LP expr RP braceblock ELSE braceblock
    exprNodeCode(n.children[2]); // leaves result in rax
    emit("cmp rax, 0");
    var endifLabel = label();
    emit("je " + endifLabel);
    braceblockNodeCode(n.children[4]);
    if (n.children.length == 5) {
        // no 'else'
        emit(endifLabel + ":");
    }
    else {
        var endElseLabel = label();
        emit("jmp " + endElseLabel);
        emit(endifLabel + ":");
        braceblockNodeCode(n.children[6]);
        emit(endElseLabel + ":");
    }
}
function loopNodeCode(n) {
    // WHILE LP expr RP braceblock
    var whileLabel = label();
    emit(whileLabel + ":");
    exprNodeCode(n.children[2]);
    emit("cmp rax, 0");
    var endWhileLabel = label();
    emit("je " + endWhileLabel);
    braceblockNodeCode(n.children[4]);
    emit("jmp " + whileLabel);
    emit(endWhileLabel + ":");
}
function label() {
    var s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function ICE() {
    throw new Error("Internal compiler error");
}
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.syntaxError = function (rec, sym, line, column, msg, e) {
        console.log("Syntax error:", msg, "on line", line, "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    };
    return ErrorHandler;
}());
