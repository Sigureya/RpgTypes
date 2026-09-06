// tgr の読み出し回数の比較。規約は performance.md [MEAS]。
//
//   node verify/perf/tgrRead.mjs <案> <tgrの重さ>
//
// 対象: src/rmmzFunctional/action/target/randomSelect.ts (battlersRandomTarget)
//
// tgr は単なるプロパティではない。コアスクリプトでは
//   tgr -> sparam(0) -> traitsPi -> traitsWithId -> allTraits().filter()
//   allTraits() = traitObjects().reduce((r, obj) => r.concat(obj.traits), [])
// であり、1 回読むだけで配列を複数作る。
// 前回の計測は tgr を素のプロパティにしていたため、読み出し回数の差が消えていた。

const makeTraits = (seed, count) => {
  const traits = [];
  for (let i = 0; i < count; i++) {
    traits.push({ code: [11, 21, 22, 31][(i + seed) % 4], dataId: (i + seed) % 4, value: 1 + i / 10 });
  }
  return traits;
};

/** コアスクリプトと同じ形で tgr を計算する getter を持つバトラー */
const makeBattler = (seed, objectCount) => {
  const objects = [];
  for (let i = 0; i < objectCount; i++) {
    objects.push({ traits: makeTraits(seed + i, 4) });
  }
  return {
    seed,
    // Game_BattlerBase.prototype.allTraits / traitsPi と同じ
    get tgr() {
      const all = objects.reduce((r, obj) => r.concat(obj.traits), []);
      return all
        .filter((trait) => trait.code === 22 && trait.dataId === 0)
        .reduce((r, trait) => r * trait.value, 1);
    },
  };
};

const impls = {
  // 現行 (2026-09-06 に入れたもの)。合計で 1 回、選択の走査で最大 1 回読む
  "rnd-direct": (battlers, randomFn, repeat) => {
    if (battlers.length === 0) return [];
    const result = [];
    if (battlers.length === 1) {
      for (let i = 0; i < repeat; i++) result.push(battlers[0]);
      return result;
    }
    const sum = battlers.reduce((acc, b) => acc + b.tgr, 0);
    for (let i = 0; i < repeat; i++) {
      let remaining = randomFn() * sum;
      let picked = battlers[battlers.length - 1];
      for (const battler of battlers) {
        remaining -= battler.tgr;
        if (remaining <= 0) {
          picked = battler;
          break;
        }
      }
      result.push(picked);
    }
    return result;
  },

  // 元の実装。{battler, tgr} の組に控える。読み出しは 1 人 1 回
  "rnd-pairs": (battlers, randomFn, repeat) => {
    if (battlers.length === 0) return [];
    if (battlers.length === 1) return Array(repeat).fill(battlers[0]);
    const pairs = battlers.map((battler) => ({ tgr: battler.tgr, battler }));
    const sum = pairs.reduce((acc, pair) => acc + pair.tgr, 0);
    const result = [];
    for (let i = 0; i < repeat; i++) {
      let remaining = randomFn() * sum;
      let picked = pairs[pairs.length - 1].battler;
      for (const pair of pairs) {
        remaining -= pair.tgr;
        if (remaining <= 0) {
          picked = pair.battler;
          break;
        }
      }
      result.push(picked);
    }
    return result;
  },

  // 数値の配列に控える。読み出しは 1 人 1 回、作る配列は 1 本
  "rnd-tgrs": (battlers, randomFn, repeat) => {
    if (battlers.length === 0) return [];
    const result = [];
    if (battlers.length === 1) {
      for (let i = 0; i < repeat; i++) result.push(battlers[0]);
      return result;
    }
    const tgrs = battlers.map((battler) => battler.tgr);
    const sum = tgrs.reduce((acc, tgr) => acc + tgr, 0);
    for (let i = 0; i < repeat; i++) {
      let remaining = randomFn() * sum;
      let picked = battlers[battlers.length - 1];
      for (let k = 0; k < tgrs.length; k++) {
        remaining -= tgrs[k];
        if (remaining <= 0) {
          picked = battlers[k];
          break;
        }
      }
      result.push(picked);
    }
    return result;
  },
  // 採用候補: 外側だけ fill().map()、選択は早期に抜ける for のまま
  "rnd-mixed": (battlers, randomFn, repeat) => {
    if (battlers.length === 0) return [];
    if (battlers.length === 1) return new Array(repeat).fill(battlers[0]);
    const tgrList = battlers.map((b) => b.tgr);
    const tgrSum = tgrList.reduce((acc, tgr) => acc + tgr, 0);
    return new Array(repeat).fill(null).map(() => {
      let rest = randomFn() * tgrSum;
      for (let i = 0; i < tgrList.length; i++) {
        rest -= tgrList[i];
        if (rest <= 0) return battlers[i];
      }
      return battlers[battlers.length - 1];
    });
  },

  // 採用候補: tgr を控えたうえで、選択を reduce + 状態 1 個にする
  "rnd-reduce": (battlers, randomFn, repeat) => {
    if (battlers.length === 0) return [];
    if (battlers.length === 1) {
      return new Array(repeat).fill(battlers[0]);
    }
    const tgrList = battlers.map((b) => b.tgr);
    const tgrSum = tgrList.reduce((acc, tgr) => acc + tgr, 0);
    return new Array(repeat).fill(null).map(() => {
      const state = battlers.reduce(
        (acc, battler, index) => {
          if (acc.selected === null) {
            acc.rest -= tgrList[index];
            if (acc.rest <= 0) acc.selected = battler;
          }
          return acc;
        },
        { rest: randomFn() * tgrSum, selected: null },
      );
      return state.selected ?? battlers[battlers.length - 1];
    });
  },
};

// plain = 素のプロパティ（前回の計測条件）/ enemy = 特徴を持つ物 2 個 / actor = 8 個
const MODES = { plain: 0, enemy: 2, actor: 8 };
const SIZE = 8;

const N = 200_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "actor", repeatArg] = process.argv;
const fn = impls[variant];
if (!fn || MODES[mode] === undefined) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`tgr の重さ: ${Object.keys(MODES).join(" / ")}`);
  process.exit(1);
}
const repeat = Number(repeatArg ?? 1);
const objectCount = MODES[mode];
const inputs = [];
for (let i = 0; i < 64; i++) {
  const unit = [];
  for (let k = 0; k < SIZE; k++) {
    unit.push(objectCount === 0 ? { tgr: 1 + (k % 4) / 2 } : makeBattler(i + k, objectCount));
  }
  inputs.push(unit);
}

const randoms = [];
for (let i = 0; i < 64; i++) randoms.push(((i * 37) % 64) / 64);
let cursor = 0;
const randomFn = () => randoms[cursor++ & 63];

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += fn(inputs[i & 63], randomFn, repeat).length;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};

for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `${mode.padEnd(6)} repeat=${repeat} ${variant.padEnd(11)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
