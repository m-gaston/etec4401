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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
var Token_1 = require("./Token");
var Tokenizer = /** @class */ (function () {
    function Tokenizer(grammar) {
        this.grammar = grammar;
    }
    Tokenizer.prototype.setInput = function (inputData) {
        this.inputData = inputData;
        this.currentLine = 1;
        this.idx = 0;
    };
    Tokenizer.prototype.next = function () {
        var e_1, _a;
        if (this.curToken !== undefined) {
            this.prevToken = this.curToken;
        }
        // Check for EOF
        if (this.idx >= this.inputData.length) {
            return new Token_1.Token("$", undefined, this.currentLine);
        }
        try {
            for (var _b = __values(this.grammar.terminals), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), sym = _d[0], rex = _d[1];
                rex.lastIndex = this.idx;
                var m = rex.exec(this.inputData);
                if (m) {
                    // m[0] contains matched text as string
                    var lexeme = m[0];
                    var token = new Token_1.Token(sym, lexeme, this.currentLine);
                    // this.curToken = token;
                    this.currentLine += (lexeme.match(/\n/g) || []).length;
                    this.idx += lexeme.length;
                    if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                        // Return new Token using sym, lexeme, and line number
                        this.curToken = token;
                        return token;
                    }
                    else {
                        // Skip whitespace and get next real token
                        return this.next();
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        throw new Error("Syntax error on line " + this.currentLine);
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
