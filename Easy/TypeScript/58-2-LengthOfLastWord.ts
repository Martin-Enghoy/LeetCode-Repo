function lengthOfLastWordToo(s: string): number {
  let str: string[] = s.split(" ");
  let ans: number = str[str.length - 1].length;

  console.log("string array: " + str);

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].length > 0) {
      ans = str[i].length;
      break;
    }
  }

  return ans;
}
