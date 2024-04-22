function mySqrt(x: number): number {
  let inc: number = 2;
  let ans: number = inc;
  let final: boolean = false;

  // Edge case: x = 0,
  if (x === 0) {
    return 0;
  }

  // Edge case: x = 1, x = 2, x = 3
  if (x < 4) {
    return 1;
  }

  while (final === false) {
    let sqr = inc * inc;
    if (sqr === x) {
      ans = inc;
      final = true;
    } else if (sqr > x) {
      ans = inc - 1;
      final = true;
    } else if (sqr < x) {
      inc++;
    }
  }

  return ans;
}
