/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    const sum = number1 + number2;
    return parseFloat(sum.toFixed(2));
    throw new Error('Task not implemented');
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
    return `Hello, my name is ${name} ${surname} and I am ${age} years old.`;
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    if (x < 0) {
        return false;
    }

    const squareConvert = Math.sqrt(x);
    return Number.isInteger(squareConvert);
    throw new Error('Task not implemented');
};