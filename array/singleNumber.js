/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
 * @param {number[]} nums
 * @return {number}
 */
//below works for number 1 and 2 but not 3
var singleNumber = function(nums) {
    const counts = {};

    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return Object.keys(counts).find(key => counts[key] === 1);
};

 var singleNumberThree = function(nums) {
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let result = []
    for (count in counts){
        if (counts[count] == 1){
            result.push(parseInt(count))
        }
    }
    return result;
};

console.log(singleNumber(nums = [1,2,1,3,2,5])) // 1
console.log(singleNumber(nums = [4,1,2,1,2])) // 4
console.log(singleNumber(nums = [1])) // 1
