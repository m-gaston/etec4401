// Generated from g1.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var g1Listener = require('./g1Listener').g1Listener;
var grammarFileName = "g1.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003!\u00fd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004>\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005K\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007a\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000br\n\u000b\f\u000b\u000e",
    "\u000bu\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0007\f}\n\f\f\f\u000e\f\u0080\u000b\f\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u0085\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u008c\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u0097\n\u000f\f\u000f\u000e\u000f\u009a\u000b\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010",
    "\u00a2\n\u0010\f\u0010\u000e\u0010\u00a5\u000b\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00aa\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00b5\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00bc\n\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u00c7\n\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00d0\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0007\u0019\u00d8\n\u0019\f\u0019\u000e\u0019",
    "\u00db\u000b\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u00fb\n\u001a\u0003\u001a\u0002\u0007",
    "\u0014\u0016\u001c\u001e0\u001b\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02\u0002\u0002\u0002",
    "\u00ff\u00024\u0003\u0002\u0002\u0002\u00046\u0003\u0002\u0002\u0002",
    "\u0006=\u0003\u0002\u0002\u0002\bJ\u0003\u0002\u0002\u0002\nL\u0003",
    "\u0002\u0002\u0002\f`\u0003\u0002\u0002\u0002\u000eb\u0003\u0002\u0002",
    "\u0002\u0010f\u0003\u0002\u0002\u0002\u0012i\u0003\u0002\u0002\u0002",
    "\u0014k\u0003\u0002\u0002\u0002\u0016v\u0003\u0002\u0002\u0002\u0018",
    "\u0084\u0003\u0002\u0002\u0002\u001a\u008b\u0003\u0002\u0002\u0002\u001c",
    "\u008d\u0003\u0002\u0002\u0002\u001e\u009b\u0003\u0002\u0002\u0002 ",
    "\u00a9\u0003\u0002\u0002\u0002\"\u00b4\u0003\u0002\u0002\u0002$\u00bb",
    "\u0003\u0002\u0002\u0002&\u00bd\u0003\u0002\u0002\u0002(\u00c0\u0003",
    "\u0002\u0002\u0002*\u00c6\u0003\u0002\u0002\u0002,\u00c8\u0003\u0002",
    "\u0002\u0002.\u00cf\u0003\u0002\u0002\u00020\u00d1\u0003\u0002\u0002",
    "\u00022\u00fa\u0003\u0002\u0002\u000245\u0005\u0004\u0003\u00025\u0003",
    "\u0003\u0002\u0002\u000267\u0005$\u0013\u000278\u0005\u000e\b\u0002",
    "8\u0005\u0003\u0002\u0002\u00029:\u0005\b\u0005\u0002:;\u0005\u0006",
    "\u0004\u0002;>\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=9\u0003",
    "\u0002\u0002\u0002=<\u0003\u0002\u0002\u0002>\u0007\u0003\u0002\u0002",
    "\u0002?K\u0005\f\u0007\u0002@K\u0005\n\u0006\u0002AB\u0005\u0010\t\u0002",
    "BC\u0007\u0005\u0002\u0002CK\u0003\u0002\u0002\u0002DE\u0005(\u0015",
    "\u0002EF\u0007\u0005\u0002\u0002FK\u0003\u0002\u0002\u0002GH\u0005*",
    "\u0016\u0002HI\u0007\u0005\u0002\u0002IK\u0003\u0002\u0002\u0002J?\u0003",
    "\u0002\u0002\u0002J@\u0003\u0002\u0002\u0002JA\u0003\u0002\u0002\u0002",
    "JD\u0003\u0002\u0002\u0002JG\u0003\u0002\u0002\u0002K\t\u0003\u0002",
    "\u0002\u0002LM\u0007\u0006\u0002\u0002MN\u0007\u0007\u0002\u0002NO\u0005",
    "\u0012\n\u0002OP\u0007\b\u0002\u0002PQ\u0005\u000e\b\u0002Q\u000b\u0003",
    "\u0002\u0002\u0002RS\u0007\t\u0002\u0002ST\u0007\u0007\u0002\u0002T",
    "U\u0005\u0012\n\u0002UV\u0007\b\u0002\u0002VW\u0005\u000e\b\u0002Wa",
    "\u0003\u0002\u0002\u0002XY\u0007\t\u0002\u0002YZ\u0007\u0007\u0002\u0002",
    "Z[\u0005\u0012\n\u0002[\\\u0007\b\u0002\u0002\\]\u0005\u000e\b\u0002",
    "]^\u0007\n\u0002\u0002^_\u0005\u000e\b\u0002_a\u0003\u0002\u0002\u0002",
    "`R\u0003\u0002\u0002\u0002`X\u0003\u0002\u0002\u0002a\r\u0003\u0002",
    "\u0002\u0002bc\u0007\f\u0002\u0002cd\u0005\u0006\u0004\u0002de\u0007",
    "\r\u0002\u0002e\u000f\u0003\u0002\u0002\u0002fg\u0007\u000b\u0002\u0002",
    "gh\u0005\u0012\n\u0002h\u0011\u0003\u0002\u0002\u0002ij\u0005\u0014",
    "\u000b\u0002j\u0013\u0003\u0002\u0002\u0002kl\b\u000b\u0001\u0002lm",
    "\u0005\u0016\f\u0002ms\u0003\u0002\u0002\u0002no\f\u0004\u0002\u0002",
    "op\u0007\u0010\u0002\u0002pr\u0005\u0016\f\u0002qn\u0003\u0002\u0002",
    "\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002",
    "\u0002\u0002t\u0015\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002",
    "vw\b\f\u0001\u0002wx\u0005\u0018\r\u0002x~\u0003\u0002\u0002\u0002y",
    "z\f\u0004\u0002\u0002z{\u0007\u0011\u0002\u0002{}\u0005\u0018\r\u0002",
    "|y\u0003\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~|\u0003\u0002",
    "\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0017\u0003\u0002",
    "\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0082\u0007\u0012",
    "\u0002\u0002\u0082\u0085\u0005\u0018\r\u0002\u0083\u0085\u0005\u001a",
    "\u000e\u0002\u0084\u0081\u0003\u0002\u0002\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0085\u0019\u0003\u0002\u0002\u0002\u0086\u0087\u0005\u001c",
    "\u000f\u0002\u0087\u0088\u0007\u0013\u0002\u0002\u0088\u0089\u0005\u001c",
    "\u000f\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u008c\u0005\u001c",
    "\u000f\u0002\u008b\u0086\u0003\u0002\u0002\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u001b\u0003\u0002\u0002\u0002\u008d\u008e\b\u000f",
    "\u0001\u0002\u008e\u008f\u0005\u001e\u0010\u0002\u008f\u0098\u0003\u0002",
    "\u0002\u0002\u0090\u0091\f\u0005\u0002\u0002\u0091\u0092\u0007\u0015",
    "\u0002\u0002\u0092\u0097\u0005\u001e\u0010\u0002\u0093\u0094\f\u0004",
    "\u0002\u0002\u0094\u0095\u0007\u0017\u0002\u0002\u0095\u0097\u0005\u001e",
    "\u0010\u0002\u0096\u0090\u0003\u0002\u0002\u0002\u0096\u0093\u0003\u0002",
    "\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u001d\u0003\u0002",
    "\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009c\b\u0010",
    "\u0001\u0002\u009c\u009d\u0005 \u0011\u0002\u009d\u00a3\u0003\u0002",
    "\u0002\u0002\u009e\u009f\f\u0004\u0002\u0002\u009f\u00a0\u0007\u0016",
    "\u0002\u0002\u00a0\u00a2\u0005 \u0011\u0002\u00a1\u009e\u0003\u0002",
    "\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u001f\u0003\u0002",
    "\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\u0017",
    "\u0002\u0002\u00a7\u00aa\u0005 \u0011\u0002\u00a8\u00aa\u0005\"\u0012",
    "\u0002\u00a9\u00a6\u0003\u0002\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002",
    "\u0002\u00aa!\u0003\u0002\u0002\u0002\u00ab\u00b5\u0007\u000f\u0002",
    "\u0002\u00ac\u00ad\u0007\u0007\u0002\u0002\u00ad\u00ae\u0005\u0012\n",
    "\u0002\u00ae\u00af\u0007\b\u0002\u0002\u00af\u00b5\u0003\u0002\u0002",
    "\u0002\u00b0\u00b5\u0007\u000e\u0002\u0002\u00b1\u00b5\u0007!\u0002",
    "\u0002\u00b2\u00b5\u0007\u001a\u0002\u0002\u00b3\u00b5\u0005*\u0016",
    "\u0002\u00b4\u00ab\u0003\u0002\u0002\u0002\u00b4\u00ac\u0003\u0002\u0002",
    "\u0002\u00b4\u00b0\u0003\u0002\u0002\u0002\u00b4\u00b1\u0003\u0002\u0002",
    "\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002",
    "\u0002\u00b5#\u0003\u0002\u0002\u0002\u00b6\u00b7\u0005&\u0014\u0002",
    "\u00b7\u00b8\u0007\u0005\u0002\u0002\u00b8\u00b9\u0005$\u0013\u0002",
    "\u00b9\u00bc\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002",
    "\u00bb\u00b6\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc%\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\u0019\u0002\u0002",
    "\u00be\u00bf\u0007!\u0002\u0002\u00bf\'\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0007!\u0002\u0002\u00c1\u00c2\u0007\u0014\u0002\u0002\u00c2",
    "\u00c3\u0005\u0012\n\u0002\u00c3)\u0003\u0002\u0002\u0002\u00c4\u00c7",
    "\u00052\u001a\u0002\u00c5\u00c7\u0005,\u0017\u0002\u00c6\u00c4\u0003",
    "\u0002\u0002\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c7+\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0007!\u0002\u0002\u00c9\u00ca\u0007",
    "\u0007\u0002\u0002\u00ca\u00cb\u0005.\u0018\u0002\u00cb\u00cc\u0007",
    "\b\u0002\u0002\u00cc-\u0003\u0002\u0002\u0002\u00cd\u00d0\u00050\u0019",
    "\u0002\u00ce\u00d0\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00d0/\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\b\u0019\u0001\u0002\u00d2\u00d3\u0005\u0012\n\u0002",
    "\u00d3\u00d9\u0003\u0002\u0002\u0002\u00d4\u00d5\f\u0004\u0002\u0002",
    "\u00d5\u00d6\u0007\u0018\u0002\u0002\u00d6\u00d8\u0005\u0012\n\u0002",
    "\u00d7\u00d4\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002",
    "\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002",
    "\u00da1\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0007\u001b\u0002\u0002\u00dd\u00de\u0007\u0007\u0002\u0002",
    "\u00de\u00df\u0005\u0012\n\u0002\u00df\u00e0\u0007\b\u0002\u0002\u00e0",
    "\u00fb\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007\u001c\u0002\u0002\u00e2",
    "\u00e3\u0007\u0007\u0002\u0002\u00e3\u00fb\u0007\b\u0002\u0002\u00e4",
    "\u00e5\u0007\u001d\u0002\u0002\u00e5\u00e6\u0007\u0007\u0002\u0002\u00e6",
    "\u00e7\u0005\u0012\n\u0002\u00e7\u00e8\u0007\b\u0002\u0002\u00e8\u00fb",
    "\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007\u001e\u0002\u0002\u00ea\u00eb",
    "\u0007\u0007\u0002\u0002\u00eb\u00ec\u0005\u0012\n\u0002\u00ec\u00ed",
    "\u0007\b\u0002\u0002\u00ed\u00fb\u0003\u0002\u0002\u0002\u00ee\u00ef",
    "\u0007\u001f\u0002\u0002\u00ef\u00f0\u0007\u0007\u0002\u0002\u00f0\u00f1",
    "\u0005\u0012\n\u0002\u00f1\u00f2\u0007\u0018\u0002\u0002\u00f2\u00f3",
    "\u0005\u0012\n\u0002\u00f3\u00f4\u0007\b\u0002\u0002\u00f4\u00fb\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0007 \u0002\u0002\u00f6\u00f7\u0007",
    "\u0007\u0002\u0002\u00f7\u00f8\u0005\u0012\n\u0002\u00f8\u00f9\u0007",
    "\b\u0002\u0002\u00f9\u00fb\u0003\u0002\u0002\u0002\u00fa\u00dc\u0003",
    "\u0002\u0002\u0002\u00fa\u00e1\u0003\u0002\u0002\u0002\u00fa\u00e4\u0003",
    "\u0002\u0002\u0002\u00fa\u00e9\u0003\u0002\u0002\u0002\u00fa\u00ee\u0003",
    "\u0002\u0002\u0002\u00fa\u00f5\u0003\u0002\u0002\u0002\u00fb3\u0003",
    "\u0002\u0002\u0002\u0013=J`s~\u0084\u008b\u0096\u0098\u00a3\u00a9\u00b4",
    "\u00bb\u00c6\u00cf\u00d9\u00fa"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "';'", "'while'", "'('", "')'", "'if'", 
                     "'else'", "'return'", "'{'", "'}'", null, null, "'or'", 
                     "'and'", "'not'", null, "'='", "'+'", null, "'-'", 
                     "','", null, null, "'print'", "'input'", "'open'", 
                     "'read'", "'write'", "'close'" ];

