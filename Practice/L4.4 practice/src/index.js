/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    if (number1 < number2 && number1 < number3) {
        return number1;
    }
    if (number2 < number1 && number2 < number3) {
        return number2;
    }
    if (number3 < number1 && number3 < number2) {
        return number3;
    }
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    if ((x % 2 == 0) && (y % 2 == 0) && (z % 2 == 0)) {
        return 'even';
        }
    else if ((x % 2 == 1) && (y % 2 == 1) && (z % 2 == 1)) {
        return 'odd';
        }
    else {
        return 'even/odd';
        }
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    if ((z >= x && z <= y) || (z <= x && z >= y)) {
        return 'In range'
        }
    else {
        return 'Out of range'
        }
    throw new Error('Task not implemented');
};
