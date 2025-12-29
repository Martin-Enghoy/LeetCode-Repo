// https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s: string, k: number): number {
  let answer = 0;
  let charSet = new Set(s);

  // @ts-ignore
  for (let c of charSet) {
    let count = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      if (s[right] === c) {
        count += 1;
      }

      while (right - left + 1 - count > k) {
        if (s[left] === c) {
          count -= 1;
        }

        left += 1;
      }

      answer = Math.max(answer, right - left + 1);
    }
  }

  return answer;
}
