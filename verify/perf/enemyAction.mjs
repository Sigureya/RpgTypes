// 敵の行動選択。規約は performance.md [MEAS]。
//
//   node verify/perf/enemyAction.mjs <案> <行動の数>
//
// 対象: src/rmmzFunctional/enemy/action/select.ts
//
// 論点は 2 つ。
//   1. selectEnemyActionByWeight の reduce が要素ごとに状態を作り直している
//   2. selectEnemyActions が行動回数のたびに重みの合計を計算し直している

const weightOf = (action, ratingZero) => Math.max(0, action.rating - ratingZero);

const weightTotal = (actions, ratingZero) =>
  actions.reduce((acc, action) => acc + weightOf(action, ratingZero), 0);

const impls = {
  // 現行。状態を要素ごとに作り直し、選択後も走査を続ける
  "pick-spread": (actions, ratingZero, random) => {
    const total = weightTotal(actions, ratingZero);
    if (total <= 0) return null;
    const value = random(total);
    const result = actions.reduce(
      (state, action) => {
        if (state.selected) return state;
        const rest = state.rest - weightOf(action, ratingZero);
        if (rest < 0) return { rest, selected: action };
        return { rest, selected: null };
      },
      { rest: value, selected: null },
    );
    return result.selected;
  },

  // 状態オブジェクトを 1 つだけ作って書き足す
  "pick-state": (actions, ratingZero, random) => {
    const total = weightTotal(actions, ratingZero);
    if (total <= 0) return null;
    const state = actions.reduce(
      (acc, action) => {
        if (acc.selected === null) {
          acc.rest -= weightOf(action, ratingZero);
          if (acc.rest < 0) acc.selected = action;
        }
        return acc;
      },
      { rest: random(total), selected: null },
    );
    return state.selected;
  },

  // コアと同じ形。見つけた時点で抜ける
  "pick-loop": (actions, ratingZero, random) => {
    const total = weightTotal(actions, ratingZero);
    if (total <= 0) return null;
    let rest = random(total);
    for (const action of actions) {
      rest -= weightOf(action, ratingZero);
      if (rest < 0) return action;
    }
    return null;
  },

  // find で早期に抜ける (閉包の外に rest を置く)
  "pick-find": (actions, ratingZero, random) => {
    const total = weightTotal(actions, ratingZero);
    if (total <= 0) return null;
    let rest = random(total);
    return (
      actions.find((action) => {
        rest -= weightOf(action, ratingZero);
        return rest < 0;
      }) ?? null
    );
  },

  // --- 行動回数ぶん選ぶ側 ---

  // 現行。回数ごとに合計を計算し直す
  "all-current": (actions, ratingZero, random, count) =>
    Array.from({ length: Math.max(0, count) }, () =>
      impls["pick-spread"](actions, ratingZero, random),
    ),

  // 合計を 1 回だけ求める + 選択は早期に抜ける
  "all-hoisted": (actions, ratingZero, random, count) => {
    const total = weightTotal(actions, ratingZero);
    return Array.from({ length: Math.max(0, count) }, () => {
      if (total <= 0) return null;
      let rest = random(total);
      for (const action of actions) {
        rest -= weightOf(action, ratingZero);
        if (rest < 0) return action;
      }
      return null;
    });
  },
};

impls["all-push"] = (actions, ratingZero, random, count) => {
  const total = weightTotal(actions, ratingZero);
  const result = [];
  for (let i = 0; i < Math.max(0, count); i++) {
    if (total <= 0) {
      result.push(null);
      continue;
    }
    let rest = random(total);
    let picked = null;
    for (const action of actions) {
      rest -= weightOf(action, ratingZero);
      if (rest < 0) {
        picked = action;
        break;
      }
    }
    result.push(picked);
  }
  return result;
};

// 採用した形: 状態 1 個の reduce + fill().map()
impls["all-adopted"] = (actions, ratingZero, random, count) =>
  new Array(Math.max(0, count))
    .fill(null)
    .map(() => impls["pick-state"](actions, ratingZero, random));

// 切り分け用: Array(n).fill().map() で同じことをする
impls["fillmap-only"] = (actions, ratingZero, random, count) =>
  new Array(Math.max(0, count)).fill(null).map(() => actions[0]);

// 切り分け用: 選択をせず Array.from({length}, fn) だけを測る
impls["from-only"] = (actions, ratingZero, random, count) =>
  Array.from({ length: Math.max(0, count) }, () => actions[0]);

// 切り分け用: 同じことを push で
impls["push-only"] = (actions, ratingZero, random, count) => {
  const result = [];
  for (let i = 0; i < Math.max(0, count); i++) result.push(actions[0]);
  return result;
};

const makeActions = (size, seed) => {
  const actions = [];
  for (let i = 0; i < size; i++) {
    const n = (i * 3 + seed * 7) % 5;
    actions.push({
      skillId: i + 1,
      rating: 3 + n, // 3..7
      conditionType: 0,
      conditionParam1: 0,
      conditionParam2: 0,
    });
  }
  return actions;
};

const SIZES = { few: 2, normal: 5, many: 12 };
const COUNT = 2;
const N = 1_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "normal"] = process.argv;
const fn = impls[variant];
if (!fn || !SIZES[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`行動の数: ${Object.keys(SIZES).join(" / ")}`);
  process.exit(1);
}
const inputs = [];
for (let i = 0; i < 64; i++) inputs.push(makeActions(SIZES[mode], i));
const randoms = [];
for (let i = 0; i < 64; i++) randoms.push(((i * 37) % 64) / 64);
let cursor = 0;
const random = (max) => Math.floor(randoms[cursor++ & 63] * max);

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const r = fn(inputs[i & 63], 4, random, COUNT);
    sink += r === null ? 0 : Array.isArray(r) ? r.length : r.skillId;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `行動${String(SIZES[mode]).padEnd(2)} ${variant.padEnd(12)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
