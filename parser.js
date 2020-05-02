"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var Token_1 = require("./Token");
var antlr4 = require('./antlr4');
var Lexer = require('./g1Lexer.js').g1Lexer;
var Parser = require('./g1Parser.js').g1Parser;
var asmCode = "";
var labelCounter = 0;
var symTable;
var stringPool;
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
    VarType[VarType["STRING"] = 1] = "STRING";
    VarType[VarType["VOID"] = 2] = "VOID";
})(VarType || (VarType = {}));
var VarInfo = /** @class */ (function () {
    function VarInfo(t, location) {
        this.type = t;
        this.location = location;
    }
    return VarInfo;
}());
var SymbolTable = /** @class */ (function () {
    function SymbolTable() {
        this.table = new Map();
    }
    SymbolTable.prototype.get = function (name) {
        if (!this.table.has(name)) {
            throw new Error("Does not exist");
        }
        return this.table.get(name);
    };
    SymbolTable.prototype.set = function (name, v) {
        if (this.table.has(name)) {
            throw new Error("Redeclaration");
        }
        this.table.set(name, v);
    };
    SymbolTable.prototype.has = function (name) {
        return this.table.has(name);
    };
    return SymbolTable;
}());
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
    symTable = new SymbolTable();
    stringPool = new Map();
    emit("default rel");
    emit("section .text");
    emit("%include \"doCall.asm\"");
    emit("global main");
    emit("main:");
    emit("mov arg0, 0");
    emit("mov arg1, string_r");
    emit("ffcall fdopen");
    emit("mov [stdin], rax");
    emit("mov arg0, 1");
    emit("mov arg1, string_w");
    emit("ffcall fdopen");
    emit("mov [stdout], rax");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    emit("stdin: dq 0");
    emit("stdout: dq 0");
    emit("string_r: db 'r', 0");
    emit("string_w: db 'w', 0");
    emit("string_a: db 'a', 0");
    emit("string_rplus: db 'r+', 0");
    emit("string_percent_s: db '%s', 0");
    emit("string_percent_d: db '%d', 0");
    emit("fgets_buffer: times 64 db 0");
    outputSymbolTableInfo();
    outputStringPoolInfo();
    return asmCode;
}
// TERMINALS
function typeNodeCode(n) {
    if (n.token.lexeme === "int") {
        return VarType.INTEGER;
    }
    else if (n.token.lexeme === "string") {
        return VarType.STRING;
    }
    else {
        throw new Error("Invalid type");
    }
}
function stringConstantNodeCode(n) {
    var s = n.token.lexeme;
    s = s.slice(1, -1);
    var tmp = "";
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === "\\") {
            if (s.charAt(i + 1) === "\"") {
                tmp += "\"";
                i++;
            }
            else if (s.charAt(i + 1) === "n") {
                tmp += "\n";
                i++;
            }
            else if (s.charAt(i + 1) === "\\") {
                tmp += "\\";
                i++;
            }
            else {
                tmp += s.charAt(i);
            }
        }
        else {
            tmp += s.charAt(i);
        }
    }
    if (!stringPool.has(tmp)) {
        stringPool.set(tmp, label());
    }
    return stringPool.get(tmp); // return the label
}
// NONTERMINALS
function programNodeCode(n) {
    // program -> braceblock
    if (n.sym != "program") {
        ICE();
    }
    varDeclListNodeCode(n.children[0]);
    braceblockNodeCode(n.children[1]);
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
    // stmt -> cond | loop | returnStmt SEMI | assign SEMI | funcCall SEMI
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
        case "assign":
            assignNodeCode(c);
            break;
        case "funcCall":
            funcCallNodeCode(c);
            break;
        default:
            ICE();
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
function braceblockNodeCode(n) {
    // braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
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
        return relNodeCode(n.children[0]);
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
function relNodeCode(n) {
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
    // factor -> NUM | LP expr RP | ID | STRING_CONSTANT | funcCall
    var child = n.children[0];
    switch (child.sym) {
        case "NUM":
            var v = parseInt(child.token.lexeme, 10);
            emit("push qword " + v);
            return VarType.INTEGER;
        case "LP":
            return exprNodeCode(n.children[1]);
        case "ID":
            var vname = child.token.lexeme;
            if (!symTable.has(vname)) {
                throw new Error("Identifier does not exist");
            }
            var vinfo = symTable.get(vname);
            emit("push qword [" + vinfo.location + "]");
            return vinfo.type;
        case "STRING_CONSTANT":
            var lbl = stringConstantNodeCode(n.children[0]);
            emit("push " + lbl);
            return VarType.STRING;
        case "funcCall":
            var type = funcCallNodeCode(n.children[0]);
            if (type === VarType.VOID) {
                throw new Error("Can't use VOID in expression");
            }
            emit("push rax");
            return type;
        default:
            ICE();
    }
}
function varDeclListNodeCode(n) {
    // varDeclList -> varDecl SEMI varDeclList | lambda
    if (n.children.length === 0) {
        return;
    }
    else {
        varDeclNodeCode(n.children[0]);
        varDeclListNodeCode(n.children[2]);
    }
}
function varDeclNodeCode(n) {
    // varDecl -> TYPE ID
    var vname = n.children[1].token.lexeme;
    var vtype = typeNodeCode(n.children[0]);
    symTable.set(vname, new VarInfo(vtype, label()));
}
function assignNodeCode(n) {
    // assign -> ID EQ expr
    var t = exprNodeCode(n.children[2]);
    var vname = n.children[0].token.lexeme;
    if (symTable.get(vname).type !== t) {
        throw new Error("Type mismatch");
    }
    moveBytesFromStackToLocation(symTable.get(vname).location);
}
function funcCallNodeCode(n) {
    // funcCall -> builtinFuncCall
    return builtinFuncCallNodeCode(n.children[0]);
}
function builtinFuncCallNodeCode(n) {
    // builtinFuncCall -> PRINT LP expr RP
    //                  | INPUT LP RP
    //                  | OPEN LP expr RP
    //                  | READ LP expr RP
    //                  | WRITE LP expr CMA expr RP
    //                  | CLOSE LP expr RP
    switch (n.children[0].sym) {
        case "PRINT":
            {
                // PRINT LP expr RP
                // printf("%d", x) or printf("%s", p)
                var outputType = exprNodeCode(n.children[2]);
                var fmt = void 0;
                if (outputType === VarType.INTEGER) {
                    fmt = "string_percent_d";
                }
                else if (outputType === VarType.STRING) {
                    fmt = "string_percent_s";
                }
                else {
                    throw new Error("PRINT expected arg of type INTEGER or STRING");
                }
                emit("pop arg1"); // the thing to print
                emit("mov arg0, " + fmt);
                emit("ffvcall printf, 0");
                // need to call fflush(NULL)
                emit("mov arg0, 0");
                emit("ffcall fflush");
                return VarType.VOID;
            }
        case "INPUT":
            {
                // INPUT LP RP
                // fgets(ptr, size, stream)
                // strtol(ptr, eptr, base)
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 64");
                emit("mov arg2, [stdin]");
                emit("ffcall fgets");
                // check for errors
                var lbl = label();
                emit("cmp qword [rsp], -1");
                emit("jne " + lbl);
                emit("ffcall abort");
                emit(lbl + ":");
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 0");
                emit("mov arg2, 10");
                emit("ffcall strtol"); // result is in rax
                return VarType.INTEGER;
            }
        case "OPEN":
            {
                // OPEN LP expr RP
                // fopen(string, "r+")
                var type = exprNodeCode(n.children[2]);
                if (type !== VarType.STRING) {
                    throw new Error("OPEN expected arg of type STRING");
                }
                // tmp = fopen(filename, "a")
                emit("mov arg0, [rsp]"); // filename (string)
                emit("mov arg1, string_a");
                emit("ffcall fopen");
                // fclose(tmp)
                emit("mov arg0, rax");
                emit("ffcall fclose");
                // fopen(filename, "r+")
                emit("pop arg0"); // filename; remove from stack
                emit("mov arg1, string_rplus");
                emit("ffcall fopen"); // result is in rax
                return VarType.INTEGER;
            }
        case "READ":
            {
                // READ LP expr RP
                // fgets(ptr, size, handle)
                // strtol(ptr, eptr, base)
                var handleType = exprNodeCode(n.children[2]);
                if (handleType !== VarType.INTEGER) {
                    throw new Error("READ expected arg of type INTEGER");
                }
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 64");
                emit("pop arg2");
                emit("ffcall fgets");
                // check for errors
                var lbl = label();
                emit("cmp qword [rsp], -1");
                emit("jne " + lbl);
                emit("ffcall abort");
                emit(lbl + ":");
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 0");
                emit("mov arg2, 10");
                emit("ffcall strtol"); // result is in rax
                return VarType.INTEGER;
            }
        case "WRITE":
            {
                // WRITE LP expr CMA expr RP
                // fprintf(fp, "%s", str) or fprintf(fp, "%d", num)
                var handleType = exprNodeCode(n.children[2]);
                if (handleType !== VarType.INTEGER) {
                    throw new Error("WRITE expected arg 1 of type INTEGER");
                }
                var outputType = exprNodeCode(n.children[4]);
                var fmt = void 0;
                if (outputType === VarType.INTEGER) {
                    fmt = "string_percent_d";
                }
                else if (outputType === VarType.STRING) {
                    fmt = "string_percent_s";
                }
                else {
                    throw new Error("WRITE expected arg 2 of type INTEGER or STRING");
                }
                emit("pop arg2"); // the thing to print
                emit("mov arg1, " + fmt);
                emit("pop arg0"); // the handle
                emit("ffvcall fprintf, 0");
                // need to call fflush(NULL)
                emit("mov arg0, 0");
                emit("ffcall fflush");
                return VarType.VOID;
            }
        case "CLOSE":
            {
                // CLOSE LP expr RP
                // fclose(handle)
                var type = exprNodeCode(n.children[2]);
                if (type !== VarType.INTEGER) {
                    throw new Error("CLOSE expected arg of type INTEGER");
                }
                emit("pop arg0"); // argument for fclose
                emit("ffcall fclose");
                return VarType.VOID;
            }
    }
}
// UTILITY FUNCTIONS
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
function moveBytesFromStackToLocation(loc) {
    emit("pop rax");
    emit("mov [" + loc + "], rax");
}
function outputSymbolTableInfo() {
    var e_1, _a;
    try {
        for (var _b = __values(symTable.table.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var vname = _c.value;
            var vinfo = symTable.get(vname);
            emit(vinfo.location + ":");
            emit("dq 0");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function outputStringPoolInfo() {
    var e_2, _a;
    try {
        for (var _b = __values(stringPool.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var lbl = stringPool.get(key);
            emit(lbl + ":");
            for (var i = 0; i < key.length; i++) {
                emit("db " + key.charCodeAt(i));
            }
            emit("db 0"); // null terminator
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
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
