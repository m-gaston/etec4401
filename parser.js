"use strict";
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var Token_1 = require("./Token");
var antlr4 = require('./antlr4');
var Lexer = require('./g1Lexer.js').g1Lexer;
var Parser = require('./g1Parser.js').g1Parser;
var asmCode = "";
var labelCounter = 0;
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
})(VarType || (VarType = {}));
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
    if (n.children.length === 0) {
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
    emit("pop rax");
    emit("ret");
}
function exprNodeCode(n) {
    // expr -> orexp
    return orexpNodeCode(n.children[0]);
}
function orexpNodeCode(n) {
    // orexp -> orexp OR andexp | andexp
    if (n.children.length === 1) {
        return andexpNodeCode(n.children[0]);
    }
    else {
        var orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        var lbl = label();
        emit("cmp qword [rsp], 0");
        emit("jne " + lbl);
        emit("add rsp, 8"); // discard left result (0)
        var andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(lbl + ":");
        return VarType.INTEGER;
    }
}
function andexpNodeCode(n) {
    // andexp -> andexp AND notexp | notexp
    if (n.children.length === 1) {
        return notexpNodeCode(n.children[0]);
    }
    else {
        var andexpType = andexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(andexpType);
        var lbl = label();
        emit("cmp qword [rsp], 1");
        emit("jne " + lbl);
        emit("add rsp, 8"); // discard left result
        var notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(lbl + ":");
        return VarType.INTEGER;
    }
}
function notexpNodeCode(n) {
    // NOT notexp | rel
    if (n.children.length === 1) {
        return relexpNodeCode(n.children[0]);
    }
    else {
        var notexpType = notexpNodeCode(n.children[1]);
        convertStackTopToZeroOrOneInteger(notexpType);
        var lbl1 = label();
        var lbl2 = label();
        emit("cmp qword [rsp], 0");
        emit("jne " + lbl1);
        // 0 -> 1
        emit("add rsp, 8");
        emit("push 1");
        emit("jmp " + lbl2);
        emit(lbl1 + ":");
        // 1 -> 0
        emit("add rsp, 8");
        emit("push 0");
        emit(lbl2 + ":");
        return VarType.INTEGER;
    }
}
function relexpNodeCode(n) {
    // rel -> sum RELOP sum | sum
    if (n.children.length === 1) {
        return sumNodeCode(n.children[0]);
    }
    else {
        var sum1Type = sumNodeCode(n.children[0]);
        var sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== VarType.INTEGER || sum2Type !== VarType.INTEGER) {
            throw new Error("Invalid operand types " + sum1Type
                + " and " + sum2Type);
        }
        emit("pop rax"); // second operand (first stays on stack)
        emit("cmp [rsp], rax"); // do the compare
        switch (n.children[1].token.lexeme) {
            case ">=":
                emit("setge al");
                break;
            case "<=":
                emit("setle al");
                break;
            case ">":
                emit("setg al");
                break;
            case "<":
                emit("setl al");
                break;
            case "==":
                emit("sete al");
                break;
            case "!=":
                emit("setne al");
                break;
            default: ICE();
        }
        emit("movzx qword rax, al"); // move zero with extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}
function sumNodeCode(n) {
    // sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1) {
        return termNodeCode(n.children[0]);
    }
    else {
        var sumType = sumNodeCode(n.children[0]);
        var termType = termNodeCode(n.children[2]);
        if (sumType !== VarType.INTEGER || termType !== VarType.INTEGER) {
            throw new Error("Invalid operand types " + sumType
                + " and " + termType);
        }
        emit("pop rbx"); // second operand
        emit("pop rax"); // first operand
        switch (n.children[1].sym) {
            case "PLUS":
                emit("add rax, rbx");
                break;
            case "MINUS":
                emit("sub rax, rbx");
                break;
            default:
                ICE();
        }
        emit("push rax");
        return VarType.INTEGER;
    }
}
function termNodeCode(n) {
    // term -> term MULOP neg | neg
    if (n.children.length === 1) {
        return negNodeCode(n.children[0]);
    }
    else {
        var termType = termNodeCode(n.children[0]);
        var negType = negNodeCode(n.children[2]);
        if (termType !== VarType.INTEGER || negType !== VarType.INTEGER) {
            throw new Error("Invalid operand types " + termType
                + " and " + negType);
        }
        emit("pop rbx"); // second operand
        emit("pop rax"); // first operand
        switch (n.children[1].token.lexeme) {
            case "*":
                emit("imul rbx");
                emit("push rax");
                break;
            case "/":
                emit("mov rdx, 0");
                emit("idiv rbx");
                emit("push rax");
                break;
            case "%":
                emit("mov rdx, 0");
                emit("idiv rbx");
                emit("push rdx");
                break;
            default:
                ICE();
        }
        return VarType.INTEGER;
    }
}
function negNodeCode(n) {
    // MINUS neg | factor
    if (n.children.length === 1) {
        return factorNodeCode(n.children[0]);
    }
    else {
        var negType = negNodeCode(n.children[1]);
        if (negType !== VarType.INTEGER) {
            throw new Error("Invalid operand type " + negType);
        }
        emit("pop rax");
        emit("neg rax");
        emit("push rax");
        return VarType.INTEGER;
    }
}
function factorNodeCode(n) {
    // factor -> NUM | LP expr RP
    var child = n.children[0];
    switch (child.sym) {
        case "NUM":
            var v = parseInt(child.token.lexeme, 10);
            emit("push qword " + v);
            return VarType.INTEGER;
        case "LP":
            return exprNodeCode(n.children[1]);
        default:
            ICE();
    }
}
function condNodeCode(n) {
    // cond -> IF LP expr RP braceblock |
    //   IF LP expr RP braceblock ELSE braceblock
    exprNodeCode(n.children[2]); // leaves result in rax
    emit("pop rax"); // NEW!
    emit("cmp rax, 0");
    var endifLabel = label();
    emit("je " + endifLabel);
    braceblockNodeCode(n.children[4]);
    if (n.children.length === 5) {
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
    emit("pop rax");
    emit("cmp rax, 0");
    var endWhileLabel = label();
    emit("je " + endWhileLabel);
    braceblockNodeCode(n.children[4]);
    emit("jmp " + whileLabel);
    emit(endWhileLabel + ":");
}
function emit(instr) {
    asmCode += instr + "\n";
}
function label() {
    var s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function convertStackTopToZeroOrOneInteger(type) {
    if (type === VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else {
        throw new Error("Value at top of stack must be integer");
    }
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
