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
var isValid = function (s) {

    const stack = [];
    const table = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for(let char of s){
        if (!table[char]) stack.push(char);
        else if(stack.pop() !== table[char]) return false;
    }

    return stack.length === 0;
};

console.log(isValid(s = "()[]{}"))