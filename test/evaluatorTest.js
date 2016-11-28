var Parser = require('jison').Parser;
var fs = require('fs');
var chai = require('chai');
var evaluator = require('../src/evaluator.js');

var grammar = fs.readFileSync('src/parseTreeBuilder.jison', 'utf8');
var assert = chai.assert;
var parser;

beforeEach(()=> {
    parser = new Parser(grammar);
});

describe('#evaluator', () => {
    describe('#evaluate', () => {
        it('should give 3 for 1+2', () => {
            var parse_tree = parser.parse("1+2;");
            var expected = evaluator.evaluate(parse_tree);
            assert.equal(expected, 3);
        });

        it('should give 6 for 1+2+3', () => {
            var parse_tree = parser.parse("1+2+3;");
            var expected = evaluator.evaluate(parse_tree);
            assert.equal(expected, 6);
        });

        it('should evaluate "x=3;5+x;"', () => {
            var parse_tree = parser.parse("x=3;5+x;");
            var expected = evaluator.evaluate(parse_tree);
            assert.equal(expected, 8);
        });

        it('should evaluate "x=3;y=2;x*y;"', () => {
            var parse_tree = parser.parse("x=3;y=2;x*y;");
            var expected = evaluator.evaluate(parse_tree);
            assert.equal(expected, 6);
        });

        it('should evaluate "2^3;"',()=>{
            var parse_tree = parser.parse("2^3;");
            var expected = evaluator.evaluate(parse_tree);
            assert.equal(expected, 8);
        });

        it('should evaluate "x=10;y=20;z=30;(x^2)+(y^2)-(z^2);"',() => {
            var parse_tree = parser.parse("x=10;y=20;z=30;x^2+y^2-z^2;");
            var expected = evaluator.evaluate(parse_tree);;
            assert.equal(expected, -400);
        });

        it('should evaluate a variable', ()=> {
            var parse_tree = parser.parse("t=5;t;");
            var expected = evaluator.evaluate(parse_tree);;
            assert.equal(expected, 5);
        });

        it('should throw an reference error when a variable is using without declaring it',() => {
            var parse_tree = parser.parse("b+2;");
            try{
                evaluator.evaluate(parse_tree);
            }
            catch(e){
                return;
            }
            assert.ok(false);
        });
        it('should handle a variable assignment to another variable', ()=> {
            var parse_tree = parser.parse("x=10;y=x+20;y+5;");
            var expected = evaluator.evaluate(parse_tree);;
            assert.equal(expected, 35);
        });

        it('should handle re-assignments to the same variable', ()=> {
            var parse_tree = parser.parse("x=2; x=2^5; x;");
            var expected = evaluator.evaluate(parse_tree);;
            assert.equal(expected, 32);
        });

        it('should evaluate 3!', ()=> {
            var parse_tree = parser.parse("3!;");
            var expected = evaluator.evaluate(parse_tree);
            assert.equal(expected, 6);
        });
    });
});