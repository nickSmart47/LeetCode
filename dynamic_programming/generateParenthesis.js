/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

decision tree?
so one possibility is to put n opening parens first...
then can do n-1 opening parens first... 
and so on...

Example 2:
Input: n = 1
Output: ["()"]

 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const results = [];

    const generateCombinations = (open = 0, close = 0, parenString = '') => {
        if (close === n){
            results.push(parenString);
            return;
        }
        if (open < n) generateCombinations(open+1, close, parenString + '(');
        if (open > close) generateCombinations(open, close + 1, parenString + ')');
    }
    generateCombinations();
    return results;
};

console.log(generateParenthesis(3))
