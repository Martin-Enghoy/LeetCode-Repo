function findLHS(nums) {
  let ans = 0;
  let freq = new Map();

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let [key, val] of freq.entries()) {
    if (freq.has(key + 1)) {
      ans = Math.max(ans, val + freq.get(key + 1));
    }
  }

  return ans;
}
