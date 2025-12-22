// https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
  console.log('first: ', s.split('').sort());
  console.log('second: ', t.split('').sort());

  return s.split('').sort().join('') === t.split('').sort().join('');
};
