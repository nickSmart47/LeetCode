/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (word in wordDict) {
      if (
        i + wordDict[word].length <= s.length &&
        s.substring(i, i + wordDict[word].length) == wordDict[word]
      ) {
        dp[i] = dp[i + wordDict[word].length];
      }
      if (dp[i]) break;
    }
  }
  return dp[0];
};

console.log(wordBreak((s = "leetcode"), (wordDict = ["leet", "code"]))); // true
console.log(wordBreak((s = "applepenapple"), (wordDict = ["apple", "pen"]))); // true
console.log(
  wordBreak(
    (s = "catsandog"),
    (wordDict = ["cats", "dog", "sand", "and", "cat"])
  )
); // false
