/**
 * 17. Letter Combinations of A Phone Number (https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
 * @param digits the sequence of numbers of how a numpad phone inputs letters
 * @returns possible letter combinations
 */
const numPadGroups = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  // ["4", "ghi"],
  // ["5", "jkl"],
  // ["6", "mno"],
  // ["7", "pqrs"],
  // ["8", "tuv"],
  // ["9", "wxyz"],
};

const map = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  // let ans: string[] = [];
  let size = 1;
  // empty digits string
  if (digits.length === 0) {
    return [];
  }

  // Get total size of answer
  for (let i = 0; i < digits.length; i++) {
    size *= map[digits[i]].length;
  }

  let ans = new Array(size).fill("");
  let repeatAcc = 1;

  // console.log(size)
  // console.log(map[digits[1]])
  // let temp = map[digits[1]]
  // console.log(typeof temp)

  // Main Loop
  //  i => iterate on digits
  //  j => iterate on array of empty strings
  for (let i = 0; i < digits.length; i++) {
    const lettersSize = map[digits[i]].length;
    const repeat = size / lettersSize / repeatAcc;
    console.log(
      "repeat: " + repeat + " " + size + " " + lettersSize + " " + repeatAcc
    );

    for (let j = 0; j < size; j++) {
      // Add each letter to each empty string
      console.log(j / repeat + " " + (Math.floor(j / repeat) % lettersSize));
      ans[j] = ans[j] + map[digits[i]][Math.floor(j / repeat) % lettersSize];
    }

    // acc for repeat
    repeatAcc *= lettersSize;
  }

  return ans;
}
