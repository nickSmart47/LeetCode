/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // spread operator lets you get max number in array
    let result = Math.max(...nums);
    let currentMin = 1, currentMax = 1;

    for (let i = 0; i < nums.length; i ++){
        let temp = currentMax * nums[i];
        currentMax = Math.max(nums[i] * currentMax, nums[i] * currentMin, nums[i]);
        currentMin = Math.max(temp, nums[i] * currentMin, nums[i]);
        result = Math.max(result, currentMax);
    }
    return Math.max(result, currentMax, currentMin);
};

console.log(maxProduct(nums = [2,3,-2,4])) // 6
console.log(maxProduct(nums = [-2,0,-1])) // 0
