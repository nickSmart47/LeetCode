/**
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let result = [];
    let sum = 0;
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while (sum != target && leftPointer < rightPointer) {
        sum = numbers[leftPointer] + numbers[rightPointer];
        if (sum == target) {
            result = [leftPointer + 1, rightPointer + 1];
        }
        else if (sum < target) {
            leftPointer++;
        }
        else if (sum > target) {
            rightPointer--;
        }
    }
    return result;
};

console.log(twoSum(numbers = [2, 7, 11, 15], target = 9)); // The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
console.log(twoSum(numbers = [2, 3, 4], target = 6)); // The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
console.log(twoSum(numbers = [-1, 0], target = -1)); // The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

