//股票问题

const maxProfit = (prices) => {
  let dp = new Array(prices.length).fill([0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = Math.max(0, -prices[0]);
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[prices.length - 1][1];
};

const maxProfit1 = (prices) => {
  let dp = new Array(prices.length).fill([0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = Math.max(0, -prices[0]);
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[prices.length - 1][1];
};

//限制两次
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let dp = new Array(prices.length).fill([0, 0, 0, 0]);
  dp[0][0] = -prices[0];
  dp[0][2] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]); //不买和之前一样  买了：-价格
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]); //不卖和之前一样  卖了：之前的加个+价钱
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]); //不买和之前一样  买了第一次的加个-目前的价钱
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]); //不卖和之前一样  卖了买入的价钱+当前的价钱
  }
  return dp[prices.length - 1][3];
};

//限制k次
var maxProfit3 = function (k, prices) {
  if (prices == null || prices.length < 2 || k == 0) {
    return 0;
  }
  let a = 2 * k + 1;
  let dp = new Array(prices.length).fill(new Array(a).fill(0));
  for (let i = 1; i < 2 * k; i += 2) {
    dp[0][i] = -prices[0];
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < 2 * k + 1; j += 2) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]); //不买入 买入
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] + prices[i]); //不卖出 卖出
    }
  }
  return dp;
};

console.log(maxProfit3(2, [1, 2, 3, 4, 5]));

//有一天的冷冻期
var maxProfit4 = function (prices) {
  if (prices.length < 2) {
    return 0;
  } else if (prices.length < 3) {
    return Math.max(0, prices[1] - prices[0]);
  }

  let dp = Array.from(Array(prices.length), () => Array(4).fill(0));
  dp[0][0] = 0 - prices[0];

  for (i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0],
      Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]
    ); //之前买入 冷冻期/卖出买入
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]); //持续保持卖出状态
    dp[i][2] = dp[i - 1][0] + prices[i]; //这一天卖出
    dp[i][3] = dp[i - 1][2]; //一直是冷冻期
  }

  return Math.max(
    dp[prices.length - 1][1],
    dp[prices.length - 1][2],
    dp[prices.length - 1][3]
  );
};

//无限次 手续费
const maxProfit5 = (prices, fee) => {
  let dp = new Array(prices.length).fill([0, 0]);
  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }
  return dp[prices.length - 1][1];
};
