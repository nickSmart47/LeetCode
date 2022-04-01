/**
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = '';
    let inputArray = x.toString().split('');
    let reversedNumbers = parseInt(inputArray.reverse().join(''));

    if (x < 0) result += "-";

    if (reversedNumbers > Math.pow(2, 31) || reversedNumbers < Math.pow(-2, 31)) {
        result += '0';
    } else {
        result += reversedNumbers.toString();
    }

    return result;
};

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
