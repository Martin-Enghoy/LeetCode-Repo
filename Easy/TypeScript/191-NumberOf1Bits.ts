function hammingWeight(n: number): number {
  let ctr: number = 1;
  let prev: number = 0;
  let acc: number = n;
  let ans: number = 0;

  if (n === 1) {
    return 1;
  }

  while (acc > 0) {
    if (ctr > acc) {
      acc = acc - prev;
      console.log("ACC: " + acc);
      ctr = 1;
      ans++;
    }
    prev = ctr;
    ctr = ctr * 2;
  }

  return ans;
}
