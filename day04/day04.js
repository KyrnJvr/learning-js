let var1 = 'string1';
let var2 = 'string2';

// Destructuring Assignment
[var1, var2] = [var2, var1];

console.log(`var 1 value: ${var1}`); // string 2
console.log(`var 2 value: ${var2}`); // string 1