import {TreeNode} from "./TreeNode"
import { Token } from "./Token";

declare var require:any;
let antlr4 = require('./antlr4');
let Lexer = require('./g1Lexer.js').g1Lexer;
let Parser = require('./g1Parser.js').g1Parser;

let asmCode: string = "";
let labelCounter = 0;

export function parse(txt: string) {
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners();
    parser.addErrorListener(handler);
    let antlrroot = parser.program();
    let root: TreeNode = walk(parser, antlrroot);
    return makeAsm(root);
}

function walk(parser: any, node: any) {
    let p: any = node.getPayload();
    if (p.ruleIndex === undefined) {
        let line: number = p.line;
        let lexeme: string = p.text;
        let ty: number = p.type;
        let sym: string = parser.symbolicNames[ty];
        if (sym === null) {
            sym = lexeme.toUpperCase();
        }
        let T = new Token(sym, lexeme, line);
        return new TreeNode(sym, T);
    } else {
        let idx: number = p.ruleIndex;
        let sym: string = parser.ruleNames[idx];
        let N = new TreeNode(sym, undefined);
        for (let i = 0; i < node.getChildCount(); i++) {
            let child: any = node.getChild(i);
            N.children.push(walk(parser, child));
        }
        return N;
    }
}

function makeAsm(root: TreeNode) {
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

function emit(instr: string) {
    asmCode += instr + "\n";
}

function programNodeCode(n: TreeNode) {
    // program -> braceblock
    if (n.sym != "program") {
        ICE();
    }
    braceblockNodeCode(n.children[0]);
}

function braceblockNodeCode(n: TreeNode) {
    // braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}

function stmtsNodeCode(n: TreeNode) {
    // stmts -> stmt stmts | lambda
    if (n.children.length == 0) {
        return;
    }
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}

function stmtNodeCode(n: TreeNode) {
    // stmt -> cond | loop | returnStmt SEMI
    let c = n.children[0];
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

function returnStmtNodeCode(n: TreeNode) {
    // returnStmt -> RETURN expr
    exprNodeCode(n.children[1]);
    emit("ret");
}

function exprNodeCode(n: TreeNode) {
    // expr -> NUM
    let d = parseInt(n.children[0].token.lexeme, 10);
    emit(`mov rax, ${d}`);
}

function condNodeCode(n: TreeNode) {
    // cond -> IF LP expr RP braceblock |
    //   IF LP expr RP braceblock ELSE braceblock
    exprNodeCode(n.children[2]);    // leaves result in rax
    emit("cmp rax, 0");
    var endifLabel = label();
    emit(`je ${endifLabel}`);
    braceblockNodeCode(n.children[4]);
    if (n.children.length == 5) {
        // no 'else'
        emit(`${endifLabel}:`);
    } else {
        var endElseLabel = label();
        emit(`jmp ${endElseLabel}`);
        emit(`${endifLabel}:`);
        braceblockNodeCode(n.children[6]);
        emit(`${endElseLabel}:`);
    }
}

function loopNodeCode(n: TreeNode) {
    // WHILE LP expr RP braceblock
    var whileLabel = label();
    emit(`${whileLabel}:`);
    exprNodeCode(n.children[2]);
    emit("cmp rax, 0");
    var endWhileLabel = label();
    emit(`je ${endWhileLabel}`);
    braceblockNodeCode(n.children[4]);
    emit(`jmp ${whileLabel}`);
    emit(`${endWhileLabel}:`);
}

function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}

function ICE() {
    throw new Error("Internal compiler error");
}

class ErrorHandler {
    syntaxError(rec: any, sym: any, line: number,
                column: number, msg: string, e: any) {
        console.log("Syntax error:", msg, "on line", line,
                    "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}
