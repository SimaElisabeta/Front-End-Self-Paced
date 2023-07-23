/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    let result = '';
    for (let i = x; i <= y; i += step) {
        result += `${i} `;
    }
    
    return result.trim();
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    let sum = 0;
    let loops = y - x;

    for (let i = 0; i <= loops; i++) {
        for (let j = x; j <= y-i; j++) {
            sum += j;
        }
    }

    return sum;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;    
};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    if (x === 1) {
        return '1.00';
        }
    else if (x === 0) {
        return '0.00';
        }
    else {
        let sum = 0;

        for (let i = 1; i <= x; i++) {
            sum += (1/i**2);
        }
        
        return sum.toFixed(2).toString();
        }

    // The login to solve the problem:
    // result:  (5 --> 1 + 1/4 + 1/9 + 1/16 + 1/25 --> "1.46")
    // result:  (3 --> 1 + 1/4 + 1/9 --> "1.36")

    // 1 + 0.25 + 0.1111111111111111 + 0.0625 + 0.04 = 1.46 (1.463611111111111)
    // 1 + 0.25 + 0.1111111111111111 + 0.0625 + 0.04 = 1.36 (1.361111111111111)

    // nth term is 1/n^2
    // 1/1^2 = 1
    // 1/2^2 = 1/4
    // 1/3^2 = 1/9
    // 1/4^2 = 1/16    
};

/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    if (x === 0) {
        return 1;
    }

    let counter = 0;
    let convertedX = Math.abs(x);

    while (convertedX !== 0) {
        convertedX = Math.floor(convertedX / 10);
        counter++;
    }

    return counter
};