// Generated from g1.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var g1Listener = require('./g1Listener').g1Listener;
var grammarFileName = "g1.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0015\u0098\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00040\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005@\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0007\tT\n\t\f\t\u000e\tW\u000b\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n_\n\n\f\n\u000e\nb\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000bg\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\fn\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0007\ry\n\r\f\r\u000e\r|\u000b\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u0084\n\u000e\f\u000e\u000e\u000e\u0087\u000b\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u008c\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0093\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0002\u0006\u0010\u0012\u0018",
    "\u001a\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \u0002\u0002\u0002\u0094\u0002\"\u0003\u0002\u0002",
    "\u0002\u0004(\u0003\u0002\u0002\u0002\u0006/\u0003\u0002\u0002\u0002",
    "\b?\u0003\u0002\u0002\u0002\nA\u0003\u0002\u0002\u0002\fG\u0003\u0002",
    "\u0002\u0002\u000eK\u0003\u0002\u0002\u0002\u0010M\u0003\u0002\u0002",
    "\u0002\u0012X\u0003\u0002\u0002\u0002\u0014f\u0003\u0002\u0002\u0002",
    "\u0016m\u0003\u0002\u0002\u0002\u0018o\u0003\u0002\u0002\u0002\u001a",
    "}\u0003\u0002\u0002\u0002\u001c\u008b\u0003\u0002\u0002\u0002\u001e",
    "\u0092\u0003\u0002\u0002\u0002 \u0094\u0003\u0002\u0002\u0002\"#\u0005",
    "\f\u0007\u0002#\u0003\u0003\u0002\u0002\u0002$%\u0005\u0006\u0004\u0002",
    "%&\u0005\u0004\u0003\u0002&)\u0003\u0002\u0002\u0002\')\u0003\u0002",
    "\u0002\u0002($\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0005",
    "\u0003\u0002\u0002\u0002*0\u0005\b\u0005\u0002+0\u0005\n\u0006\u0002",
    ",-\u0005 \u0011\u0002-.\u0007\u0005\u0002\u0002.0\u0003\u0002\u0002",
    "\u0002/*\u0003\u0002\u0002\u0002/+\u0003\u0002\u0002\u0002/,\u0003\u0002",
    "\u0002\u00020\u0007\u0003\u0002\u0002\u000212\u0007\t\u0002\u000223",
    "\u0007\u0007\u0002\u000234\u0005\u000e\b\u000245\u0007\b\u0002\u0002",
    "56\u0005\f\u0007\u00026@\u0003\u0002\u0002\u000278\u0007\t\u0002\u0002",
    "89\u0007\u0007\u0002\u00029:\u0005\u000e\b\u0002:;\u0007\b\u0002\u0002",
    ";<\u0005\f\u0007\u0002<=\u0007\n\u0002\u0002=>\u0005\f\u0007\u0002>",
    "@\u0003\u0002\u0002\u0002?1\u0003\u0002\u0002\u0002?7\u0003\u0002\u0002",
    "\u0002@\t\u0003\u0002\u0002\u0002AB\u0007\u0006\u0002\u0002BC\u0007",
    "\u0007\u0002\u0002CD\u0005\u000e\b\u0002DE\u0007\b\u0002\u0002EF\u0005",
    "\f\u0007\u0002F\u000b\u0003\u0002\u0002\u0002GH\u0007\f\u0002\u0002",
    "HI\u0005\u0004\u0003\u0002IJ\u0007\r\u0002\u0002J\r\u0003\u0002\u0002",
    "\u0002KL\u0005\u0010\t\u0002L\u000f\u0003\u0002\u0002\u0002MN\b\t\u0001",
    "\u0002NO\u0005\u0012\n\u0002OU\u0003\u0002\u0002\u0002PQ\f\u0004\u0002",
    "\u0002QR\u0007\u000f\u0002\u0002RT\u0005\u0012\n\u0002SP\u0003\u0002",
    "\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003",
    "\u0002\u0002\u0002V\u0011\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002",
    "\u0002XY\b\n\u0001\u0002YZ\u0005\u0014\u000b\u0002Z`\u0003\u0002\u0002",
    "\u0002[\\\f\u0004\u0002\u0002\\]\u0007\u0010\u0002\u0002]_\u0005\u0014",
    "\u000b\u0002^[\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`^\u0003",
    "\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a\u0013\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002cd\u0007\u0011\u0002\u0002dg\u0005\u0014",
    "\u000b\u0002eg\u0005\u0016\f\u0002fc\u0003\u0002\u0002\u0002fe\u0003",
    "\u0002\u0002\u0002g\u0015\u0003\u0002\u0002\u0002hi\u0005\u0018\r\u0002",
    "ij\u0007\u0012\u0002\u0002jk\u0005\u0018\r\u0002kn\u0003\u0002\u0002",
    "\u0002ln\u0005\u0018\r\u0002mh\u0003\u0002\u0002\u0002ml\u0003\u0002",
    "\u0002\u0002n\u0017\u0003\u0002\u0002\u0002op\b\r\u0001\u0002pq\u0005",
    "\u001a\u000e\u0002qz\u0003\u0002\u0002\u0002rs\f\u0005\u0002\u0002s",
    "t\u0007\u0013\u0002\u0002ty\u0005\u001a\u000e\u0002uv\f\u0004\u0002",
    "\u0002vw\u0007\u0015\u0002\u0002wy\u0005\u001a\u000e\u0002xr\u0003\u0002",
    "\u0002\u0002xu\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003",
    "\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u0019\u0003\u0002\u0002",
    "\u0002|z\u0003\u0002\u0002\u0002}~\b\u000e\u0001\u0002~\u007f\u0005",
    "\u001c\u000f\u0002\u007f\u0085\u0003\u0002\u0002\u0002\u0080\u0081\f",
    "\u0004\u0002\u0002\u0081\u0082\u0007\u0014\u0002\u0002\u0082\u0084\u0005",
    "\u001c\u000f\u0002\u0083\u0080\u0003\u0002\u0002\u0002\u0084\u0087\u0003",
    "\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u001b\u0003\u0002\u0002\u0002\u0087\u0085\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0007\u0015\u0002\u0002\u0089\u008c\u0005",
    "\u001c\u000f\u0002\u008a\u008c\u0005\u001e\u0010\u0002\u008b\u0088\u0003",
    "\u0002\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u001d\u0003",
    "\u0002\u0002\u0002\u008d\u0093\u0007\u000e\u0002\u0002\u008e\u008f\u0007",
    "\u0007\u0002\u0002\u008f\u0090\u0005\u000e\b\u0002\u0090\u0091\u0007",
    "\b\u0002\u0002\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u008d\u0003",
    "\u0002\u0002\u0002\u0092\u008e\u0003\u0002\u0002\u0002\u0093\u001f\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0007\u000b\u0002\u0002\u0095\u0096\u0005",
    "\u000e\b\u0002\u0096!\u0003\u0002\u0002\u0002\u000e(/?U`fmxz\u0085\u008b",
    "\u0092"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "';'", "'while'", "'('", "')'", "'if'", 
                     "'else'", "'return'", "'{'", "'}'", null, "'or'", "'and'", 
                     "'not'", null, "'+'", null, "'-'" ];