var symbolicNames = [ null, "WHITESPACE", "COMMENT", "SEMI", "WHILE", "LP", 
                      "RP", "IF", "ELSE", "RETURN", "LBR", "RBR", "FPNUM", 
                      "NUM", "OR", "AND", "NOT", "RELOP", "EQ", "PLUS", 
                      "MULOP", "MINUS", "CMA", "TYPE", "STRING_CONSTANT", 
                      "PRINT", "INPUT", "OPEN", "READ", "WRITE", "CLOSE", 
                      "ID" ];

var ruleNames =  [ "start", "program", "stmts", "stmt", "loop", "cond", 
                   "braceblock", "returnStmt", "expr", "orexp", "andexp", 
                   "notexp", "rel", "sum", "term", "neg", "factor", "varDeclList", 
                   "varDecl", "assign", "funcCall", "userFuncCall", "optionalExprlist", 
                   "exprlist", "builtinFuncCall" ];

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
g1Parser.FPNUM = 12;
g1Parser.NUM = 13;
g1Parser.OR = 14;
g1Parser.AND = 15;
g1Parser.NOT = 16;
g1Parser.RELOP = 17;
g1Parser.EQ = 18;
g1Parser.PLUS = 19;
g1Parser.MULOP = 20;
g1Parser.MINUS = 21;
g1Parser.CMA = 22;
g1Parser.TYPE = 23;
g1Parser.STRING_CONSTANT = 24;
g1Parser.PRINT = 25;
g1Parser.INPUT = 26;
g1Parser.OPEN = 27;
g1Parser.READ = 28;
g1Parser.WRITE = 29;
g1Parser.CLOSE = 30;
g1Parser.ID = 31;

