"use strict"

class Tree {
  constructor(operand1,operator,operand2) {
    this.left = operand1;
    this.root = operator;
    this.right = operand2;
  }
  evaluate() {
    return this.left.value+''+this.root+''+this.right.value;
  }
}

module.exports = Tree;
