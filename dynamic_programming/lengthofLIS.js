/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    LIS = new Array(nums.length).fill(1);

    for(let i = nums.length-1; i >= 0; i--){
        for(let j = i+1; j<nums.length; j++){
            if (nums[i] < nums[j]){
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
            }
        }
    }
    return Math.max(...LIS)
};

console.log(lengthOfLIS(nums = [10,9,2,5,3,7,101,18])) //The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
console.log(lengthOfLIS(nums = [0,1,0,3,2,3])) //4
console.log(lengthOfLIS(nums = [7,7,7,7,7,7,7])) //1

