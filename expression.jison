
%lex
%%

\s+                   //skip
[0-9]+                return 'NUMBER'
'+'                   return '+'
'*'                   return '*'
<<EOF>>               return 'EOF'

/lex

%{
  var NumberNode = require(process.cwd() + "/NumberNode.js");
  var OperatorNode = require(process.cwd() + "/OperatorNode.js");
  var ParseTree = require(process.cwd() + "/ParseTree.js");
%}

%left '+'
%left '*'

%start expressions
%%


expressions
    : e EOF
        {return $$;}
    ;

e
    : e '+' e
        {$$ = new ParseTree($1,new OperatorNode($2),$3);}

    | e '*' e
        {$$ = new ParseTree($1,new OperatorNode($2),$3);}

    | NUMBER
        {$$ = new NumberNode(yytext);}
    ;
