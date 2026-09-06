// エンカウント抽選。規約は performance.md [MEAS]。
//
//   node verify/perf/encounter.mjs <案> <候補の数>
//
// 対象: src/rmmz/rpg/event/map/encounter/encounter.ts (selectEncounters)
//
// 現行は filter で配列を作り、reduce で合計し、もう一度走って選ぶ (3 走査 + 配列 1 本)。
// コアスクリプト (Game_Player.makeEncounterTroopId) は
// 「配列に push しながら合計する」1 走査 + 選択の 1 走査。

const impls = {
  // 現行
  "filter-reduce": (list, isValid, randomFn) => {
    const valid = list.filter(isValid);
    if (valid.length === 0) return null;
    const total = valid.reduce((acc, e) => acc + e.weight, 0);
    if (total <= 0) return null;
    return selectByWeight(randomFn(total), valid);
  },

  // コアと同じ形。配列を作りながら合計する
  "push-sum": (list, isValid, randomFn) => {
    const valid = [];
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      if (isValid(list[i], i, list)) {
        valid.push(list[i]);
        total += list[i].weight;
      }
    }
    if (total <= 0) return null;
    return selectByWeight(randomFn(total), valid);
  },

  // reduce + 状態オブジェクト 1 個。判定は 1 回、作るオブジェクトは list と state の 2 つ
  "reduce-state": (list, isValid, randomFn) => {
    const state = list.reduce(
      (acc, encounter, index) => {
        if (isValid(encounter, index, list)) {
          acc.list.push(encounter);
          acc.total += encounter.weight;
        }
        return acc;
      },
      { list: [], total: 0 },
    );
    if (state.total <= 0) return null;
    return selectByWeight(randomFn(state.total), state.list);
  },

  // 同上だが、畳み込み関数を curry で作る (実装がこの形)
  "reduce-curried": (list, isValid, randomFn) => {
    const state = list.reduce(pickValid(isValid), { list: [], total: 0 });
    if (state.total <= 0) return null;
    return selectByWeight(randomFn(state.total), state.list);
  },

  // 同上だが、状態を毎回作り直す (比較用。要素ごとにオブジェクトが増える)
  "reduce-spread": (list, isValid, randomFn) => {
    const state = list.reduce(
      (acc, encounter, index) =>
        isValid(encounter, index, list)
          ? { list: [...acc.list, encounter], total: acc.total + encounter.weight }
          : acc,
      { list: [], total: 0 },
    );
    if (state.total <= 0) return null;
    return selectByWeight(randomFn(state.total), state.list);
  },

  // 配列を作らない。判定を 2 回行う
  "no-array": (list, isValid, randomFn) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      if (isValid(list[i], i, list)) {
        total += list[i].weight;
      }
    }
    if (total <= 0) return null;
    let weight = randomFn(total);
    for (let i = 0; i < list.length; i++) {
      if (isValid(list[i], i, list)) {
        weight -= list[i].weight;
        if (weight < 0) return list[i];
      }
    }
    return null;
  },

  // 合計だけ reduce、選択で判定し直す (配列なし・高階関数)
  "reduce-nofilter": (list, isValid, randomFn) => {
    const total = list.reduce(
      (acc, e, i) => (isValid(e, i, list) ? acc + e.weight : acc),
      0,
    );
    if (total <= 0) return null;
    let weight = randomFn(total);
    for (let i = 0; i < list.length; i++) {
      if (isValid(list[i], i, list)) {
        weight -= list[i].weight;
        if (weight < 0) return list[i];
      }
    }
    return null;
  },
};

const pickValid = (isValid) => (acc, encounter, index, list) => {
  if (isValid(encounter, index, list)) {
    acc.list.push(encounter);
    acc.total += encounter.weight;
  }
  return acc;
};

const selectByWeight = (w, list) => {
  let weight = w;
  for (const encounter of list) {
    weight -= encounter.weight;
    if (weight < 0) return encounter;
  }
  return null;
};

// 判定はコアの meetsEncounterConditions 相当 (regionSet が空か、現在の地域を含む)
// 配列を作らない案は判定を 2 回呼ぶので、判定が重い場合も確かめる。
const makeIsValid = (regionId, weight = 0) => (encounter) => {
  for (let i = 0; i < weight; i++) {
    // 判定が重い場合の模擬。スイッチや変数を辿るような処理を想定
    if (encounter.regionSet.indexOf(-1 - i) >= 0) return false;
  }
  return encounter.regionSet.length === 0 || encounter.regionSet.includes(regionId);
};

const makeList = (size, seed) => {
  const list = [];
  for (let i = 0; i < size; i++) {
    const n = (i * 5 + seed * 7) % 11;
    list.push({
      troopId: i + 1,
      weight: 1 + (n % 5),
      // 半分は地域指定あり。そのうち一部だけが現在地域に該当する
      regionSet: n % 2 === 0 ? [] : [n % 4],
    });
  }
  return list;
};

const SIZES = { few: 4, normal: 10, many: 30 };
const N = 1_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "normal"] = process.argv;
const fn = impls[variant];
if (!fn || !SIZES[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`候補の数: ${Object.keys(SIZES).join(" / ")}`);
  process.exit(1);
}
const isValid = makeIsValid(1, Number(process.argv[4] ?? 0));
const inputs = [];
for (let i = 0; i < 64; i++) inputs.push(makeList(SIZES[mode], i));
const randoms = [];
for (let i = 0; i < 64; i++) randoms.push(((i * 37) % 64) / 64);
let cursor = 0;
const randomFn = (max) => Math.floor(randoms[cursor++ & 63] * max);

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const r = fn(inputs[i & 63], isValid, randomFn);
    sink += r === null ? 0 : r.troopId;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `候補${String(SIZES[mode]).padEnd(2)} 判定${String(process.argv[4] ?? 0).padEnd(2)} ${variant.padEnd(15)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
