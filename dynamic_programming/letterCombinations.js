/**
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  const letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length < 2) return !digits ? [] : letters[digits[0]];

  let result = letters[digits[0]];

  for (let i = 1; i < digits.length; i++) {
    let characters = letters[digits[i]];
    let store = [];

    for (let j = 0; j < result.length; j++) {
      let c1 = result[j] + characters[0];
      let c2 = result[j] + characters[1];
      let c3 = result[j] + characters[2];
      store = [...store, c1, c2, c3];

      if (characters.length === 4) store.push(result[j] + characters[3]);
    }
    result = store;
  }
  return result;
};

console.log(letterCombinations("23"));
