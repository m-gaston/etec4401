import {Grammar} from "./Grammar"
import {Tokenizer} from "./Tokenizer"
import {TreeNode} from "./TreeNode"

declare var require: any;

let precedence = new Map<string, number>();
precedence.set("POWOP", 4);
precedence.set("NEGATE", 3);
precedence.set("BITNOT", 2);
precedence.set("MULOP", 1);
precedence.set("ADDOP", 0);

let associativity = new Map<string, string>();
associativity.set("POWOP", "right");
associativity.set("NEGATE", "right");
associativity.set("BITNOT", "right");
associativity.set("MULOP", "left");
associativity.set("ADDOP", "left");

let arity = new Map<string, number>();
arity.set("POWOP", 2);
arity.set("NEGATE", 1);
arity.set("BITNOT", 1);
arity.set("MULOP", 2);
arity.set("ADDOP", 2);

let fs = require("fs");
let spec = fs.readFileSync("grammar.txt", "utf8");
let gram = new Grammar(spec);
let tokenizer = new Tokenizer(gram);

let operatorStack = new Array<TreeNode>();
let operandStack = new Array<TreeNode>();

function doOperation() {
    let opNode = operatorStack.pop();
    let c1 = operandStack.pop();
    if (arity.get(opNode.sym) === 2) {
        let c2 = operandStack.pop();
        opNode.children.push(c2);
    }
    opNode.children.push(c1);
    operandStack.push(opNode);
}

export function parse(input: string): TreeNode {
    tokenizer = new Tokenizer(gram);
    tokenizer.setInput(input);
    while (true) {
        let t = tokenizer.next();
        if (t.lexeme === "-") {
            let p = tokenizer.prevToken;
            if (p === undefined || p.sym === "LPAREN" || precedence.has(p.sym)) {
                t.sym = "NEGATE";
            }
        }
        let sym = t.sym;
        if (sym == "$") {
            break;
        } else if (sym === "NUM" || sym === "ID") {
            operandStack.push(new TreeNode(sym, t));
        } else if (sym === "LPAREN") {
            operatorStack.push(new TreeNode(sym, t));
        } else if (sym === "RPAREN") {
            while (operatorStack[operatorStack.length - 1].sym !== "LPAREN") {
                doOperation();
            }
            operatorStack.pop();    // discard LPAREN
        } else {
            let assoc = associativity.get(sym);
            while (true) {
                if (assoc === "right" && arity.get(sym) === 1) {
                    break;
                }
                if (operatorStack.length === 0) {
                    break;
                }
                let A = operatorStack[operatorStack.length - 1].sym;
                if (assoc === "left" && precedence.get(A) >= precedence.get(sym)) {
                    doOperation();
                } else if (assoc === "right" && precedence.get(A) > precedence.get(sym)) {
                    doOperation();
                } else {
                    break;
                }
            }
            operatorStack.push(new TreeNode(sym, t));
        }
    }
    while (operatorStack.length !== 0) {
        doOperation();
    }
    return operandStack.pop();      // root node
}
