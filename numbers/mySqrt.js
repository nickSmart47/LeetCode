/**
 * Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x === 0) return 0;

    let start = 1, end = x/2, result = 1;

    while (start <= end){
        let mid = start + (end - start) /2;
        if(mid == x/mid) return mid;
        else if(mid < x/mid) {
            result = mid;
            start = Math.floor(mid)+1;
        }
        else{
            end = Math.floor(mid) - 1;
        }
    }
    return Math.floor(result);
};

console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2, since square root of 8 is 2.828... and decimal part is truncated.
