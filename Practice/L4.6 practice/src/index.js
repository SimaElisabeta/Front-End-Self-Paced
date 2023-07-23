/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    if (str.length < symbolsCount) {
        return str;
    }

    let lastChar = str.slice(-symbolsCount);
    return lastChar + str + lastChar;
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    let firstN = Math.abs(z - (x));
    let secondN = Math.abs(z - (y));

    if (firstN < secondN) {
        return x;
    }
    else if (secondN < firstN) {
        return y;
    }
    else {
        return 'Both are equal in range!';
    }
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
};
