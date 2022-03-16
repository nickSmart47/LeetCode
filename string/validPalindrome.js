/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //the regex replace below finds all non alphanumeric characters and replaces them with nothing, effectively removing them.
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(str)

    // establish variables to track indices starting from beginning and end
    let leftIdx = 0;
    let rightIdx = str.length - 1;
    // loop through string
    // while the character at current index is equal to character at its mirrored index, keep going
    while (leftIdx <= str.length / 2) {
        // if at any point characters are not equal, return false
        if (str[leftIdx] != str[rightIdx]) {
            return false;
        }
        leftIdx++;
        rightIdx--;
    }
    // otherwise return true
    return true;
};

console.log(isPalindrome(s = "A man, a plan, a canal: Panama")) // true 
console.log(isPalindrome(s = "race a car")) // false
console.log(isPalindrome(s = " ")) // true 
