// app.js
const { getSum, isSquare, greeting } = require('./index.js');

const result1 = getSum(0.2, 0.6);
console.log(result1); // Output: 5


const result2 = isSquare(9)
console.log(result2); // true


const result3 = greeting('Bill', 'Jacobson', '33')
console.log(result3); 