function longestCommonPrefixToo(strs: string[]): string {
  const comp: string[] = strs;

  // Ascending lexicographically, therefore first and last string would only be checked.
  const sort = comp.sort((a, b) => (a < b ? -1 : 1));

  const first = sort[0];
  const last = sort[sort.length - 1];
  let ans = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      ans += first[i];
    } else {
      break;
    }
  }
  return ans;
}
