function findPalindromicSubstrings(s: string, index: number): number {
  const len = s.length; // Assign length of string param locally

  let ctr = 0; // ctr for matches

  let left = index; // Starting at 0 on both heads
  let right = index;

  // Check starting letter
  while (0 <= left && right < len && s[left] == s[right]) {
    ctr += 1;
    left -= 1;
    right += 1;
  }

  left = index; // Re-initialize heads
  right = index + 1;

  // Check next letter
  while (0 <= left && right < len && s[left] == s[right]) {
    ctr += 1;
    left -= 1;
    right += 1;
  }

  return ctr;
}

function countSubstrings(s: string): number {
  let ctr: number = 0;

  for (let i = 0; i < s.length; i++) {
    ctr += findPalindromicSubstrings(s, i);
  }

  return ctr;
}
