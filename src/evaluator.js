//var Parser = require('jison').Parser;
//var fs = require('fs');
//
//var grammar = fs.readFileSync('src/expressionEvaluator.jison', 'utf8');
//var parser = new Parser(grammar);

var evaluator = {};

evaluator.evaluate = function (trees) {
    var result;
    for(var tree of trees) {
        result = tree.evaluate();
    }
    return result;
}

module.exports = evaluator;
