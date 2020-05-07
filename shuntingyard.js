"use strict";
exports.__esModule = true;
var Grammar_1 = require("./Grammar");
var Tokenizer_1 = require("./Tokenizer");
var TreeNode_1 = require("./TreeNode");
var precedence = new Map();
precedence.set("POWOP", 4);
precedence.set("NEGATE", 3);
precedence.set("BITNOT", 2);
precedence.set("MULOP", 1);
precedence.set("ADDOP", 0);
var associativity = new Map();
associativity.set("POWOP", "right");
associativity.set("NEGATE", "right");
associativity.set("BITNOT", "right");
associativity.set("MULOP", "left");
associativity.set("ADDOP", "left");
var arity = new Map();
arity.set("POWOP", 2);
arity.set("NEGATE", 1);
arity.set("BITNOT", 1);
arity.set("MULOP", 2);
arity.set("ADDOP", 2);
var fs = require("fs");
var spec = fs.readFileSync("grammar.txt", "utf8");
var gram = new Grammar_1.Grammar(spec);
var tokenizer = new Tokenizer_1.Tokenizer(gram);
var operatorStack = new Array();
var operandStack = new Array();
function doOperation() {
    var opNode = operatorStack.pop();
    var c1 = operandStack.pop();
    if (arity.get(opNode.sym) === 2) {
        var c2 = operandStack.pop();
        opNode.children.push(c2);
    }
    opNode.children.push(c1);
    operandStack.push(opNode);
}
function parse(input) {
    tokenizer = new Tokenizer_1.Tokenizer(gram);
    tokenizer.setInput(input);
    while (true) {
        var t = tokenizer.next();
        if (t.lexeme === "-") {
            var p = tokenizer.prevToken;
            if (p === undefined || p.sym === "LPAREN" || precedence.has(p.sym)) {
                t.sym = "NEGATE";
            }
        }
        var sym = t.sym;
        if (sym == "$") {
            break;
        }
        else if (sym === "NUM" || sym === "ID") {
            operandStack.push(new TreeNode_1.TreeNode(sym, t));
        }
        else if (sym === "LPAREN") {
            operatorStack.push(new TreeNode_1.TreeNode(sym, t));
        }
        else if (sym === "RPAREN") {
            while (operatorStack[operatorStack.length - 1].sym !== "LPAREN") {
                doOperation();
            }
            operatorStack.pop(); // discard LPAREN
        }
        else {
            var assoc = associativity.get(sym);
            while (true) {
                if (assoc === "right" && arity.get(sym) === 1) {
                    break;
                }
                if (operatorStack.length === 0) {
                    break;
                }
                var A = operatorStack[operatorStack.length - 1].sym;
                if (assoc === "left" && precedence.get(A) >= precedence.get(sym)) {
                    doOperation();
                }
                else if (assoc === "right" && precedence.get(A) > precedence.get(sym)) {
                    doOperation();
                }
                else {
                    break;
                }
            }
            operatorStack.push(new TreeNode_1.TreeNode(sym, t));
        }
    }
    while (operatorStack.length !== 0) {
        doOperation();
    }
    return operandStack.pop(); // root node
}
exports.parse = parse;
