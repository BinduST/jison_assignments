
var evaluator = {};

evaluator.evaluate = function (trees) {
    var result;
    for(var tree of trees) {
        result = tree.evaluate();
    }
    return result;
}

module.exports = evaluator;
