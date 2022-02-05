/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = '';

    if (!strs) {
        return ''
    }
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every((current) => current[i] === strs[0][i])) {
            result += strs[0][i];
        }
        else{
            break;
        }
    }

    return result;
};

console.log(longestCommonPrefix(strs = ["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(strs = ["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(strs = ["cir", "car"])); // "c"
