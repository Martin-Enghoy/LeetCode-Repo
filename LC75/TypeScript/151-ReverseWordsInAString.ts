function reverseWords(s: string): string {
  let arr = s.trim().split(/\s+/);
  let ans: string[] = [];
  let ctr = arr.length - 1;

  // const whitespaceRegEx = /\s/;

  while (ctr >= 0) {
    // console.log(whitespaceRegEx.test(arr[ctr]))

    ans.push(arr[ctr]);
    console.log("ANS: " + ans);
    console.log("ANS LENGTH: " + ans.length);

    ctr--;
  }

  return ans.join(" ");
}
