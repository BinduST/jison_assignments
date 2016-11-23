"use strict"
var converter = require('number-to-words');

class NumberNode {
  constructor(symbol) {
    this.value = symbol;
    this.type = 'number';
  }
  evaluate() {
    return this.value;
  }

  convertIntoWords(){
    return converter.toWords(this.value);
  }
}

module.exports = NumberNode;
