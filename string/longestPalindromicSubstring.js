/**
 * Given a string s, return the longest palindromic substring in s.


Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    //initialize return variable longestPal
    let longestPal = "";
    // loop through string( i )
    for (let i = 0; i < s.length; i++) {
        // set pointers for left (start) and right (end)
        let leftIndex = i;
        let rightIndex = s.length;
        // second loop (j)
        for (let j = 0; j < s.length; j++) {
            //so check for first char in s (b)
            let currentSubstring = s.slice(leftIndex, rightIndex);
            // starting from end, see if it is palindrome
            if (isPalindrome(currentSubstring) && currentSubstring.length > longestPal.length) {
                // if palindrome found and it is longer than current longest, set it to longest
                longestPal = currentSubstring;
            }
            else {
                rightIndex--;
            }
            // if not, right pointer minus one
        }
    }
    return longestPal;
};

var isPalindrome = (s) => {
    let reversedString = s.split('').reverse().join('');
    return (s == reversedString);
}

//console.log(longestPalindrome("babad")) // "bab" or "aba"
//console.log(longestPalindrome("bb")) // "bb"
console.log(longestPalindrome("cbbd")) // "bb"


// console.log(isPalindrome("abc"))