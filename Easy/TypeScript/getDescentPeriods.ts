// Leetcode 2110: https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/

function getDescentPeriods(prices: number[]): number {
  // Sort descending
  // const sortedPrices = prices.sort().reverse();
  let periods = prices.length;

  // console.log('sortedPrices: ', sortedPrices);

  // Return 0 edge case
  if (prices.length === 0 || prices.length === 1) {
    return periods;
  }

  // Loop
  for (let i = 0; i < prices.length-1; i++) {
    // console.log('periods: ', periods);
    // console.log('iteration: ', i);
    // console.log('prices[i] - 1: ', prices[i] - 1);
    // console.log('prices[i+1]: ', prices[i+1]);
    // console.log('\n');
    // for (let y = i+1; y < prices.length; y++) {
    //   if (prices)
    // }

    if (prices[i] - 1 === prices[i+1]) {
      periods += 1;
    }
  }

  return periods;
};
