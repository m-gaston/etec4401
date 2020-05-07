import {Token} from "./Token"
import {Grammar} from "./Grammar"

export class Tokenizer {
    grammar: Grammar;
    inputData: string;
    currentLine: number;
    idx: number;
<<<<<<< Updated upstream
    constructor(grammar: Grammar) {
=======
    curToken: Token;
    prevToken: Token;
    constructor(grammar: Grammar)
    {
>>>>>>> Stashed changes
        this.grammar = grammar;
    }
    setInput(inputData: string) {
        this.inputData = inputData;
        this.currentLine = 1;
        this.idx = 0;
    }
<<<<<<< Updated upstream
    next(): Token {
=======
    next(): Token
    {
        if (this.curToken !== undefined) {
            this.prevToken = this.curToken;
        }
>>>>>>> Stashed changes
        // Check for EOF
        if (this.idx >= this.inputData.length) {
            return new Token("$", undefined, this.currentLine);
        }

        for (let [sym, rex] of this.grammar.terminals) {
            rex.lastIndex = this.idx;
            let m = rex.exec(this.inputData);
            if (m) {
                // m[0] contains matched text as string
                let lexeme = m[0];
                let token = new Token(sym, lexeme, this.currentLine);
                // this.curToken = token;
                this.currentLine += (lexeme.match(/\n/g) || []).length;
                this.idx += lexeme.length;
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    // Return new Token using sym, lexeme, and line number
                    this.curToken = token;
                    return token;
                } else {
                    // Skip whitespace and get next real token
                    return this.next();
                }
            }
        }
        throw new Error("Syntax error on line " + this.currentLine);
    }
}
