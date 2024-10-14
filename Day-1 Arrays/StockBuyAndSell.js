/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let maxProfit = 0;
  let lsf = Number.MAX_SAFE_INTEGER;
  let pst = 0;
  for (let i = 0; i < n; i++) {
    if (lsf > prices[i]) lsf = prices[i];
    pst = prices[i] - lsf;
    if (pst > maxProfit) maxProfit = pst;
  }
  return maxProfit;
};
