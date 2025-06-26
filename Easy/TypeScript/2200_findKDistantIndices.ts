function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const ans = [];

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      const start = j - k <= 0 ? 0 : j - k;
      console.log('start: ', start);
      for (let i = start; i <= j + k && i < nums.length; i++) {
        if (Math.abs(i - j) <= k) {
          if (!ans.includes(i)) {
            ans.push(i);
          }
        }
      }
    }
  }

  return ans;
}
