function longestSubsequence(s: string, k: number): number {
  let right = s.length-1;
  let ctr = 0;
  let acc = 0;
  let ans = 0;
  // For special case empty string
  if (s.length === 0 && k === 0) {
    return 1;
  }

  while (right >= 0) {
    const num = Number(s[right]);
    console.log('num: ', num);

    if (num === 0) {
      ans++;
      ctr++;
      right--;
    }

    if (num === 1) {
      const binVal = Math.pow(2, ctr);
      acc += binVal;
      if (acc <= k) {
        ans++;
      }
      ctr++;
      right--;
    }
    console.log('acc: ', acc);
  }

  return ans;
}
