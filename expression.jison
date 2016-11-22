
%lex
%%

\s+                   //skip
[0-9]+                return 'NUMBER'
'+'                   return '+'
'*'                   return '*'
<<EOF>>               return 'EOF'

/lex

%{
  var Node = require(process.cwd() + "/Node.js");
  var ParseTree = require(process.cwd() + "/ParseTree.js");
%}

%left '+'
%left '*'

%start expressions
%%


expressions
    : e EOF
        {console.log($$);}
    ;

e
    : e '+' e
        {$$ = new ParseTree($1,$2,$3);}

    | e '*' e
        {$$ = new ParseTree($1,$2,$3);}

    | NUMBER
        {$$ = new Node(yytext, 'number');}
    ;
