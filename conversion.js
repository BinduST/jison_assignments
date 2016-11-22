var converter = require('number-to-words');
var Parser = require('jison').Parser;
var Node = require(process.cwd() + "/Node.js");
var Tree = require(process.cwd() + "/ParseTree.js");
var fs = require('fs');

var grammar = fs.readFileSync('expression.jison', 'utf8');
var parser = new Parser(grammar);

var operatorRep = {'+':'plus','*':'times'};
var operators = Object.keys(operatorRep);

var isAnOperator = function (symbol) {
    return operators.indexOf(symbol) > -1;
}

var getWordRep = function (num) {
    return converter.toWords(num);
}

var replaceSymbolsFrom = function (str) {
  return str.replace(/\,/g,' ').replace(/\[/,'').replace(/\]/,'').replace(/\"/g,'');
}

var restructure = function (list) {
    var JSONString = JSON.stringify(list);
    return replaceSymbolsFrom(JSONString);
}

var convertIntoWords = function (symbol) {
  return isAnOperator(symbol) ? operatorRep[symbol] : getWordRep(symbol.value);
}

var convert = function (expression, list, convertForm) {
    list.push('(');
    for (var key in expression) {
      var symbol = expression[key];
      if(symbol instanceof Tree)
        convert(symbol, list, convertForm);
      else {
        var result = (convertForm == 'words') ? convertIntoWords(symbol) : symbol.value;
        list.push(result);
      }
    }
    list.push(')');
    return restructure(list);
}

var result = parser.parse("1*2+3");
console.log(convert(result, [],'words'));
