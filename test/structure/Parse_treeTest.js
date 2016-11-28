var Parser = require('jison').Parser;
var fs = require('fs');
var chai = require('chai');

var grammar = fs.readFileSync('src/parseTreeBuilder.jison', 'utf8');
var assert = chai.assert;
var parser;

beforeEach(()=>{
    parser = new Parser(grammar);
})

describe('Parse_tree', () => {
    describe('#addParentheses()', () => {
        it('should represent 1+2 as "(1+2)"', () => {
            var parse_tree = parser.parse("1+2;");
            var expected = parse_tree[0].addParentheses();
            assert.equal(expected, '(1+2)');
        });

        it('should represent 10+2*3 as "(10+(2*3))"', () => {
            var parser = new Parser(grammar);
            var parse_tree = parser.parse("10+2*3;");
            var expected = parse_tree[0].addParentheses();
            assert.equal(expected, '(10+(2*3))');
        });
    });

    describe('#convertIntoWords()', () => {
        it('should represent 1+2 in words', () => {
            var parse_tree = parser.parse("1+2;");
            var expected = parse_tree[0].convertIntoWords();
            assert.equal(expected, '(one plus two)');
        });

        it('should represent 1*6+5 in words', () => {
            var parse_tree = parser.parse("1*6+5;");
            var expected = parse_tree[0].convertIntoWords();
            assert.equal(expected, '((one times six) plus five)');
        });
    });
});
