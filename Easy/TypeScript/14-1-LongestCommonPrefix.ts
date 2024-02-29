function longestCommonPrefix(strs: string[]): string {
  const comp: string[] = strs; // Local Declaration
  let pref: string[] = [];
  let shlen: number = 0;

  if (comp.length === 0) {
    return "";
  }

  if (comp.length === 1) {
    return comp[0];
  }

  // Sort by length in ascending / Smallest length will be first
  comp.sort((a, b) => a.length - b.length);

  for (let i = 0; i < comp[0].length; i++) {
    let char: string = comp[0][i];
    for (let y = 1; y < comp.length; y++) {
      if (char !== comp[y][i]) {
        char = "";
        break;
      }
    }
    if (char === "") {
      break;
    } else {
      pref.push(char);
    }
  }

  let ans: string = pref.join("");
  return ans;
}
