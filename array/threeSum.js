/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    console.log({ nums })
    results = [];

    for (const [index, element] of nums.entries()) {
        if (index > 0 && element == nums[index - 1]) {
            continue;
        }
        let left = index + 1, right = nums.length - 1;
        while (left < right) {
            let threeSum = element + nums[left] + nums[right];
            console.log(threeSum)
            if (threeSum > 0) {
                right--
            }
            else if (threeSum < 0) {
                left++
            }
            else {
                results.push([element, nums[left], nums[right]]);
                left++;
                while (nums[left] == nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    return results;
};

console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]