/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let answer = [];
    //loop through array
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        //for each value in array, create a sum that is product of all OTHER values
        if (nums[i] == 0) {
            sum = 1;
        }
        else {
            sum = 1;
        }
        for (let j = 0; j < nums.length; j++) {
            if (j != i) {
                sum *= nums[j]
            }
        }
        //then add that value to a new array of products
        answer.push(sum)
    }
    //return array of products
    return answer

};

console.log(productExceptSelf(nums = [1, 2, 3, 4])) // [24,12,8,6]
console.log(productExceptSelf(nums = [-1, 1, 0, -3, 3])) // [0,0,9,0,0]
console.log(productExceptSelf(nums = [0, 0])) // [0,0]
