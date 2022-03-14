/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {

//     const stack = [];
//     const table = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     }

//     for (let char of s) {
//         if (!table[char]) stack.push(char);
//         else if (stack.pop() !== table[char]) return false;
//     }

//     return stack.length === 0;
// };


const isValid = (s) => {
    const stack = [];
    for (const c of s) {
        if (c === '{' || c === '[' || c === '(') stack.push(c);
        else {
            const p = stack.pop(); // No need to check for empty before popping (returns undefined)
            if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid(s = "()[]{}"))
console.log(isValid(s = "()[]}"))
console.log(isValid(s = ")()[]{}}"))

