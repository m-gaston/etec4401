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
function splitAndTrim(s, sep) {
    var result = s.split(sep);
    for (var i = 0; i < result.length; i++) {
        result[i] = result[i].trim();
    }
    return result;
}
var Grammar = /** @class */ (function () {
    function Grammar(spec) {
        var e_1, _a, e_2, _b;
        this.terminals = new Map();
        this.nonterminals = new Map();
        this.symbols = new Set();
        var lines = splitAndTrim(spec, "\n");
        var i;
        // Process terminals
        for (i = 0; i < lines.length; i++) {
            if (lines[i] == "") {
                break;
            }
            var pair = splitAndTrim(lines[i], "->");
            if (pair.length != 2) {
                throw new Error("Invalid terminal on line " + (i + 1) + ": " + lines[i]);
            }
            if (this.terminals.has(pair[0])) {
                throw new Error("Terminal '" + pair[0] + "' already exists");
            }
            var rex = new RegExp(pair[1], "gy");
            this.terminals.set(pair[0], rex);
            this.symbols.add(pair[0]);
        }
        this.terminals.set("WHITESPACE", RegExp(/\s/gy));
        // Process nonterminals
        for (; i < lines.length; i++) {
            if (lines[i] == "") {
                continue;
            }
            var pair = splitAndTrim(lines[i], "->");
            if (pair.length != 2) {
                throw new Error("Invalid nonterminal on line " + (i + 1) + ": " + lines[i]);
            }
            var tmp = splitAndTrim(pair[1], "|");
            var prods = [];
            try {
                for (var tmp_1 = (e_1 = void 0, __values(tmp)), tmp_1_1 = tmp_1.next(); !tmp_1_1.done; tmp_1_1 = tmp_1.next()) {
                    var x = tmp_1_1.value;
                    prods.push(x.split(" "));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tmp_1_1 && !tmp_1_1.done && (_a = tmp_1["return"])) _a.call(tmp_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.nonterminals.has(pair[0])) {
                try {
                    for (var prods_1 = (e_2 = void 0, __values(prods)), prods_1_1 = prods_1.next(); !prods_1_1.done; prods_1_1 = prods_1.next()) {
                        var prod = prods_1_1.value;
                        this.nonterminals.get(pair[0]).push(prod);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (prods_1_1 && !prods_1_1.done && (_b = prods_1["return"])) _b.call(prods_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                this.nonterminals.set(pair[0], prods);
            }
            this.symbols.add(pair[0]);
        }
        // Check for unused symbols
        /* let start: string = this.nonterminals.keys().next().value;
        let reachable: Set<string> = this.dfs(start, new Set<string>());
        for (let sym of this.symbols) {
            if (!reachable.has(sym)) {
                throw new Error("Unused symbol: '" + sym + "'");
            }
        } */
    }
    return Grammar;
}());
exports.Grammar = Grammar;
