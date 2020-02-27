function splitAndTrim(s: string, sep: string): string[] {
    let result = s.split(sep);
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].trim();
    }
    return result;
}

export class Grammar {
    terminals: Map<string, RegExp> = new Map();
    nonterminals: Map<string, string[][]> = new Map();
    symbols: Set<string> = new Set();
    constructor(spec: string) {
        let lines = splitAndTrim(spec, "\n");
        let i: number;

        // Process terminals
        for (i = 0; i < lines.length; i++) {
            if (lines[i] == "") {
                break;
            }
            let pair = splitAndTrim(lines[i], "->");
            if (pair.length != 2) {
                throw new Error("Invalid terminal on line " + (i + 1) + ": " + lines[i]);
            }
            if (this.terminals.has(pair[0])) {
                throw new Error("Terminal '" + pair[0] + "' already exists");
            }
            let rex = new RegExp(pair[1], "gy");
            this.terminals.set(pair[0], rex);
            this.symbols.add(pair[0]);
        }
        this.terminals.set("WHITESPACE", RegExp(/\s/gy));

        // Process nonterminals
        for (; i < lines.length; i++) {
            if (lines[i] == "") {
                continue;
            }
            let pair = splitAndTrim(lines[i], "->");
            if (pair.length != 2) {
                throw new Error("Invalid nonterminal on line " + (i + 1) + ": " + lines[i]);
            }
            let tmp = splitAndTrim(pair[1], "|");
            let prods: string[][] = [];
            for (let x of tmp) {
                prods.push(x.split(" "));
            }
            if (this.nonterminals.has(pair[0])) {
                for (let prod of prods) {
                    this.nonterminals.get(pair[0]).push(prod);
                }
            } else {
                this.nonterminals.set(pair[0], prods);
            }
            this.symbols.add(pair[0]);
        }

        // Check for unused symbols
        let start: string = this.nonterminals.keys().next().value;
        let reachable: Set<string> = this.dfs(start, new Set<string>());
        for (let sym of this.symbols) {
            if (!reachable.has(sym)) {
                throw new Error("Unused symbol: '" + sym + "'");
            }
        }
    }

    dfs(node: string, visited: Set<string>): Set<string> {
        visited.add(node);
        for (let prod of this.nonterminals.get(node)) {
            for (let sym of prod) {
                if (!this.terminals.has(sym) && !this.nonterminals.has(sym)) {
                    throw new Error("Undefined symbol: '" + sym + "'");
                }

                if (!visited.has(sym)) {
                    if (this.terminals.has(sym)) {
                        visited.add(sym);
                    } else {
                        this.dfs(sym, visited);
                    }
                }
            }
        }
        return visited;
    }
}
