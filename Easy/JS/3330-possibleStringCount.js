function possibleStringCount(word) {
  let ans = 1;
  let count = 1;
  let prev = word[0];

  for (let i = 1; i < word.length; i++) {
    if (word[i] !== prev) {
      ans += count - 1;
      count = 1;
      prev = word[i];
    } else {
      count++;
    }
  }

  ans += count - 1;
  return ans;
}
