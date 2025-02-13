function mergeAlternately(word1: string, word2: string): string {
  let ans = "";
  let ctr = 0;

  while (!(ctr > word1.length - 1) || !(ctr > word2.length - 1)) {
    if (!(ctr > word1.length - 1)) {
      ans += word1[ctr];
    }

    if (!(ctr > word2.length - 1)) {
      ans += word2[ctr];
    }

    ctr++;
  }

  return ans;
}
