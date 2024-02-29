function lengthOfLastWord(s: string): number {
  let str: string = s;
  let ans: number = 0;
  let revctr: number = s.length - 1;
  let revcheck: boolean = true;

  // Single
  if (str.length === 1) {
    return 1;
  }

  while (revcheck) {
    console.log("ans value: " + ans);
    console.log("string pos: " + str[revctr]);
    if (str[revctr] === " " && ans === 0) {
      revctr--;
    } else {
      ans++;
      revctr--;
    }

    console.log("revctr b/w: " + revctr);

    if (str[revctr] === " " && ans > 0) {
      revcheck = false;
      break;
    } else if (revctr <= 0) {
      ans++;
      revcheck = false;
      break;
    }
  }

  return ans;
}
