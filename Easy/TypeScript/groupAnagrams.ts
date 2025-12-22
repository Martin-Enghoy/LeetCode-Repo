// https://leetcode.com/problems/group-anagrams/
function groupAnagrams(strs: string[]): string[][] {
  const pairs = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');

    if (pairs.has(sortedStr)) {
      let tempVal = pairs.get(sortedStr);
      pairs.set(sortedStr, [...tempVal, strs[i]]);
    } else {
      pairs.set(sortedStr, [strs[i]]);
    }
  }

  // @ts-ignore
  return [...pairs.values()];
}
