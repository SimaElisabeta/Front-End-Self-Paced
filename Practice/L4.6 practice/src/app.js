const {backToFront, nearest, removeDuplicate} = require ('./index.js')

let ex1 = backToFront('world', 2);
console.log(ex1);
console.log('*****************************EX1****************************************');

let ex2 = nearest(50, 49, 52);
console.log(ex2);
console.log('*****************************EX2****************************************');

let ex3 = removeDuplicate([1,2,3,2,3,1,1]);
console.log(ex3);
console.log('*****************************EX3****************************************');