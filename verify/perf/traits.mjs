// トレイト畳み込みの速度比較。規約は .claude/skills/rmmz-plugin/core/common/performance.md [MEAS]。
//
//   node verify/perf/traits.mjs <案> <入力>
//   for v in pi-reduce pi-for; do node verify/perf/traits.mjs $v mid; done
//
// 1 プロセス 1 案。複数案を同時に回すとインライン判断が混ざる [PITF]。
//
// 対象: src/rmmz/rpg/data/main/traitContainers/trait/trait.ts
// 現行の実装を reduce / filter+map のまま写し、書き換え案と並べる。

const TRAIT_ELEMENT_RATE = 11;
const TRAIT_PARAM = 21;
const TRAIT_ATTACK_ELEMENT = 31;

// ------------------------------------------------------------ 案

const impls = {
  // --- traitPi: 該当するものの積 ---
  "pi-reduce": (traits, code, id) =>
    traits.reduce((product, trait) => {
      if (trait.code === code && trait.dataId === id) {
        return product * trait.value;
      }
      return product;
    }, 1),

  "pi-for": (traits, code, id) => {
    let product = 1;
    for (let i = 0; i < traits.length; i++) {
      const trait = traits[i];
      if (trait.code === code && trait.dataId === id) {
        product *= trait.value;
      }
    }
    return product;
  },

  // length を退避した for。for が不利になっていないかの確認用
  "pi-forlen": (traits, code, id) => {
    let product = 1;
    const length = traits.length;
    for (let i = 0; i < length; i++) {
      const trait = traits[i];
      if (trait.code === code && trait.dataId === id) {
        product *= trait.value;
      }
    }
    return product;
  },

  "pi-forof": (traits, code, id) => {
    let product = 1;
    for (const trait of traits) {
      if (trait.code === code && trait.dataId === id) {
        product *= trait.value;
      }
    }
    return product;
  },

  // --- traitSet: 該当するものの dataId を集める ---
  "set-filtermap": (traits, code) =>
    traits.filter((trait) => trait.code === code).map((trait) => trait.dataId),

  "set-reduce": (traits, code) =>
    traits.reduce((acc, trait) => {
      if (trait.code === code) {
        acc.push(trait.dataId);
      }
      return acc;
    }, []),

  "set-for": (traits, code) => {
    const result = [];
    for (let i = 0; i < traits.length; i++) {
      const trait = traits[i];
      if (trait.code === code) {
        result.push(trait.dataId);
      }
    }
    return result;
  },

  // --- someTraitMatched: 1 つでも該当するか ---
  "some-some": (traits, code, id) =>
    traits.some((trait) => trait.code === code && trait.dataId === id),

  "some-for": (traits, code, id) => {
    for (let i = 0; i < traits.length; i++) {
      const trait = traits[i];
      if (trait.code === code && trait.dataId === id) {
        return true;
      }
    }
    return false;
  },
};

const argsOf = {
  pi: [TRAIT_PARAM, 2],
  set: [TRAIT_ATTACK_ELEMENT, 0],
  some: [TRAIT_ELEMENT_RATE, 3],
};

// ------------------------------------------------------------ 入力

/** allTraits() の実測に近い形。装備・ステートで長さが変わる。 */
const makeTraits = (length, seed) => {
  const codes = [TRAIT_ELEMENT_RATE, TRAIT_PARAM, TRAIT_ATTACK_ELEMENT, 22, 23, 32];
  const traits = [];
  for (let i = 0; i < length; i++) {
    const n = (i * 7 + seed * 13) % 97;
    traits.push({
      code: codes[n % codes.length],
      dataId: n % 8,
      value: 1 + (n % 5) / 10,
    });
  }
  return traits;
};

const LENGTHS = { short: 6, mid: 24, long: 64 };

// ------------------------------------------------------------ 走らせる

const N = 2_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "mid"] = process.argv;
const fn = impls[variant];
if (!fn || !LENGTHS[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`入力: ${Object.keys(LENGTHS).join(" / ")}`);
  process.exit(1);
}
const [code, id] = argsOf[variant.split("-")[0]];
const inputs = [];
for (let i = 0; i < 64; i++) inputs.push(makeTraits(LENGTHS[mode], i));

const consume = (r) =>
  typeof r === "number" ? r : typeof r === "boolean" ? (r ? 1 : 0) : r.length + (r[0] ?? 0);

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += consume(fn(inputs[i & 63], code, id));
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};

for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `${mode.padEnd(6)} ${variant.padEnd(14)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(1)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
