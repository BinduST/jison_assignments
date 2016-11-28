var Parser = require('jison').Parser;
var fs = require('fs');
var evaluator = require('../src/evaluator.js');

var grammar = fs.readFileSync('src/parseTreeBuilder.jison', 'utf8');
var parser = new Parser(grammar);

var parseTree = parser.parse("a=2;a!^4;");
var result = evaluator.evaluate(parseTree);
console.log(result);