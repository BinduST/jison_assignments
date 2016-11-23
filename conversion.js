var Parser = require('jison').Parser;
var fs = require('fs');

var grammar = fs.readFileSync('expression.jison', 'utf8');
var parser = new Parser(grammar);

var replaceSymbolsFrom = function (str) {
  return str.replace(/\,/g,' ').replace(/\[/,'').replace(/\]/,'').replace(/\"/g,'');
}

var restructure = function (list) {
    var JSONString = JSON.stringify(list);
    return replaceSymbolsFrom(JSONString);
}

var addParentheses = function (expression) {
    return expression.evaluate();
}

var convertIntoWords = function (expression) {
    return expression.convertIntoWords();
}

var result = parser.parse("5+4*3");
console.log('tree--> ',result);
console.log(convertIntoWords(result));