var symbolicNames = [ null, "WHITESPACE", "COMMENT", "SEMI", "WHILE", "LP", 
                      "RP", "IF", "ELSE", "RETURN", "LBR", "RBR", "NUM", 
                      "OR", "AND", "NOT", "RELOP", "PLUS", "MULOP", "MINUS" ];

var ruleNames =  [ "program", "stmts", "stmt", "cond", "loop", "braceblock", 
                   "expr", "orexp", "andexp", "notexp", "rel", "sum", "term", 
                   "neg", "factor", "returnStmt" ];

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
g1Parser.OR = 13;
g1Parser.AND = 14;
g1Parser.NOT = 15;
g1Parser.RELOP = 16;
g1Parser.PLUS = 17;
g1Parser.MULOP = 18;
g1Parser.MINUS = 19;

g1Parser.RULE_program = 0;
g1Parser.RULE_stmts = 1;
g1Parser.RULE_stmt = 2;
g1Parser.RULE_cond = 3;
g1Parser.RULE_loop = 4;
g1Parser.RULE_braceblock = 5;
g1Parser.RULE_expr = 6;
g1Parser.RULE_orexp = 7;
g1Parser.RULE_andexp = 8;
g1Parser.RULE_notexp = 9;
g1Parser.RULE_rel = 10;
g1Parser.RULE_sum = 11;
g1Parser.RULE_term = 12;
g1Parser.RULE_neg = 13;
g1Parser.RULE_factor = 14;
g1Parser.RULE_returnStmt = 15;


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
        this.state = 32;
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
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.WHILE:
        case g1Parser.IF:
        case g1Parser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.stmt();
            this.state = 35;
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
        this.state = 45;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.cond();
            break;
        case g1Parser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 41;
            this.loop();
            break;
        case g1Parser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 42;
            this.returnStmt();
            this.state = 43;
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
        this.state = 61;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(g1Parser.IF);
            this.state = 48;
            this.match(g1Parser.LP);
            this.state = 49;
            this.expr();
            this.state = 50;
            this.match(g1Parser.RP);
            this.state = 51;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 53;
            this.match(g1Parser.IF);
            this.state = 54;
            this.match(g1Parser.LP);
            this.state = 55;
            this.expr();
            this.state = 56;
            this.match(g1Parser.RP);
            this.state = 57;
            this.braceblock();
            this.state = 58;
            this.match(g1Parser.ELSE);
            this.state = 59;
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
        this.state = 63;
        this.match(g1Parser.WHILE);
        this.state = 64;
        this.match(g1Parser.LP);
        this.state = 65;
        this.expr();
        this.state = 66;
        this.match(g1Parser.RP);
        this.state = 67;
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
        this.state = 69;
        this.match(g1Parser.LBR);
        this.state = 70;
        this.stmts();
        this.state = 71;
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

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
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
        this.state = 73;
        this.orexp(0);
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


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(g1Parser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitOrexp(this);
	}
};



