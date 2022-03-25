/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        let mid = start + end / 2;
        if (nums[start] < nums[end]) {
            return nums[start];
        }
        else if (nums[mid] <= nums[start] && nums[mid] <= nums[end]) {
            end = mid;
        }
        else start = mid + 1;
    }
    return Math.min(nums[start], nums[end]);
};

console.log(findMin(nums = [3, 4, 5, 1, 2])) // 1
console.log(findMin(nums = [4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin(nums = [11, 13, 15, 17])) // 11
