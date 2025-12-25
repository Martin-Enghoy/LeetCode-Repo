// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let i = 1;
  let buyPoint = prices[0];

  while (i < prices.length) {
    maxProfit = Math.max(maxProfit, (prices[i] -  buyPoint));

    if (prices[i] < buyPoint) {
      buyPoint = prices[i];
    }

    i += 1;
  }

  return maxProfit;
}