g1Parser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, g1Parser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 83;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_orexp);
                this.state = 78;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 79;
                this.match(g1Parser.OR);
                this.state = 80;
                this.andexp(0); 
            }
            this.state = 85;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(g1Parser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitAndexp(this);
	}
};



g1Parser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, g1Parser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 94;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_andexp);
                this.state = 89;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 90;
                this.match(g1Parser.AND);
                this.state = 91;
                this.notexp(); 
            }
            this.state = 96;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(g1Parser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitNotexp(this);
	}
};




g1Parser.NotexpContext = NotexpContext;

g1Parser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, g1Parser.RULE_notexp);
    try {
        this.state = 100;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.match(g1Parser.NOT);
            this.state = 98;
            this.notexp();
            break;
        case g1Parser.LP:
        case g1Parser.NUM:
        case g1Parser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 99;
            this.rel();
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


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(g1Parser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitRel(this);
	}
};




g1Parser.RelContext = RelContext;

g1Parser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, g1Parser.RULE_rel);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            this.sum(0);
            this.state = 103;
            this.match(g1Parser.RELOP);
            this.state = 104;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.sum(0);
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


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(g1Parser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(g1Parser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitSum(this);
	}
};



g1Parser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, g1Parser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 120;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 118;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_sum);
                    this.state = 112;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 113;
                    this.match(g1Parser.PLUS);
                    this.state = 114;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_sum);
                    this.state = 115;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 116;
                    this.match(g1Parser.MINUS);
                    this.state = 117;
                    this.term(0);
                    break;

                } 
            }
            this.state = 122;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(g1Parser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitTerm(this);
	}
};



g1Parser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, g1Parser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 131;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_term);
                this.state = 126;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 127;
                this.match(g1Parser.MULOP);
                this.state = 128;
                this.neg(); 
            }
            this.state = 133;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(g1Parser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitNeg(this);
	}
};




g1Parser.NegContext = NegContext;

g1Parser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, g1Parser.RULE_neg);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.match(g1Parser.MINUS);
            this.state = 135;
            this.neg();
            break;
        case g1Parser.LP:
        case g1Parser.NUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.factor();
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


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.NUM = function() {
    return this.getToken(g1Parser.NUM, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(g1Parser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(g1Parser.RP, 0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitFactor(this);
	}
};




g1Parser.FactorContext = FactorContext;

g1Parser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, g1Parser.RULE_factor);
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.match(g1Parser.NUM);
            break;
        case g1Parser.LP:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.match(g1Parser.LP);
            this.state = 141;
            this.expr();
            this.state = 142;
            this.match(g1Parser.RP);
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
    this.enterRule(localctx, 30, g1Parser.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(g1Parser.RETURN);
        this.state = 147;
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


g1Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.orexp_sempred(localctx, predIndex);
	case 8:
			return this.andexp_sempred(localctx, predIndex);
	case 11:
			return this.sum_sempred(localctx, predIndex);
	case 12:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

g1Parser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

g1Parser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

g1Parser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

g1Parser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.g1Parser = g1Parser;
