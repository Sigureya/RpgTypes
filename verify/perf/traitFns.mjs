// trait/ の関数群。規約は performance.md [MEAS]。
//
//   node verify/perf/traitFns.mjs <案> <特徴の数>
//
// 対象: src/rmmz/rpg/data/main/traitContainers/trait/
//
// 論点は 2 つ。
//   1. 同じ配列を何度も走ること (sparam は 10 個ある。それぞれが 1 回走る)
//   2. filter().map() が残っている箇所 (traitActionPlusSet)

const TRAIT_SPARAM = 23;
const TRAIT_ACTION_PLUS = 32;
const SPARAM_COUNT = 10;

const makeTraits = (seed, count) => {
  const traits = [];
  for (let i = 0; i < count; i++) {
    const n = (i * 7 + seed * 13) % 97;
    traits.push({
      code: [TRAIT_SPARAM, TRAIT_ACTION_PLUS, 21, 22, 11][n % 5],
      dataId: n % SPARAM_COUNT,
      value: 1 + (n % 5) / 10,
    });
  }
  return traits;
};

const traitPi = (traits, code, id) =>
  traits.reduce((r, t) => (t.code === code && t.dataId === id ? r * t.value : r), 1);

const impls = {
  // sparam を 10 個ぶん求める。現行は 1 個ずつ traitPi を呼ぶ = 10 回走る
  "sparam-each": (traits) => {
    const result = [];
    for (let id = 0; id < SPARAM_COUNT; id++) {
      result.push(traitPi(traits, TRAIT_SPARAM, id));
    }
    return result;
  },

  // 1 回走って 10 個ぶんを同時に畳む
  "sparam-once": (traits) => {
    const result = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    for (const trait of traits) {
      if (trait.code === TRAIT_SPARAM) {
        result[trait.dataId] *= trait.value;
      }
    }
    return result;
  },

  // 現実には 1 個しか要らないことも多い。その場合の比較用
  "sparam-one": (traits) => [traitPi(traits, TRAIT_SPARAM, 0)],

  // traitActionPlusSet: filter().map()（現行）
  "plus-filtermap": (traits) =>
    traits.filter((t) => t.code === TRAIT_ACTION_PLUS).map((t) => t.value),

  // 単一走査
  "plus-reduce": (traits) =>
    traits.reduce((acc, t) => {
      if (t.code === TRAIT_ACTION_PLUS) {
        acc.push(t.value);
      }
      return acc;
    }, []),
};

const LENGTHS = { short: 6, mid: 24, long: 64 };
const N = 1_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "mid"] = process.argv;
const fn = impls[variant];
if (!fn || !LENGTHS[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`特徴の数: ${Object.keys(LENGTHS).join(" / ")}`);
  process.exit(1);
}
const inputs = [];
for (let i = 0; i < 64; i++) inputs.push(makeTraits(i, LENGTHS[mode]));

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const r = fn(inputs[i & 63]);
    sink += r.length + r[0];
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `特徴${String(LENGTHS[mode]).padEnd(2)} ${variant.padEnd(14)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
