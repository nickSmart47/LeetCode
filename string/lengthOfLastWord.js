/**
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.


Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let copyOfString = s.trim();
    let words = copyOfString.split(" ");
    
    let lastWord = words[words.length-1];

    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World")) // The last word is "World" with length 5.
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // The last word is "moon" with length 4.
console.log(lengthOfLastWord("luffy is still joyboy")) // The last word is "joyboy" with length 6.
