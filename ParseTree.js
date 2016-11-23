"use strict"

class ParseTree {
  constructor(operand1,operator,operand2) {
    this.left = operand1;
    this.root = operator;
    this.right = operand2;
  }
  evaluate() {
    return ['(',this.left.evaluate(),this.root.evaluate(),this.right.evaluate(),')'].join('');
  }

  convertIntoWords() {
    return ['(',this.left.convertIntoWords(),this.root.convertIntoWords(),this.right.convertIntoWords(),')'].join(' ');
  }
}

module.exports = ParseTree;
