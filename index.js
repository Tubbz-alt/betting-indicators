"use strict";

const sum = (arr) => arr.reduce((a, b) => Number(a) + Number(b), 0);
const mapper = (num) => `${isNaN(num) ? "0" : (num * 100).toFixed(2)}%`;

const calcProfit = ({ bankroll = 0, balance = 0 } = {}) => balance - bankroll;
const calcROI = ({ balance = 0, bankroll = 0 } = {}) =>
  mapper(calcProfit({ bankroll, balance }) / bankroll);
const calcYield = ({ bankroll = 0, balance = 0, wins = [], losses = [] } = {}) =>
  mapper(calcProfit({ bankroll, balance }) / (sum(wins) + sum(losses)));
const calcProfitability = ({ bankroll = 0, balance = 0, losses = [] } = {}) =>
  mapper(calcProfit({ bankroll, balance }) / sum(losses));
const calcHitRate = ({ wins = [], losses = [] } = {}) =>
  mapper(wins.length / (wins.length + losses.length));

module.exports = {
  roi: calcROI,
  yield: calcYield,
  profitability: calcProfitability,
  hitRate: calcHitRate,
  profit: calcProfit,
  all: (args) => ({
    roi: calcROI(args),
    yield: calcYield(args),
    profitability: calcProfitability(args),
    hitRate: calcHitRate(args),
    profit: calcProfit(args),
  }),
};
