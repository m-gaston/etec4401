// Generated from g1.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0015\u0083\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0006\u0002+\n\u0002\r\u0002\u000e",
    "\u0002,\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u00035\n\u0003\f\u0003\u000e\u00038\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003<\n\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003@\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0006",
    "\rd\n\r\r\r\u000e\re\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011|\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0002\u0002\u0015\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015\u0003\u0002",
    "\u0007\u0005\u0002\u000b\f\u000f\u000f\"\"\u0003\u0002\f\f\u0003\u0002",
    "2;\u0004\u0002>>@@\u0005\u0002\'\',,11\u0002\u008b\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0003*\u0003\u0002\u0002\u0002\u0005?\u0003\u0002\u0002\u0002",
    "\u0007C\u0003\u0002\u0002\u0002\tE\u0003\u0002\u0002\u0002\u000bK\u0003",
    "\u0002\u0002\u0002\rM\u0003\u0002\u0002\u0002\u000fO\u0003\u0002\u0002",
    "\u0002\u0011R\u0003\u0002\u0002\u0002\u0013W\u0003\u0002\u0002\u0002",
    "\u0015^\u0003\u0002\u0002\u0002\u0017`\u0003\u0002\u0002\u0002\u0019",
    "c\u0003\u0002\u0002\u0002\u001bg\u0003\u0002\u0002\u0002\u001dj\u0003",
    "\u0002\u0002\u0002\u001fn\u0003\u0002\u0002\u0002!{\u0003\u0002\u0002",
    "\u0002#}\u0003\u0002\u0002\u0002%\u007f\u0003\u0002\u0002\u0002\'\u0081",
    "\u0003\u0002\u0002\u0002)+\t\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002",
    "+,\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002./\b\u0002\u0002\u0002/\u0004\u0003",
    "\u0002\u0002\u000201\u00071\u0002\u000212\u00071\u0002\u000226\u0003",
    "\u0002\u0002\u000235\n\u0003\u0002\u000243\u0003\u0002\u0002\u00025",
    "8\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002",
    "\u00027@\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029;\u00071",
    "\u0002\u0002:<\u000b\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0007,\u0002\u0002>@",
    "\u00071\u0002\u0002?0\u0003\u0002\u0002\u0002?9\u0003\u0002\u0002\u0002",
    "@A\u0003\u0002\u0002\u0002AB\b\u0003\u0002\u0002B\u0006\u0003\u0002",
    "\u0002\u0002CD\u0007=\u0002\u0002D\b\u0003\u0002\u0002\u0002EF\u0007",
    "y\u0002\u0002FG\u0007j\u0002\u0002GH\u0007k\u0002\u0002HI\u0007n\u0002",
    "\u0002IJ\u0007g\u0002\u0002J\n\u0003\u0002\u0002\u0002KL\u0007*\u0002",
    "\u0002L\f\u0003\u0002\u0002\u0002MN\u0007+\u0002\u0002N\u000e\u0003",
    "\u0002\u0002\u0002OP\u0007k\u0002\u0002PQ\u0007h\u0002\u0002Q\u0010",
    "\u0003\u0002\u0002\u0002RS\u0007g\u0002\u0002ST\u0007n\u0002\u0002T",
    "U\u0007u\u0002\u0002UV\u0007g\u0002\u0002V\u0012\u0003\u0002\u0002\u0002",
    "WX\u0007t\u0002\u0002XY\u0007g\u0002\u0002YZ\u0007v\u0002\u0002Z[\u0007",
    "w\u0002\u0002[\\\u0007t\u0002\u0002\\]\u0007p\u0002\u0002]\u0014\u0003",
    "\u0002\u0002\u0002^_\u0007}\u0002\u0002_\u0016\u0003\u0002\u0002\u0002",
    "`a\u0007\u007f\u0002\u0002a\u0018\u0003\u0002\u0002\u0002bd\t\u0004",
    "\u0002\u0002cb\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ec\u0003",
    "\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002f\u001a\u0003\u0002\u0002",
    "\u0002gh\u0007q\u0002\u0002hi\u0007t\u0002\u0002i\u001c\u0003\u0002",
    "\u0002\u0002jk\u0007c\u0002\u0002kl\u0007p\u0002\u0002lm\u0007f\u0002",
    "\u0002m\u001e\u0003\u0002\u0002\u0002no\u0007p\u0002\u0002op\u0007q",
    "\u0002\u0002pq\u0007v\u0002\u0002q \u0003\u0002\u0002\u0002rs\u0007",
    "@\u0002\u0002s|\u0007?\u0002\u0002tu\u0007>\u0002\u0002u|\u0007?\u0002",
    "\u0002v|\t\u0005\u0002\u0002wx\u0007#\u0002\u0002x|\u0007?\u0002\u0002",
    "yz\u0007?\u0002\u0002z|\u0007?\u0002\u0002{r\u0003\u0002\u0002\u0002",
    "{t\u0003\u0002\u0002\u0002{v\u0003\u0002\u0002\u0002{w\u0003\u0002\u0002",
    "\u0002{y\u0003\u0002\u0002\u0002|\"\u0003\u0002\u0002\u0002}~\u0007",
    "-\u0002\u0002~$\u0003\u0002\u0002\u0002\u007f\u0080\t\u0006\u0002\u0002",
    "\u0080&\u0003\u0002\u0002\u0002\u0081\u0082\u0007/\u0002\u0002\u0082",
    "(\u0003\u0002\u0002\u0002\t\u0002,6;?e{\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function g1Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

g1Lexer.prototype = Object.create(antlr4.Lexer.prototype);
g1Lexer.prototype.constructor = g1Lexer;

Object.defineProperty(g1Lexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

g1Lexer.EOF = antlr4.Token.EOF;
g1Lexer.WHITESPACE = 1;
g1Lexer.COMMENT = 2;
g1Lexer.SEMI = 3;
g1Lexer.WHILE = 4;
g1Lexer.LP = 5;
g1Lexer.RP = 6;
g1Lexer.IF = 7;
g1Lexer.ELSE = 8;
g1Lexer.RETURN = 9;
g1Lexer.LBR = 10;
g1Lexer.RBR = 11;
g1Lexer.NUM = 12;
g1Lexer.OR = 13;
g1Lexer.AND = 14;
g1Lexer.NOT = 15;
g1Lexer.RELOP = 16;
g1Lexer.PLUS = 17;
g1Lexer.MULOP = 18;
g1Lexer.MINUS = 19;

g1Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

g1Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

g1Lexer.prototype.literalNames = [ null, null, null, "';'", "'while'", "'('", 
                                   "')'", "'if'", "'else'", "'return'", 
                                   "'{'", "'}'", null, "'or'", "'and'", 
                                   "'not'", null, "'+'", null, "'-'" ];

g1Lexer.prototype.symbolicNames = [ null, "WHITESPACE", "COMMENT", "SEMI", 
                                    "WHILE", "LP", "RP", "IF", "ELSE", "RETURN", 
                                    "LBR", "RBR", "NUM", "OR", "AND", "NOT", 
                                    "RELOP", "PLUS", "MULOP", "MINUS" ];

g1Lexer.prototype.ruleNames = [ "WHITESPACE", "COMMENT", "SEMI", "WHILE", 
                                "LP", "RP", "IF", "ELSE", "RETURN", "LBR", 
                                "RBR", "NUM", "OR", "AND", "NOT", "RELOP", 
                                "PLUS", "MULOP", "MINUS" ];

g1Lexer.prototype.grammarFileName = "g1.txt";


exports.g1Lexer = g1Lexer;

