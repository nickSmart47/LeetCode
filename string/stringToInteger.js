/**
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
6. Return the integer as the final result.
 */


/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function (s) {
//     let result = 0;
//     let isNegative = false;

//     if (s.length == 1) {
//         if (isNaN(s[0])) {
//             return 0;
//         }
//         else return s[0]
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (!s[i].match(/^\d+$/)) {
//             if (s[i] == ".") break
//             if (s[i] == "-" && s[i + 1].match(/^\d+$/)) {
//                 isNegative = true;
//             }
//             if (!s[i + 1].match(/^\d+$/) && s[i] != " ") break
//             continue;
//         }
//         else result += s[i]
//     }

//     result = parseInt(result)

//     if (result > (Math.pow(2, 31) - 1)) {
//         if (isNegative) result = (Math.pow(2, 31))
//         else result = (Math.pow(2, 31) - 1)
//     }

//     if (isNegative) return result * -1;
//     else return result;
// };

var myAtoi = function (s) {
    let result = parseInt(s.trim());
    if (isNaN(result)) return 0;

    let upperLimit = Math.pow(2, 31)
    let lowerLimit = upperLimit * -1

    if (result >= upperLimit)  return upperLimit - 1;
    else if (result <= lowerLimit) return lowerLimit
    else return result;
}

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("-91283472332")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("3.14159")); // 3
console.log(myAtoi("+")); // 0
console.log(myAtoi("-")); // 0
console.log(myAtoi("1")); // 0
console.log(myAtoi(
    "21474836460")); // 0

// console.log(parseInt("23 wasd".trim()))







