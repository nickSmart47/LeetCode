/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.


Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5

Constraints:

-1000 <= a, b <= 1000
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    //while condition tells algorithm to repeat until there are no more carries
    while (b != 0){
        // temp represents the carry value, finds all bit positions with the case 1+1.
        // since addition results in 0, carry gets shifted to the left by 1 (using '<< 1')
        let temp = (a & b) << 1;
        // '^' represents the XOR operator... handles case 0+1 and 1+0
        a = a ^ b;
        b = temp;
    }
    return a;
};

var getSumQuick = function (a, b){
    if (b==0) return a;
    return getSum(a ^ b, (a & b) <<1);
}

console.log(getSum(a = 1, b = 2));
console.log(getSum(a = 2, b = 3));
console.log(getSum(a = 2, b = -3));


