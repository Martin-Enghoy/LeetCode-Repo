function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let ans: boolean[] = [];
  let ctr = 0;
  let tempVal = 0;

  while (ctr < candies.length) {
    tempVal = candies[ctr] + extraCandies;

    if (tempVal >= Math.max(...candies)) {
      ans.push(true);
    } else {
      ans.push(false);
    }

    ctr++;
  }

  return ans;
}
