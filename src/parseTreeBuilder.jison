
%lex
%%

\s+                   //skip
[0-9]+                return 'NUMBER'
[A-Za-z]+             return 'IDENTIFIER'
'+'                   return '+'
'-'                   return '-'
'*'                   return '*'
'/'                   return '/'
'^'                   return '^'
'!'                   return '!'
'='                   return 'ASSIGN'
';'                   return 'SEMICOLON'
<<EOF>>               return 'EOF'

/lex

%{
  var NumberNode = require(process.cwd() + "/src/structure/Number_node.js");
  var OperatorNode = require(process.cwd() + "/src/structure/Operator_node.js");
  var IdentifierNode = require(process.cwd() + "/src/structure/Identifier_node.js");
  var VariableLookup = require(process.cwd() + "/src/Variable_lookup.js");
  var ParseTree = require(process.cwd() + "/src/structure/Parse_tree.js");
  var allTrees = [];
%}

%left 'ASSIGN'
%left '+' '-'
%left '*' '/'
%left '^'
%left '!'

%start expressions
%%

expressions
    : el EOF
       {return allTrees;}
    ;

el
    : expression SEMICOLON
       {allTrees.push($$);}

    | el expression SEMICOLON
       {allTrees.push($2);}

    ;

expression
      : e | assignment_expression

      ;

value
      : NUMBER
         {$$ = new NumberNode(yytext);}

      | identifier

      ;

e
    : e '+' e
        {$$ = new ParseTree(new OperatorNode($2),[$1,$3]);}

    | e '-' e
        {$$ = new ParseTree(new OperatorNode($2),[$1,$3]);}

    | e '*' e
        {$$ = new ParseTree(new OperatorNode($2),[$1,$3]);}

    | e '/' e
        {$$ = new ParseTree(new OperatorNode($2),[$1,$3]);}

    | e '^' e
        {$$ = new ParseTree(new OperatorNode($2),[$1,$3]);}

    | e '!'
        {$$ = new ParseTree(new OperatorNode($2),[$1]);}

    | value

    ;

assignment_expression
    : identifier ASSIGN e
        {$$ = new ParseTree(new OperatorNode($2),[$1,$3]);}
    ;

identifier
    :  IDENTIFIER
        {$$ = new IdentifierNode(yytext);}
    ;