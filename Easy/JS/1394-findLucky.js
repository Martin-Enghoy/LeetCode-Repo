function findLucky(arr) {
  let ans = -1;
  let freq = new Map();
  const sorterArr = arr.sort((a, b) => b - a);

  for (let num of sorterArr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // console.log('freq.entries(): ', freq.entries());

  for (let [key, val] of freq.entries()) {
    if (key === val) {
      ans = key;
      break;
    }
  }

  return ans;
}
