// Leetcode 271
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let tempStr = "";

    for (let i = 0; i < strs.length; i++) {
      tempStr += `${strs[i].length}#${strs[i]}`;
    }

    return tempStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const strArr = [];

    let current = 0;

    while (current < str.length) {
      let lookUp = current;
      while (str[lookUp] !== '#') {
        lookUp += 1;
      }
      let length = Number(str.substring(current, lookUp));
      strArr.push(str.substring(lookUp + 1, lookUp + 1 + length));
      current = lookUp + 1 + length;
    }

    return strArr;
  }
}
