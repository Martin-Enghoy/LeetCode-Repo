// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let length = 0;

  const subSet = new Set();
  while (right < s.length) {
    if (!subSet.has(s[right])) {
      subSet.add(s[right]);
      length = Math.max(length, subSet.size);
      right += 1;
    } else {
      subSet.delete(s[left]);
      left += 1;
    }
  }

  return length;
}