g1Parser.RULE_start = 0;
g1Parser.RULE_program = 1;
g1Parser.RULE_stmts = 2;
g1Parser.RULE_stmt = 3;
g1Parser.RULE_loop = 4;
g1Parser.RULE_cond = 5;
g1Parser.RULE_braceblock = 6;
g1Parser.RULE_returnStmt = 7;
g1Parser.RULE_expr = 8;
g1Parser.RULE_orexp = 9;
g1Parser.RULE_andexp = 10;
g1Parser.RULE_notexp = 11;
g1Parser.RULE_rel = 12;
g1Parser.RULE_sum = 13;
g1Parser.RULE_term = 14;
g1Parser.RULE_neg = 15;
g1Parser.RULE_factor = 16;
g1Parser.RULE_varDeclList = 17;
g1Parser.RULE_varDecl = 18;
g1Parser.RULE_assign = 19;
g1Parser.RULE_funcCall = 20;
g1Parser.RULE_userFuncCall = 21;
g1Parser.RULE_optionalExprlist = 22;
g1Parser.RULE_exprlist = 23;
g1Parser.RULE_builtinFuncCall = 24;


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.program = function() {
    return this.getTypedRuleContext(ProgramContext,0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitStart(this);
	}
};




g1Parser.StartContext = StartContext;

