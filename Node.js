"use strict"

class Node {
  constructor(number,type) {
    this.value = number;
    this.type = type;
  }
  evaluate() {
    return this.value;
  }
}

module.exports = Node;
