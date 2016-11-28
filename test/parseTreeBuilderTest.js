var Parser = require('jison').Parser;
var fs = require('fs');
var chai = require('chai');

var grammar = fs.readFileSync('src/parseTreeBuilder.jison', 'utf8');
var parser = new Parser(grammar);

var assert = chai.assert;

describe('parseTreeBuilder',() =>{
    it('creates a parse tree for the expression "1+2"', ()=>{
        var res = parser.parse("1+2;");
        assert.ok(res);
    });

    it('checks a statement ends with semicolon or not', ()=> {
        try{
           parser.parse("1+2");
        }
        catch(e){
           return;
        }
        assert.ok(false);
    });

    it('throws parse error when a number is assigned to another number', ()=> {
        try{
           parser.parse("1=2;");
        }
        catch(e){
           return;
        }
        assert.ok(false);
    });
});

