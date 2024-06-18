/**
 * 3. Longest Substring Without Repeating Characters
 * @param s string
 * @return number - length of the longest substring in s
 */

function lengthOfLongestSubstringBrute(s: string): number {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const unique = new Set<string>(); // init unique set
    unique.add(s[i]); // append start of substring

    // Check if remaining characters are longer
    if (s.length - i > ans) {
      for (let y = i + 1; y < s.length; y++) {
        // Check if unique char
        if (!unique.has(s[y])) {
          unique.add(s[y]);
          console.log(unique);
        } else {
          break;
        }
      }
    } else {
      break;
    }
    if (unique.size > ans) {
      ans = unique.size;
    }
  }

  return ans;
}

function lengthOfLongestSubstring(s: string): number {
  // if(s.length < 2) return s.length;
  let i = 0,
    j = 0,
    max = 0;

  let mySet = new Set();
  while (j < s.length) {
    if (!mySet.has(s[j])) {
      mySet.add(s[j++]);
      max = Math.max(max, mySet.size);
    } else mySet.delete(s[i++]);
  }
  return max;
}
