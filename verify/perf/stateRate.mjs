// ステート付与率の計算。規約は performance.md [MEAS] / [HOTL]。
//
//   node verify/perf/stateRate.mjs <案> <ステートの数>
//
// 対象: src/rmmzFunctional/action/itemEffcect/effectRate.ts
//
// actionCalcAttackStateRate は重いメンバを 4 回読む。
//   target.stateRate(id)         -> traitsPi   -> allTraits()
//   subject.attackStatesRate(id) -> traitsSum  -> allTraits()
//   subject.luk / target.luk     -> param()    -> allTraits()
// 効果 (ステート) ごとに呼ぶと、その数だけ全部が繰り返される。

const TRAIT_STATE_RATE = 13;
const TRAIT_ATTACK_STATE = 32;
const TRAIT_PARAM = 21;

const makeTraits = (seed, count) => {
  const traits = [];
  for (let i = 0; i < count; i++) {
    traits.push({
      code: [TRAIT_STATE_RATE, TRAIT_ATTACK_STATE, TRAIT_PARAM, 11][(i + seed) % 4],
      dataId: (i + seed) % 4,
      value: 1 + i / 10,
    });
  }
  return traits;
};

const makeBattler = (seed, objectCount) => {
  const objects = [];
  for (let i = 0; i < objectCount; i++) objects.push({ traits: makeTraits(seed + i, 4) });
  const all = () => objects.reduce((r, obj) => r.concat(obj.traits), []);
  return {
    allTraits: all,
    stateRate: (id) =>
      all().filter((t) => t.code === TRAIT_STATE_RATE && t.dataId === id)
        .reduce((r, t) => r * t.value, 1),
    attackStatesRate: (id) =>
      all().filter((t) => t.code === TRAIT_ATTACK_STATE && t.dataId === id)
        .reduce((r, t) => r + t.value, 0),
    get luk() {
      return 10 * all().filter((t) => t.code === TRAIT_PARAM && t.dataId === 7)
        .reduce((r, t) => r * t.value, 1);
    },
  };
};

const traitPi = (traits, code, id) =>
  traits.reduce((r, t) => (t.code === code && t.dataId === id ? r * t.value : r), 1);
const traitSum = (traits, code, id) =>
  traits.reduce((r, t) => (t.code === code && t.dataId === id ? r + t.value : r), 0);

const impls = {
  // 現行: 効果ごとに バトラー のメンバを読む
  current: (subject, target, effects) =>
    effects.map((effect) => {
      const luk = Math.max(1.0 + (subject.luk - target.luk) * 0.001, 0.0);
      return (
        effect.value1 *
        target.stateRate(effect.dataId) *
        subject.attackStatesRate(effect.dataId) *
        luk
      );
    }),

  // 展開: allTraits と luk を 1 回だけ読み、あとは純粋関数
  expanded: (subject, target, effects) => {
    const subjectTraits = subject.allTraits();
    const targetTraits = target.allTraits();
    const lukRate = Math.max(1.0 + (subject.luk - target.luk) * 0.001, 0.0);
    return effects.map(
      (effect) =>
        effect.value1 *
        traitPi(targetTraits, TRAIT_STATE_RATE, effect.dataId) *
        traitSum(subjectTraits, TRAIT_ATTACK_STATE, effect.dataId) *
        lukRate,
    );
  },
};

const COUNTS = { one: 1, few: 3, many: 6 };
const OBJECTS = 8;
const N = 100_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "few"] = process.argv;
const fn = impls[variant];
if (!fn || !COUNTS[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`ステートの数: ${Object.keys(COUNTS).join(" / ")}`);
  process.exit(1);
}
const effects = [];
for (let i = 0; i < COUNTS[mode]; i++) effects.push({ dataId: i % 4, value1: 0.8 });
const pairs = [];
for (let i = 0; i < 64; i++) pairs.push([makeBattler(i, OBJECTS), makeBattler(i + 5, OBJECTS)]);

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const [subject, target] = pairs[i & 63];
    sink += fn(subject, target, effects).length;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `ステート${String(COUNTS[mode]).padEnd(2)} ${variant.padEnd(9)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
