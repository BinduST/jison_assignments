
var add = function(operand1,operand2) {
    var num1  = operand1.evaluate();
    var num2  = operand2.evaluate();
    return num1+num2;
}

var subtract = function (operand1,operand2) {
    var num1  = operand1.evaluate();
    var num2  = operand2.evaluate();
    return num1-num2;
}

var multiply = function (operand1,operand2) {
    var num1  = operand1.evaluate();
    var num2  = operand2.evaluate();
    return num1*num2;
}

var pow = function (operand1,operand2) {
    var num1  = operand1.evaluate();
    var num2  = operand2.evaluate();
    return Math.pow(num1,num2);
}

var assign = function (operand1, operand2) {
    return operand1.assign(operand2);
}

var factorialOf = function (num) {
    var number = num.evaluate();
    var factorial = function(number){
        if (number === 0)
            return 1;
        if (number > 0)
            return factorial(number-1)*number;
        return null;
    }
    return factorial(number);
};

var operators = {
    '+': {'evaluate' : add},
    '-': {'evaluate' : subtract},
    '*': {'evaluate' : multiply},
    '^': {'evaluate' : pow},
    '=': {'evaluate' : assign},
    '!': {'evaluate' : factorialOf}
}

module.exports = operators;