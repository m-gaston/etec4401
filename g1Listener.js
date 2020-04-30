// Generated from g1.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by g1Parser.
function g1Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

g1Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
g1Listener.prototype.constructor = g1Listener;

// Enter a parse tree produced by g1Parser#program.
g1Listener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by g1Parser#program.
g1Listener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by g1Parser#varDeclList.
g1Listener.prototype.enterVarDeclList = function(ctx) {
};

// Exit a parse tree produced by g1Parser#varDeclList.
g1Listener.prototype.exitVarDeclList = function(ctx) {
};


// Enter a parse tree produced by g1Parser#varDecl.
g1Listener.prototype.enterVarDecl = function(ctx) {
};

// Exit a parse tree produced by g1Parser#varDecl.
g1Listener.prototype.exitVarDecl = function(ctx) {
};


// Enter a parse tree produced by g1Parser#stmts.
g1Listener.prototype.enterStmts = function(ctx) {
};

// Exit a parse tree produced by g1Parser#stmts.
g1Listener.prototype.exitStmts = function(ctx) {
};


// Enter a parse tree produced by g1Parser#stmt.
g1Listener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by g1Parser#stmt.
g1Listener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by g1Parser#assign.
g1Listener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by g1Parser#assign.
g1Listener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by g1Parser#cond.
g1Listener.prototype.enterCond = function(ctx) {
};

// Exit a parse tree produced by g1Parser#cond.
g1Listener.prototype.exitCond = function(ctx) {
};


// Enter a parse tree produced by g1Parser#loop.
g1Listener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by g1Parser#loop.
g1Listener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by g1Parser#braceblock.
g1Listener.prototype.enterBraceblock = function(ctx) {
};

// Exit a parse tree produced by g1Parser#braceblock.
g1Listener.prototype.exitBraceblock = function(ctx) {
};


// Enter a parse tree produced by g1Parser#expr.
g1Listener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by g1Parser#expr.
g1Listener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by g1Parser#orexp.
g1Listener.prototype.enterOrexp = function(ctx) {
};

// Exit a parse tree produced by g1Parser#orexp.
g1Listener.prototype.exitOrexp = function(ctx) {
};


// Enter a parse tree produced by g1Parser#andexp.
g1Listener.prototype.enterAndexp = function(ctx) {
};

// Exit a parse tree produced by g1Parser#andexp.
g1Listener.prototype.exitAndexp = function(ctx) {
};


// Enter a parse tree produced by g1Parser#notexp.
g1Listener.prototype.enterNotexp = function(ctx) {
};

// Exit a parse tree produced by g1Parser#notexp.
g1Listener.prototype.exitNotexp = function(ctx) {
};


// Enter a parse tree produced by g1Parser#rel.
g1Listener.prototype.enterRel = function(ctx) {
};

// Exit a parse tree produced by g1Parser#rel.
g1Listener.prototype.exitRel = function(ctx) {
};


// Enter a parse tree produced by g1Parser#sum.
g1Listener.prototype.enterSum = function(ctx) {
};

// Exit a parse tree produced by g1Parser#sum.
g1Listener.prototype.exitSum = function(ctx) {
};


// Enter a parse tree produced by g1Parser#term.
g1Listener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by g1Parser#term.
g1Listener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by g1Parser#neg.
g1Listener.prototype.enterNeg = function(ctx) {
};

// Exit a parse tree produced by g1Parser#neg.
g1Listener.prototype.exitNeg = function(ctx) {
};


// Enter a parse tree produced by g1Parser#factor.
g1Listener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by g1Parser#factor.
g1Listener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by g1Parser#returnStmt.
g1Listener.prototype.enterReturnStmt = function(ctx) {
};

// Exit a parse tree produced by g1Parser#returnStmt.
g1Listener.prototype.exitReturnStmt = function(ctx) {
};



exports.g1Listener = g1Listener;