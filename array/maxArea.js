/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
 * @param {number[]} height
 * @return {number}
 */
// two pointers solution
var maxArea = function (height) {
    // initialize left to beginning, right to end and area to 0
    let left = 0, right = height.length -1, area = 0;

    // while there are still values between left and right to check
    while (left < right){
        // store the smallest height between left and right pointers in min height
        let minHeight = Math.min(height[left], height[right]);
        // calculate area with current min height
        let tempArea = (right-left) * minHeight;
        // set area to the max of previous area and temp area
        area = Math.max(area, tempArea);
        // if value at left pointer is less than right, then move left pointer forward
        if (height[left] < height[right]){
            left++;
            // while value at left pointer is less than minimum height, move pointer forward (since we will already have found a greater area)
            while (height[left] < minHeight){
                left++;
            }
        }
        else{
        // if value at right pointer is less than right, then move right pointer backwards
            right--
            // while value at right pointer is less than minimum height, move pointer backwards (since we will already have found a greater area)
            while (height[right] < minHeight){
                right--;
            }
        }
    }
    return area;
};

console.log(maxArea(height = [1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea(height = [height = [1,1]])) // 1
