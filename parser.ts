import {TreeNode} from "./TreeNode"
import { Token } from "./Token";

declare var require: any;
let antlr4 = require('./antlr4');
let Lexer = require('./g1Lexer.js').g1Lexer;
let Parser = require('./g1Parser.js').g1Parser;

let asmCode: string = "";
let labelCounter = 0;
let symTable: SymbolTable;
let stringPool: Map<string, string>;

enum VarType {
    INTEGER,
    STRING
}

class VarInfo {
    type: VarType;
    location: string;   // asm label
    constructor(t: VarType, location: string) {
        this.type = t;
        this.location = location;
    }
}

class SymbolTable {
    table: Map<string, VarInfo>;
    constructor() {
        this.table = new Map();
    }
    get(name: string) {
        if (!this.table.has(name)) {
            throw new Error("Does not exist");
        }
        return this.table.get(name);
    }
    set(name: string, v: VarInfo) {
        if (this.table.has(name)) {
            throw new Error("Redeclaration");
        }
        this.table.set(name, v);
    }
    has(name: string) {
        return this.table.has(name);
    }
}

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
    symTable = new SymbolTable();
    stringPool = new Map();
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    outputSymbolTableInfo();
    outputStringPoolInfo();
    return asmCode;
}

// TERMINALS

function typeNodeCode(n: TreeNode): VarType {
    emit("; start typeNodeCode");
    if (n.token.lexeme === "int") {
        return VarType.INTEGER;
    } else if (n.token.lexeme === "string") {
        return VarType.STRING;
    } else {
        throw new Error("Invalid type");
    }
}

function stringConstantNodeCode(n: TreeNode): string {
    emit("; start stringConstantNodeCode");
    let s = n.token.lexeme;
    s = s.slice(1, -1);
    let tmp = "";
    for (let i = 0; i < s.length; i++) {
        tmp += s.charAt(i);
        if (s.charAt(i) === "\\") {
            tmp += s.charAt(i + 1);
            i++;
        }
    }
    if (!stringPool.has(tmp)) {
        stringPool.set(tmp, label());
    }
    return stringPool.get(tmp);   // return the label
}

// NONTERMINALS

function programNodeCode(n: TreeNode) {
    emit("; start programNodeCode");
    // program -> braceblock
    if (n.sym != "program") {
        ICE();
    }
    varDeclListNodeCode(n.children[0]);
    braceblockNodeCode(n.children[1]);
}

function varDeclListNodeCode(n: TreeNode) {
    emit("; start varDeclListNodeCode");
    // varDeclList -> varDecl SEMI varDeclList | lambda
    if (n.children.length === 0) {
        return;
    } else {
        varDeclNodeCode(n.children[0]);
        varDeclListNodeCode(n.children[2]);
    }
}

function varDeclNodeCode(n: TreeNode) {
    emit("; start varDeclNodeCode");
    // varDecl -> TYPE ID
    let vname = n.children[1].token.lexeme;
    let vtype = typeNodeCode(n.children[0]);
    symTable.set(vname, new VarInfo(vtype, label()));
}

function braceblockNodeCode(n: TreeNode) {
    emit("; start braceblockNodeCode");
    // braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}

function stmtsNodeCode(n: TreeNode) {
    emit("; start stmtsNodeCode");
    // stmts -> stmt stmts | lambda
    if (n.children.length === 0) {
        return;
    }
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}

function stmtNodeCode(n: TreeNode) {
    emit("; start stmtNodeCode");
    // stmt -> cond | loop | returnStmt SEMI | assign SEMI
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
        case "assign":
            assignNodeCode(c);
            break;
        default:
            ICE();
    }
}

function assignNodeCode(n: TreeNode) {
    emit("; start assignNodeCode");
    // assign -> ID EQ expr
    let t: VarType = exprNodeCode(n.children[2]);
    let vname = n.children[0].token.lexeme;
    if (symTable.get(vname).type !== t) {
        throw new Error("Type mismatch");
    }
    moveBytesFromStackToLocation(symTable.get(vname).location);
}

function returnStmtNodeCode(n: TreeNode) {
    emit("; start returnStmtNodeCode");
    // returnStmt -> RETURN expr
    exprNodeCode(n.children[1]);
    emit("pop rax");
    emit("ret");
}

function exprNodeCode(n: TreeNode): VarType {
    emit("; start exprNodeCode");
    // expr -> orexp
    return orexpNodeCode(n.children[0]);
}

function orexpNodeCode(n: TreeNode): VarType {
    emit("; start orexpNodeCode");
    // orexp -> orexp OR andexp | andexp
    if (n.children.length === 1) {
        return andexpNodeCode(n.children[0]);
    } else {
        let orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        let lbl = label();
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl}`);
        emit("add rsp, 8");     // discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
}

function andexpNodeCode(n: TreeNode): VarType {
    emit("; start andexpNodeCode");
    // andexp -> andexp AND notexp | notexp
    if (n.children.length === 1) {
        return notexpNodeCode(n.children[0]);
    } else {
        let andexpType = andexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(andexpType);
        let lbl = label();
        emit("cmp qword [rsp], 1");
        emit(`jne ${lbl}`);
        emit("add rsp, 8");     // discard left result
        let notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
}

function notexpNodeCode(n: TreeNode): VarType {
    emit("; start notexpNodeCode");
    // NOT notexp | rel
    if (n.children.length === 1) {
        return relexpNodeCode(n.children[0]);
    } else {
        let notexpType = notexpNodeCode(n.children[1]);
        convertStackTopToZeroOrOneInteger(notexpType);
        let lbl1 = label();
        let lbl2 = label();
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl1}`);
        // 0 -> 1
        emit("add rsp, 8");
        emit("push 1");
        emit(`jmp ${lbl2}`);
        emit(`${lbl1}:`);
        // 1 -> 0
        emit("add rsp, 8");
        emit("push 0");
        emit(`${lbl2}:`);
        return VarType.INTEGER;
    }
}