g1Parser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, g1Parser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.program();
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

ProgramContext.prototype.varDeclList = function() {
    return this.getTypedRuleContext(VarDeclListContext,0);
};

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
    this.enterRule(localctx, 2, g1Parser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.varDeclList();
        this.state = 53;
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
    this.enterRule(localctx, 4, g1Parser.RULE_stmts);
    try {
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.WHILE:
        case g1Parser.IF:
        case g1Parser.RETURN:
        case g1Parser.PRINT:
        case g1Parser.INPUT:
        case g1Parser.OPEN:
        case g1Parser.READ:
        case g1Parser.WRITE:
        case g1Parser.CLOSE:
        case g1Parser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.stmt();
            this.state = 56;
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

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
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
    this.enterRule(localctx, 6, g1Parser.RULE_stmt);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.cond();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.loop();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 63;
            this.returnStmt();
            this.state = 64;
            this.match(g1Parser.SEMI);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.assign();
            this.state = 67;
            this.match(g1Parser.SEMI);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 69;
            this.funcCall();
            this.state = 70;
            this.match(g1Parser.SEMI);
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
        this.state = 74;
        this.match(g1Parser.WHILE);
        this.state = 75;
        this.match(g1Parser.LP);
        this.state = 76;
        this.expr();
        this.state = 77;
        this.match(g1Parser.RP);
        this.state = 78;
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
    this.enterRule(localctx, 10, g1Parser.RULE_cond);
    try {
        this.state = 94;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this.match(g1Parser.IF);
            this.state = 81;
            this.match(g1Parser.LP);
            this.state = 82;
            this.expr();
            this.state = 83;
            this.match(g1Parser.RP);
            this.state = 84;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.match(g1Parser.IF);
            this.state = 87;
            this.match(g1Parser.LP);
            this.state = 88;
            this.expr();
            this.state = 89;
            this.match(g1Parser.RP);
            this.state = 90;
            this.braceblock();
            this.state = 91;
            this.match(g1Parser.ELSE);
            this.state = 92;
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
    this.enterRule(localctx, 12, g1Parser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(g1Parser.LBR);
        this.state = 97;
        this.stmts();
        this.state = 98;
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
        this.state = 100;
        this.match(g1Parser.RETURN);
        this.state = 101;
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
    this.enterRule(localctx, 16, g1Parser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
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
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, g1Parser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 113;
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
                this.state = 108;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 109;
                this.match(g1Parser.OR);
                this.state = 110;
                this.andexp(0); 
            }
            this.state = 115;
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
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, g1Parser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 124;
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
                this.state = 119;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 120;
                this.match(g1Parser.AND);
                this.state = 121;
                this.notexp(); 
            }
            this.state = 126;
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
    this.enterRule(localctx, 22, g1Parser.RULE_notexp);
    try {
        this.state = 130;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.match(g1Parser.NOT);
            this.state = 128;
            this.notexp();
            break;
        case g1Parser.LP:
        case g1Parser.FPNUM:
        case g1Parser.NUM:
        case g1Parser.MINUS:
        case g1Parser.STRING_CONSTANT:
        case g1Parser.PRINT:
        case g1Parser.INPUT:
        case g1Parser.OPEN:
        case g1Parser.READ:
        case g1Parser.WRITE:
        case g1Parser.CLOSE:
        case g1Parser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 129;
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
    this.enterRule(localctx, 24, g1Parser.RULE_rel);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this.sum(0);
            this.state = 133;
            this.match(g1Parser.RELOP);
            this.state = 134;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
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
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, g1Parser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 150;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 148;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_sum);
                    this.state = 142;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 143;
                    this.match(g1Parser.PLUS);
                    this.state = 144;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_sum);
                    this.state = 145;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 146;
                    this.match(g1Parser.MINUS);
                    this.state = 147;
                    this.term(0);
                    break;

                } 
            }
            this.state = 152;
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
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, g1Parser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 161;
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
                this.state = 156;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 157;
                this.match(g1Parser.MULOP);
                this.state = 158;
                this.neg(); 
            }
            this.state = 163;
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
    this.enterRule(localctx, 30, g1Parser.RULE_neg);
    try {
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 164;
            this.match(g1Parser.MINUS);
            this.state = 165;
            this.neg();
            break;
        case g1Parser.LP:
        case g1Parser.FPNUM:
        case g1Parser.NUM:
        case g1Parser.STRING_CONSTANT:
        case g1Parser.PRINT:
        case g1Parser.INPUT:
        case g1Parser.OPEN:
        case g1Parser.READ:
        case g1Parser.WRITE:
        case g1Parser.CLOSE:
        case g1Parser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 166;
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

FactorContext.prototype.FPNUM = function() {
    return this.getToken(g1Parser.FPNUM, 0);
};

FactorContext.prototype.ID = function() {
    return this.getToken(g1Parser.ID, 0);
};

FactorContext.prototype.STRING_CONSTANT = function() {
    return this.getToken(g1Parser.STRING_CONSTANT, 0);
};

FactorContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
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
    this.enterRule(localctx, 32, g1Parser.RULE_factor);
    try {
        this.state = 178;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.match(g1Parser.NUM);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            this.match(g1Parser.LP);
            this.state = 171;
            this.expr();
            this.state = 172;
            this.match(g1Parser.RP);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 174;
            this.match(g1Parser.FPNUM);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 175;
            this.match(g1Parser.ID);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 176;
            this.match(g1Parser.STRING_CONSTANT);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 177;
            this.funcCall();
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


function VarDeclListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_varDeclList;
    return this;
}

VarDeclListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclListContext.prototype.constructor = VarDeclListContext;

VarDeclListContext.prototype.varDecl = function() {
    return this.getTypedRuleContext(VarDeclContext,0);
};

VarDeclListContext.prototype.SEMI = function() {
    return this.getToken(g1Parser.SEMI, 0);
};

VarDeclListContext.prototype.varDeclList = function() {
    return this.getTypedRuleContext(VarDeclListContext,0);
};

VarDeclListContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterVarDeclList(this);
	}
};

VarDeclListContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitVarDeclList(this);
	}
};




g1Parser.VarDeclListContext = VarDeclListContext;

g1Parser.prototype.varDeclList = function() {

    var localctx = new VarDeclListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, g1Parser.RULE_varDeclList);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 180;
            this.varDecl();
            this.state = 181;
            this.match(g1Parser.SEMI);
            this.state = 182;
            this.varDeclList();
            break;
        case g1Parser.LBR:
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


function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;

VarDeclContext.prototype.TYPE = function() {
    return this.getToken(g1Parser.TYPE, 0);
};

VarDeclContext.prototype.ID = function() {
    return this.getToken(g1Parser.ID, 0);
};

VarDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterVarDecl(this);
	}
};

VarDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitVarDecl(this);
	}
};




g1Parser.VarDeclContext = VarDeclContext;

g1Parser.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, g1Parser.RULE_varDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(g1Parser.TYPE);
        this.state = 188;
        this.match(g1Parser.ID);
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


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(g1Parser.ID, 0);
};

AssignContext.prototype.EQ = function() {
    return this.getToken(g1Parser.EQ, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitAssign(this);
	}
};




g1Parser.AssignContext = AssignContext;

g1Parser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, g1Parser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(g1Parser.ID);
        this.state = 191;
        this.match(g1Parser.EQ);
        this.state = 192;
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


function FuncCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_funcCall;
    return this;
}

FuncCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncCallContext.prototype.constructor = FuncCallContext;

FuncCallContext.prototype.builtinFuncCall = function() {
    return this.getTypedRuleContext(BuiltinFuncCallContext,0);
};

FuncCallContext.prototype.userFuncCall = function() {
    return this.getTypedRuleContext(UserFuncCallContext,0);
};

FuncCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterFuncCall(this);
	}
};

FuncCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitFuncCall(this);
	}
};




g1Parser.FuncCallContext = FuncCallContext;

g1Parser.prototype.funcCall = function() {

    var localctx = new FuncCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, g1Parser.RULE_funcCall);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.PRINT:
        case g1Parser.INPUT:
        case g1Parser.OPEN:
        case g1Parser.READ:
        case g1Parser.WRITE:
        case g1Parser.CLOSE:
            this.enterOuterAlt(localctx, 1);
            this.state = 194;
            this.builtinFuncCall();
            break;
        case g1Parser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 195;
            this.userFuncCall();
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


function UserFuncCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_userFuncCall;
    return this;
}

UserFuncCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserFuncCallContext.prototype.constructor = UserFuncCallContext;

UserFuncCallContext.prototype.ID = function() {
    return this.getToken(g1Parser.ID, 0);
};

