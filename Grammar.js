"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(spec) {
        this.prods = new Map();
        var lines = spec.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line.length == 0)
                continue;
            var pair = line.split(" -> ");
            if (pair.length != 2)
                throw new Error("Invalid production");
            if (this.prods.has(pair[0]))
                throw new Error("Terminal already exists");
            var rex = new RegExp(pair[1], "gy");
            this.prods.set(pair[0], rex);
        }
    }
    return Grammar;
}());
exports.Grammar = Grammar;