function relexpNodeCode(n: TreeNode): VarType {
    emit("; start relexpNodeCode");
    // rel -> sum RELOP sum | sum
    if (n.children.length === 1) {
        return sumNodeCode(n.children[0]);
    } else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== VarType.INTEGER || sum2Type !== VarType.INTEGER) {
            throw new Error("Invalid operand types " + sum1Type
                            + " and " + sum2Type);
        }
        emit("pop rax");            // second operand (first stays on stack)
        emit("cmp [rsp], rax");     // do the compare
        switch (n.children[1].token.lexeme) {
            case ">=":  emit("setge al");   break;
            case "<=":  emit("setle al");   break;
            case ">":   emit("setg al");    break;
            case "<":   emit("setl al");    break;
            case "==":  emit("sete al");    break;
            case "!=":  emit("setne al");   break;
            default:    ICE();
        }
        emit("movzx qword rax, al");    // move zero with extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}

function sumNodeCode(n: TreeNode): VarType {
    emit("; start sumNodeCode");
    // sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1) {
        return termNodeCode(n.children[0]);
    } else {
        let sumType = sumNodeCode(n.children[0]);
        let termType = termNodeCode(n.children[2]);
        if (sumType !== VarType.INTEGER || termType !== VarType.INTEGER) {
            throw new Error("Invalid operand types " + sumType
                            + " and " + termType);
        }
        emit("pop rbx");    // second operand
        emit("pop rax");    // first operand
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

function termNodeCode(n: TreeNode): VarType {
    emit("; start termNodeCode");
    // term -> term MULOP neg | neg
    if (n.children.length === 1) {
        return negNodeCode(n.children[0]);
    } else {
        let termType = termNodeCode(n.children[0]);
        let negType = negNodeCode(n.children[2]);
        if (termType !== VarType.INTEGER || negType !== VarType.INTEGER) {
            throw new Error("Invalid operand types " + termType
                            + " and " + negType);
        }
        emit("pop rbx");    // second operand
        emit("pop rax");    // first operand
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

function negNodeCode(n: TreeNode): VarType {
    emit("; start negNodeCode");
    // MINUS neg | factor
    if (n.children.length === 1) {
        return factorNodeCode(n.children[0]);
    } else {
        let negType = negNodeCode(n.children[1]);
        if (negType !== VarType.INTEGER) {
            throw new Error("Invalid operand type " + negType);
        }
        emit("pop rax");
        emit("neg rax");
        emit("push rax");
        return VarType.INTEGER;
    }
}

function factorNodeCode(n: TreeNode): VarType {
    emit("; start factorNodeCode");
    // factor -> NUM | LP expr RP | ID | STRING_CONSTANT
    let child = n.children[0];
    switch (child.sym) {
        case "NUM":
            let v = parseInt(child.token.lexeme, 10);
            emit(`push qword ${v}`);
            return VarType.INTEGER;
        case "LP":
            return exprNodeCode(n.children[1]);
        case "ID":
            let vname = child.token.lexeme;
            if (!symTable.has(vname)) {
                throw new Error("Identifier does not exist");
            }
            let vinfo = symTable.get(vname);
            emit(`push qword [${vinfo.location}]`);
            return vinfo.type;
        case "STRING_CONSTANT":
            let lbl = stringConstantNodeCode(n.children[0]);
            emit(`push ${lbl}`);
            return VarType.STRING;
        default:
            ICE();
    }
}

function condNodeCode(n: TreeNode) {
    emit("; start condNodeCode");
    // cond -> IF LP expr RP braceblock |
    //   IF LP expr RP braceblock ELSE braceblock
    exprNodeCode(n.children[2]);    // leaves result in rax
    emit("pop rax");                // NEW!
    emit("cmp rax, 0");
    var endifLabel = label();
    emit(`je ${endifLabel}`);
    braceblockNodeCode(n.children[4]);
    if (n.children.length === 5) {
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
    emit("; start loopNodeCode");
    // WHILE LP expr RP braceblock
    var whileLabel = label();
    emit(`${whileLabel}:`);
    exprNodeCode(n.children[2]);
    emit("pop rax");
    emit("cmp rax, 0");
    var endWhileLabel = label();
    emit(`je ${endWhileLabel}`);
    braceblockNodeCode(n.children[4]);
    emit(`jmp ${whileLabel}`);
    emit(`${endWhileLabel}:`);
}

// UTILITY FUNCTIONS

function emit(instr: string) {
    asmCode += instr + "\n";
}

function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}

function convertStackTopToZeroOrOneInteger(type: VarType) {
    if (type === VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    } else {
        throw new Error("Value at top of stack must be integer");
    }
}

function moveBytesFromStackToLocation(loc: string) {
    emit("pop rax");
    emit(`mov [${loc}], rax`);
}

function outputSymbolTableInfo() {
    for (let vname of symTable.table.keys()) {
        let vinfo = symTable.get(vname);
        emit(`${vinfo.location}:`);
        emit("dq 0");
    }
}

function outputStringPoolInfo() {
    for (let key of stringPool.keys()) {
        let lbl = stringPool.get(key);
        emit(`${lbl}:`);
        for (let i = 0; i < key.length; i++) {
            emit(`db ${key.charCodeAt(i)}`);
        }
        emit("db 0");       // null terminator
    }
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
