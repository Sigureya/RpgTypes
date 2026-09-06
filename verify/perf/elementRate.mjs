// 属性有効度の計算。規約は performance.md [MEAS] / [GETR]。
//
//   node verify/perf/elementRate.mjs <案> <属性の数>
//
// 対象: src/rmmzFunctional/action/damage/rate.ts
//
// target.elementRate(id) は traitsPi -> traitsWithId -> allTraits() を辿る。
// 属性ごとに呼ぶと allTraits() を属性の数だけ作り直すことになる。

const TRAIT_ELEMENT_RATE = 11;

const makeTraits = (seed, count) => {
  const traits = [];
  for (let i = 0; i < count; i++) {
    traits.push({
      code: [TRAIT_ELEMENT_RATE, 21, 22, 31][(i + seed) % 4],
      dataId: (i + seed) % 4,
      value: 1 + i / 10,
    });
  }
  return traits;
};

/** コアスクリプトと同じ経路を持つバトラー */
const makeBattler = (seed, objectCount) => {
  const objects = [];
  for (let i = 0; i < objectCount; i++) {
    objects.push({ traits: makeTraits(seed + i, 4) });
  }
  return {
    allTraits() {
      return objects.reduce((r, obj) => r.concat(obj.traits), []);
    },
    elementRate(elementId) {
      return this.allTraits()
        .filter((t) => t.code === TRAIT_ELEMENT_RATE && t.dataId === elementId)
        .reduce((r, t) => r * t.value, 1);
    },
  };
};

// 純粋側の関数 (traitElementRate 相当)
const traitElementRate = (traits, elementId) =>
  traits.reduce((product, trait) => {
    if (trait.code === TRAIT_ELEMENT_RATE && trait.dataId === elementId) {
      return product * trait.value;
    }
    return product;
  }, 1);

const impls = {
  // 現行。属性ごとに elementRate を呼ぶ = allTraits() を属性の数だけ作る
  "elem-current": (target, elements) => {
    if (elements.length === 0) return 1.0;
    return elements.reduce((acc, elementId) => {
      const rate = target.elementRate(elementId);
      return Math.max(acc, rate);
    }, Number.MIN_VALUE);
  },

  // allTraits() を 1 回だけ作り、純粋関数で畳む
  "elem-traits": (target, elements) => {
    if (elements.length === 0) return 1.0;
    const traits = target.allTraits();
    return elements.reduce((acc, elementId) => {
      return Math.max(acc, traitElementRate(traits, elementId));
    }, Number.MIN_VALUE);
  },

  // 呼び出し元込み: actionCalcElementRate の経路 (攻撃属性の取得 + 最大値)
  "call-current": (target, elements) => {
    const traits = target.allTraits(); // traitAttackElements のぶん
    const ids = traits.filter((t) => t.code === 31).map((t) => t.dataId);
    const list = ids.length > 0 ? ids : elements;
    return list.reduce(
      (acc, id) => Math.max(acc, target.elementRate(id)),
      Number.MIN_VALUE,
    );
  },

  "call-traits": (target, elements) => {
    const traits = target.allTraits(); // 1 回だけ
    const ids = traits.reduce((acc, t) => {
      if (t.code === 31) acc.push(t.dataId);
      return acc;
    }, []);
    const list = ids.length > 0 ? ids : elements;
    return list.reduce(
      (acc, id) => Math.max(acc, traitElementRate(traits, id)),
      Number.MIN_VALUE,
    );
  },
};

const COUNTS = { one: 1, few: 3, many: 6 };
const OBJECTS = 8;

const N = 200_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "few"] = process.argv;
const fn = impls[variant];
if (!fn || !COUNTS[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`属性の数: ${Object.keys(COUNTS).join(" / ")}`);
  process.exit(1);
}
const elements = [];
for (let i = 0; i < COUNTS[mode]; i++) elements.push(i % 4);
const targets = [];
for (let i = 0; i < 64; i++) targets.push(makeBattler(i, OBJECTS));

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += fn(targets[i & 63], elements);
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};

for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `属性${String(COUNTS[mode]).padEnd(2)} ${variant.padEnd(13)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
