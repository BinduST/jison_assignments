"use strict"

class Parse_tree {
  constructor(operator,children) {
    this.root = operator;
    this.children = children;
  }

  evaluate() {
    return this.root.evaluate(this.children);
  }

  addParentheses() {
    return this.root.addParentheses(this.children);
  }

  convertIntoWords() {
    return this.root.convertIntoWords(this.children);
  }
}

module.exports = Parse_tree;
