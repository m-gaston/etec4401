// Generated from g1.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var g1Listener = require('./g1Listener').g1Listener;
var grammarFileName = "g1.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000eA\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004 \n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u00050\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0002\u0002",
    "\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002<\u0002\u0012",
    "\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001f",
    "\u0003\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n1\u0003\u0002\u0002",
    "\u0002\f7\u0003\u0002\u0002\u0002\u000e;\u0003\u0002\u0002\u0002\u0010",
    "=\u0003\u0002\u0002\u0002\u0012\u0013\u0005\f\u0007\u0002\u0013\u0003",
    "\u0003\u0002\u0002\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015\u0016",
    "\u0005\u0004\u0003\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0019",
    "\u0003\u0002\u0002\u0002\u0018\u0014\u0003\u0002\u0002\u0002\u0018\u0017",
    "\u0003\u0002\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a ",
    "\u0005\b\u0005\u0002\u001b \u0005\n\u0006\u0002\u001c\u001d\u0005\u0010",
    "\t\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e \u0003\u0002\u0002",
    "\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002",
    "\u0002\u001f\u001c\u0003\u0002\u0002\u0002 \u0007\u0003\u0002\u0002",
    "\u0002!\"\u0007\t\u0002\u0002\"#\u0007\u0007\u0002\u0002#$\u0005\u000e",
    "\b\u0002$%\u0007\b\u0002\u0002%&\u0005\f\u0007\u0002&0\u0003\u0002\u0002",
    "\u0002\'(\u0007\t\u0002\u0002()\u0007\u0007\u0002\u0002)*\u0005\u000e",
    "\b\u0002*+\u0007\b\u0002\u0002+,\u0005\f\u0007\u0002,-\u0007\n\u0002",
    "\u0002-.\u0005\f\u0007\u0002.0\u0003\u0002\u0002\u0002/!\u0003\u0002",
    "\u0002\u0002/\'\u0003\u0002\u0002\u00020\t\u0003\u0002\u0002\u00021",
    "2\u0007\u0006\u0002\u000223\u0007\u0007\u0002\u000234\u0005\u000e\b",
    "\u000245\u0007\b\u0002\u000256\u0005\f\u0007\u00026\u000b\u0003\u0002",
    "\u0002\u000278\u0007\f\u0002\u000289\u0005\u0004\u0003\u00029:\u0007",
    "\r\u0002\u0002:\r\u0003\u0002\u0002\u0002;<\u0007\u000e\u0002\u0002",
    "<\u000f\u0003\u0002\u0002\u0002=>\u0007\u000b\u0002\u0002>?\u0005\u000e",
    "\b\u0002?\u0011\u0003\u0002\u0002\u0002\u0005\u0018\u001f/"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "';'", "'while'", "'('", "')'", "'if'", 
                     "'else'", "'return'", "'{'", "'}'" ];

var symbolicNames = [ null, "WHITESPACE", "COMMENT", "SEMI", "WHILE", "LP", 
                      "RP", "IF", "ELSE", "RETURN", "LBR", "RBR", "NUM" ];

var ruleNames =  [ "program", "stmts", "stmt", "cond", "loop", "braceblock", 
                   "expr", "returnStmt" ];

function g1Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

g1Parser.prototype = Object.create(antlr4.Parser.prototype);
g1Parser.prototype.constructor = g1Parser;

Object.defineProperty(g1Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

g1Parser.EOF = antlr4.Token.EOF;
g1Parser.WHITESPACE = 1;
g1Parser.COMMENT = 2;
g1Parser.SEMI = 3;
g1Parser.WHILE = 4;
g1Parser.LP = 5;
g1Parser.RP = 6;
g1Parser.IF = 7;
g1Parser.ELSE = 8;
g1Parser.RETURN = 9;
g1Parser.LBR = 10;
g1Parser.RBR = 11;
g1Parser.NUM = 12;

g1Parser.RULE_program = 0;
g1Parser.RULE_stmts = 1;
g1Parser.RULE_stmt = 2;
g1Parser.RULE_cond = 3;
g1Parser.RULE_loop = 4;
g1Parser.RULE_braceblock = 5;
g1Parser.RULE_expr = 6;
g1Parser.RULE_returnStmt = 7;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitProgram(this);
	}
};




g1Parser.ProgramContext = ProgramContext;

g1Parser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, g1Parser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitStmts(this);
	}
};




g1Parser.StmtsContext = StmtsContext;

g1Parser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, g1Parser.RULE_stmts);
    try {
        this.state = 22;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.WHILE:
        case g1Parser.IF:
        case g1Parser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.stmt();
            this.state = 19;
            this.stmts();
            break;
        case g1Parser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.returnStmt = function() {
    return this.getTypedRuleContext(ReturnStmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(g1Parser.SEMI, 0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitStmt(this);
	}
};




g1Parser.StmtContext = StmtContext;

g1Parser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, g1Parser.RULE_stmt);
    try {
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.cond();
            break;
        case g1Parser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.loop();
            break;
        case g1Parser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 26;
            this.returnStmt();
            this.state = 27;
            this.match(g1Parser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(g1Parser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(g1Parser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(g1Parser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(g1Parser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitCond(this);
	}
};




g1Parser.CondContext = CondContext;

g1Parser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, g1Parser.RULE_cond);
    try {
        this.state = 45;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.match(g1Parser.IF);
            this.state = 32;
            this.match(g1Parser.LP);
            this.state = 33;
            this.expr();
            this.state = 34;
            this.match(g1Parser.RP);
            this.state = 35;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(g1Parser.IF);
            this.state = 38;
            this.match(g1Parser.LP);
            this.state = 39;
            this.expr();
            this.state = 40;
            this.match(g1Parser.RP);
            this.state = 41;
            this.braceblock();
            this.state = 42;
            this.match(g1Parser.ELSE);
            this.state = 43;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(g1Parser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(g1Parser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(g1Parser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitLoop(this);
	}
};




g1Parser.LoopContext = LoopContext;

g1Parser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, g1Parser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(g1Parser.WHILE);
        this.state = 48;
        this.match(g1Parser.LP);
        this.state = 49;
        this.expr();
        this.state = 50;
        this.match(g1Parser.RP);
        this.state = 51;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(g1Parser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(g1Parser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitBraceblock(this);
	}
};




g1Parser.BraceblockContext = BraceblockContext;

g1Parser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, g1Parser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(g1Parser.LBR);
        this.state = 54;
        this.stmts();
        this.state = 55;
        this.match(g1Parser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUM = function() {
    return this.getToken(g1Parser.NUM, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitExpr(this);
	}
};




g1Parser.ExprContext = ExprContext;

g1Parser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, g1Parser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(g1Parser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_returnStmt;
    return this;
}

ReturnStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStmtContext.prototype.constructor = ReturnStmtContext;

ReturnStmtContext.prototype.RETURN = function() {
    return this.getToken(g1Parser.RETURN, 0);
};

ReturnStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterReturnStmt(this);
	}
};

ReturnStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitReturnStmt(this);
	}
};




g1Parser.ReturnStmtContext = ReturnStmtContext;

g1Parser.prototype.returnStmt = function() {

    var localctx = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, g1Parser.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(g1Parser.RETURN);
        this.state = 60;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.g1Parser = g1Parser;
