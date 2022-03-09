/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.


Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var hammingWeight = function (n) {
    n = n.toString(2)
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== '1') { continue; }
        count++;
    }
    return count;
};
var countBits = function (n) {
    let result = [];
    for (let i = 0; i <= n; i ++){
        result.push(hammingWeight(i));
    }
    return result;
};



console.log(countBits(2));
console.log(countBits(5));

let number = 5;

// console.log(number.toString(2))
