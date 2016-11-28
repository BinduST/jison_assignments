"use strict"
var converter = require('number-to-words');

class Number_node {
  constructor(symbol) {
    this.value = symbol;
    this.type = 'number';
  }

  evaluate() {
    return Number(this.value);
  }

  convertIntoWords() {
    return converter.toWords(this.value);
  }

  addParentheses() {
    return this.value;
  }
}

module.exports = Number_node;
