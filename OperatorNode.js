"use strict"

var operatorRep = {'+':'plus','*':'times'};

class OperatorNode {
  constructor(symbol) {
    this.value = symbol;
    this.type = 'operator';
  }
  evaluate() {
    return this.value;
  }

  convertIntoWords(){
    return operatorRep[this.value];
  }
}

module.exports = OperatorNode;
