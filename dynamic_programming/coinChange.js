/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //Bottom up Dynamic Programming solution...
    //initialize DP array of length amount +1 and fill with amount+1 as all values
    const dp = Array(amount+1).fill(amount+1)
    //set dp at position 0 to equal 0
    dp[0] = 0;

    //loop through amount starting from 1 (the bottom of the tree)
    for(let i = 1; i < amount+1; i++){
        //loop through coin options
        for (let j = 0; j < coins.length; j++){
            // if current amount minus current coin is greater than or equal to zero
            if (i - coins[j] >= 0){
                // set dp array at position of current amount to be the minimum of dp at current position and 1 + dp of current position minus dp at position current amount minus current coin. 
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }
    // if dp at position amount is not equal to amount + 1 (meaning we haven't gone over) then return dp at position amount
    if (dp[amount] != amount+1){
        return dp[amount] 
        // otherwise, return -1
    } else {return -1};

};

console.log(coinChange(coins = [1, 2, 5], amount = 11)) // 3
console.log(coinChange(coins = [2], amount = 3)) // -1
console.log(coinChange(coins = [1], amount = 0)) // 0

