import test from "ava";
import indicators from ".";

test("roi", (t) => {
  t.is(indicators.roi({ balance: 12760, bankroll: 10000 }), "27.60%");
});

test("yield", (t) => {
  t.is(
    indicators.yield({
      balance: 12760,
      bankroll: 10000,
      losses: new Array(170).fill(100),
      wins: new Array(195).fill(100),
    }),
    "7.56%"
  );
});

test("profitability", (t) => {
  t.is(
    indicators.profitability({
      balance: 12760,
      bankroll: 10000,
      losses: new Array(170).fill(100),
    }),
    "16.24%"
  );
});

test("hitRate", (t) => {
  t.is(
    indicators.hitRate({
      losses: new Array(170).fill(100),
      wins: new Array(195).fill(100),
    }),
    "53.42%"
  );
});

test("profit", (t) => {
  t.is(indicators.profit({ balance: 12760, bankroll: 10000 }), 2760);
});

test("all", (t) => {
  t.deepEqual(
    indicators.all({
      balance: 12760,
      bankroll: 10000,
      losses: new Array(170).fill(100),
      wins: new Array(195).fill(100),
    }),
    {
      roi: "27.60%",
      yield: "7.56%",
      profitability: "16.24%",
      hitRate: "53.42%",
      profit: 2760,
    }
  );
});

test("wrong params", (t) => {
  t.deepEqual(indicators.all(), {
    hitRate: "0%",
    profit: 0,
    profitability: "0%",
    roi: "0%",
    yield: "0%",
  });
  t.is(indicators.roi(), "0%");
  t.is(indicators.yield(), "0%");
  t.is(indicators.profitability(), "0%");
  t.is(indicators.hitRate(), "0%");
  t.is(indicators.profit(), 0);
});
