/**
 * Given two binary strings a and b, return their sum as a binary string.
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "",
    carry = 0;

  while (a || b || carry) {
    let sum = +a.slice(-1) + +b.slice(-1) + carry;

    if (sum > 1) {
      result = sum % 2 + result;
      carry = 1;
    } else {
      result = sum + result;
      carry = 0;
    }

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }
  return result;
};

console.log(addBinary((a = "11"), (b = "1"))); // 100
console.log(addBinary((a = "1010"), (b = "1011"))); // 10101
