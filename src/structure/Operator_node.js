"use strict"

var util = require('../util.js');
var operatorRep = {'+':'plus','*':'times'};

var isAnArithmeticOperator = function(operator){
   return Object.keys(operatorRep).contains(operator);
}

class Operator_node {
  constructor(symbol) {
    this.value = symbol;
    this.type = 'operator';
  }

  evaluate (nodes) {
    return util[this.value].evaluate(nodes[0], nodes[1]);
  }

  convertIntoWords(nodes) {
    var symbols = nodes.map((node) => {
        return node.convertIntoWords();
    });
    symbols = symbols.join(" "+operatorRep[this.value]+" ");
    var symbolsInWords = ['(',symbols,')'];
    return symbolsInWords.join("");
  }

  addParentheses(nodes) {
    var symbols = nodes.map((node) => {
        return node.addParentheses();
    });
    symbols = symbols.join(this.value);
    var symbolsInWords = ['(',symbols,')'];
    return symbolsInWords.join("");
  }
}

module.exports = Operator_node;
