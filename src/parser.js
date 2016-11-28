var Parser = require('jison').Parser;
var fs = require('fs');

var grammar = fs.readFileSync('src/expressionEvaluator.jison', 'utf8');
var parser = new Parser(grammar);

var trees = parser.parse("a=5;a;");
var evaluate = function(trees, lookup){
    for(var tree of trees){
    console.log('trees--> ',tree);
        console.log('tree--> ',tree.evaluate());
    }
}

evaluate(trees);
