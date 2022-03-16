/**
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === "" || needle == haystack) {
        return 0;
    }
    let indexOfNeedle;
    //loop through needle (index i) one character at a time
    for (let i = 0; i <= needle.length; i++) {
        //loop through haystack (index j)
        for (let j = 0; j < haystack.length; j++) {

            while (haystack[j] == needle[i]) {
                //then move needle and haystack indices up by 1
                //need to keep track of the INDEX at which needle was found in haystack...
                //but only if needle is at index 0
                if (i === 0) {
                    indexOfNeedle = j;
                }
                // console.log('current indices are needle', i, 'haystack', j)
                i++;
                j++;
                if (j >= needle.length){
                    break;
                }
            }
        }
    }

    //if needle is found in haystack
    // console.log('current index of needle is', indexOfNeedle)
    if (indexOfNeedle != null){
        //return index at which it was found
        return indexOfNeedle
        //otherwise return -1 if needle not found in haystack.
    } else return -1;

};

console.log(strStr(haystack = "hello", needle = "ll")); // should return 2
console.log(strStr(haystack = "aaaaa", needle = "bba")); // should return -1
console.log(strStr(haystack = "", needle = "")); // should return 0
console.log(strStr(haystack = "abc", needle = "c")); // should return 2
console.log(strStr(haystack = "aaa", needle = "a")); // should return 0


