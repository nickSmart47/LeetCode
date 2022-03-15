/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
// var isAnagram = function (s, t) {
//     let isAnagram = true;
//     let longerString = '';
//     let shorterString = '';
//     if (s.length > t.length){
//         longerString = s;
//         shorterString = t;

//     }
//     else{
//         longerString = t;
//         shorterString = s;
//     }
//     for (let i = 0; i < longerString.length; i++) {
//         if (longerString.includes(shorterString[i])){
//             continue;
//         }
//         else{
//             isAnagram = false;
//         }
//     }
//     return isAnagram;
// };


// var isAnagram = function (s, t) {
//     let sortedS = s.split('').sort().join('')
//     let sortedT = t.split('').sort().join('')
//     return (sortedS === sortedT)
// }

var isAnagram = function (s, t) {
    return (s.split('').sort().join('') === t.split('').sort().join(''))
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('a', 'ab'))
console.log(isAnagram('ba', 'ab'))
console.log(isAnagram('aacc', 'ccac'))


