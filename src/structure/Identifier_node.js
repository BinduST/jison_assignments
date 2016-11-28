"use strict"
var variable_lookup = require('../Variable_lookup.js');
//var ReferenceError = require('../error/ReferenceError.js');

class Identifier_node {
    constructor(id){
        this.name = id;
        this.type = 'identifier';
    }

    assign(value) {
        variable_lookup[this.name] = value.evaluate();
    }

    evaluate() {
        if(variable_lookup[this.name]) {
            return variable_lookup[this.name];
        }
        throw ReferenceError(this.name);
    }
}

module.exports = Identifier_node;