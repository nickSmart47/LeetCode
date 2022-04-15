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

    const generateCombinations = (open = 0, close = 0, possibleCombination = '') => {
        // if close is equal to n, then we have added all parentheses needed for this combination
        // so we push combination to results
        if (close === n){
            results.push(possibleCombination);
            return;
        }
        // if there are less open parentheses than n, we add an opening parenthesis to this combination
        // and recursively call generate combinations and increment our open count
        if (open < n) generateCombinations(open+1, close, possibleCombination + '(');
        // if there are more open parentheses then closed, then we need to add a closed parenthesis
        // so we recursively call the generate combo function, this time incrementing our close counter
        // and adding a closed parentheses to the possibleCombination 
        if (open > close) generateCombinations(open, close + 1, possibleCombination + ')');
    }
    generateCombinations();
    return results;
};

console.log(generateParenthesis(3))
