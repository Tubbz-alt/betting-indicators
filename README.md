# betting-indicators

> Betting Indicators e.g. ROI, Yield, Profitability, Hit Rate

## Install

```
$ npm install @kamdz/betting-indicators
```

## Usage

```js
const indicators = require("@kamdz/betting-indicators");

indicators.yield({
  balance: 12760,
  bankroll: 10000,
  losses: new Array(170).fill(100),
  wins: new Array(195).fill(100),
});
//=> "7.56%"
```

## indicators.roi({ balance, bankroll })

### params

#### balance

Type: `number`

Your current account balance.

#### bankroll

Type: `number`

Your starting account bankroll.

### return

Type: `string`\
Default: `0%`

[ROI stands for the Return on Investment.](https://www.betshoot.com/betting-guides/the-meaning-of-roi-and-yield-in-betting/)

## indicators.yield({ balance, bankroll, wins, losses })

### params

#### balance

Type: `number`

Current account balance.

#### bankroll

Type: `number`

Starting account bankroll.

#### wins

Type: `number[]`

Array of numbers with won bet stakes.

#### losses

Type: `number[]`

Array of numbers with lost bet stakes.

### return

Type: `string`\
Default: `0%`

[Yield measures betting efficiency compared to total turnover.](https://www.betshoot.com/betting-guides/the-meaning-of-roi-and-yield-in-betting/)

## indicators.profitability({ balance, bankroll, losses })

### params

#### balance

Type: `number`

Current account balance.

#### bankroll

Type: `number`

Starting account bankroll.

#### losses

Type: `number[]`

Your starting account bankroll.

### return

Type: `string`\
Default: `0%`

[Profitability is the ability of a business to earn a profit.](https://www.betshoot.com/betting-guides/profitability-and-hit-rate/)

## indicators.hitRate({ wins, losses })

### params

#### wins

Type: `number[]`

Array of numbers with won bet stakes.

#### losses

Type: `number[]`

Array of numbers with lost bet stakes.

### return

Type: `string`\
Default: `0%`

[Hit Rate is the number of winning bets concerning all placed bets.](https://www.betshoot.com/betting-guides/profitability-and-hit-rate/)

## indicators.profit({ balance, bankroll })

### params

#### balance

Type: `number`

Your current account balance.

#### bankroll

Type: `number`

Your starting account bankroll.

### return

Type: `number`\
Default: `0`

Profit is simply difference between the current account balance and starting account bankroll.

## indicators.all({ balance, bankroll, wins, losses })

### params

#### balance

Type: `number`

Current account balance.

#### bankroll

Type: `number`

Starting account bankroll.

#### wins

Type: `number[]`

Array of numbers with won bet stakes.

#### losses

Type: `number[]`

Array of numbers with lost bet stakes.

### return

Type: `Object`\
Structure: `{ roi, yield, profitability, hitRate, profit }`

Object with all indicators.
