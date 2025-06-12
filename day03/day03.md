Working with arithmetic and logical operators

Arithmetic Operators

`+` : Addition
`-` : Subtraction
`*` : Multiplication
`/` : Division
`%` : Modulus (remainder)
`**` : Exponentation
`++` : Increment (by 1)
`--` : Decrement (by 1)

Logical Operators

`&&` : AND (if the first operand is `false`, the second operand is not evaluated)
`||` : OR (if the first operand is `true`, the second operand is not evaluated)
`!` : NOT (negation)

Truthy and Falsy Values

JavaScript's logical operators also work with non-boolean values. In such cases, the values are treated as either "truthy" or "falsy."

`Falsy` values: false, 0, "" (empty string), null, undefined, NaN.
`Truthy` values: Any value not in the falsy list.

Logical Assignment Operators

JavaScript also has logical assignment operators that combine logical operations with assignment:

`&&=`: Assigns the value of the right operand to the left operand only if the left operand is truthy.
`||=`: Assigns the value of the right operand to the left operand only if the left operand is falsy.
`??=`: Assigns the value of the right operand to the left operand only if the left operand is null or undefined (nullish).


to get user input with only javascript

I will be using `prompt()`

`let num1 = parseFloat(prompt("Enter first number:"));`