UserFuncCallContext.prototype.LP = function() {
    return this.getToken(g1Parser.LP, 0);
};

UserFuncCallContext.prototype.optionalExprlist = function() {
    return this.getTypedRuleContext(OptionalExprlistContext,0);
};

UserFuncCallContext.prototype.RP = function() {
    return this.getToken(g1Parser.RP, 0);
};

UserFuncCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterUserFuncCall(this);
	}
};

UserFuncCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitUserFuncCall(this);
	}
};




g1Parser.UserFuncCallContext = UserFuncCallContext;

g1Parser.prototype.userFuncCall = function() {

    var localctx = new UserFuncCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, g1Parser.RULE_userFuncCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(g1Parser.ID);
        this.state = 199;
        this.match(g1Parser.LP);
        this.state = 200;
        this.optionalExprlist();
        this.state = 201;
        this.match(g1Parser.RP);
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


function OptionalExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_optionalExprlist;
    return this;
}

OptionalExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionalExprlistContext.prototype.constructor = OptionalExprlistContext;

OptionalExprlistContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

OptionalExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterOptionalExprlist(this);
	}
};

OptionalExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitOptionalExprlist(this);
	}
};




g1Parser.OptionalExprlistContext = OptionalExprlistContext;

g1Parser.prototype.optionalExprlist = function() {

    var localctx = new OptionalExprlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, g1Parser.RULE_optionalExprlist);
    try {
        this.state = 205;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.LP:
        case g1Parser.FPNUM:
        case g1Parser.NUM:
        case g1Parser.NOT:
        case g1Parser.MINUS:
        case g1Parser.STRING_CONSTANT:
        case g1Parser.PRINT:
        case g1Parser.INPUT:
        case g1Parser.OPEN:
        case g1Parser.READ:
        case g1Parser.WRITE:
        case g1Parser.CLOSE:
        case g1Parser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.exprlist(0);
            break;
        case g1Parser.RP:
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


function ExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_exprlist;
    return this;
}

ExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprlistContext.prototype.constructor = ExprlistContext;

ExprlistContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprlistContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

ExprlistContext.prototype.CMA = function() {
    return this.getToken(g1Parser.CMA, 0);
};

ExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterExprlist(this);
	}
};

ExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitExprlist(this);
	}
};



g1Parser.prototype.exprlist = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprlistContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 46;
    this.enterRecursionRule(localctx, 46, g1Parser.RULE_exprlist, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.expr();
        this._ctx.stop = this._input.LT(-1);
        this.state = 215;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprlistContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, g1Parser.RULE_exprlist);
                this.state = 210;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 211;
                this.match(g1Parser.CMA);
                this.state = 212;
                this.expr(); 
            }
            this.state = 217;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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


function BuiltinFuncCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = g1Parser.RULE_builtinFuncCall;
    return this;
}

BuiltinFuncCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuiltinFuncCallContext.prototype.constructor = BuiltinFuncCallContext;

BuiltinFuncCallContext.prototype.PRINT = function() {
    return this.getToken(g1Parser.PRINT, 0);
};

BuiltinFuncCallContext.prototype.LP = function() {
    return this.getToken(g1Parser.LP, 0);
};

BuiltinFuncCallContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

BuiltinFuncCallContext.prototype.RP = function() {
    return this.getToken(g1Parser.RP, 0);
};

BuiltinFuncCallContext.prototype.INPUT = function() {
    return this.getToken(g1Parser.INPUT, 0);
};

BuiltinFuncCallContext.prototype.OPEN = function() {
    return this.getToken(g1Parser.OPEN, 0);
};

BuiltinFuncCallContext.prototype.READ = function() {
    return this.getToken(g1Parser.READ, 0);
};

BuiltinFuncCallContext.prototype.WRITE = function() {
    return this.getToken(g1Parser.WRITE, 0);
};

BuiltinFuncCallContext.prototype.CMA = function() {
    return this.getToken(g1Parser.CMA, 0);
};

BuiltinFuncCallContext.prototype.CLOSE = function() {
    return this.getToken(g1Parser.CLOSE, 0);
};

BuiltinFuncCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.enterBuiltinFuncCall(this);
	}
};

BuiltinFuncCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof g1Listener ) {
        listener.exitBuiltinFuncCall(this);
	}
};




g1Parser.BuiltinFuncCallContext = BuiltinFuncCallContext;

g1Parser.prototype.builtinFuncCall = function() {

    var localctx = new BuiltinFuncCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, g1Parser.RULE_builtinFuncCall);
    try {
        this.state = 248;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case g1Parser.PRINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 218;
            this.match(g1Parser.PRINT);
            this.state = 219;
            this.match(g1Parser.LP);
            this.state = 220;
            this.expr();
            this.state = 221;
            this.match(g1Parser.RP);
            break;
        case g1Parser.INPUT:
            this.enterOuterAlt(localctx, 2);
            this.state = 223;
            this.match(g1Parser.INPUT);
            this.state = 224;
            this.match(g1Parser.LP);
            this.state = 225;
            this.match(g1Parser.RP);
            break;
        case g1Parser.OPEN:
            this.enterOuterAlt(localctx, 3);
            this.state = 226;
            this.match(g1Parser.OPEN);
            this.state = 227;
            this.match(g1Parser.LP);
            this.state = 228;
            this.expr();
            this.state = 229;
            this.match(g1Parser.RP);
            break;
        case g1Parser.READ:
            this.enterOuterAlt(localctx, 4);
            this.state = 231;
            this.match(g1Parser.READ);
            this.state = 232;
            this.match(g1Parser.LP);
            this.state = 233;
            this.expr();
            this.state = 234;
            this.match(g1Parser.RP);
            break;
        case g1Parser.WRITE:
            this.enterOuterAlt(localctx, 5);
            this.state = 236;
            this.match(g1Parser.WRITE);
            this.state = 237;
            this.match(g1Parser.LP);
            this.state = 238;
            this.expr();
            this.state = 239;
            this.match(g1Parser.CMA);
            this.state = 240;
            this.expr();
            this.state = 241;
            this.match(g1Parser.RP);
            break;
        case g1Parser.CLOSE:
            this.enterOuterAlt(localctx, 6);
            this.state = 243;
            this.match(g1Parser.CLOSE);
            this.state = 244;
            this.match(g1Parser.LP);
            this.state = 245;
            this.expr();
            this.state = 246;
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


g1Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.orexp_sempred(localctx, predIndex);
	case 10:
			return this.andexp_sempred(localctx, predIndex);
	case 13:
			return this.sum_sempred(localctx, predIndex);
	case 14:
			return this.term_sempred(localctx, predIndex);
	case 23:
			return this.exprlist_sempred(localctx, predIndex);
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

g1Parser.prototype.exprlist_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.g1Parser = g1Parser;
