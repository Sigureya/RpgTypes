// 対象選択の速度比較。規約は .claude/skills/rmmz-plugin/core/common/performance.md [MEAS]。
//
//   node verify/perf/targets.mjs <案> <人数>
//
// 対象: src/rmmzFunctional/action/target/support.ts (repeatTargets)
//       src/rmmzFunctional/action/target/randomSelect.ts (battlersRandomTarget)

const impls = {
  // --- repeatTargets: 各対象を repeat 回並べる ---
  "rep-flatmap": (battlers, repeat) =>
    battlers.flatMap((b) => Array(repeat).fill(b)),

  "rep-loop": (battlers, repeat) => {
    const result = [];
    for (const battler of battlers) {
      for (let i = 0; i < repeat; i++) {
        result.push(battler);
      }
    }
    return result;
  },

  // repeat === 1 を特別扱いする案。実戦ではほぼ 1 回
  "rep-one": (battlers, repeat) => {
    if (repeat === 1) {
      return Array.from(battlers);
    }
    const result = [];
    for (const battler of battlers) {
      for (let i = 0; i < repeat; i++) {
        result.push(battler);
      }
    }
    return result;
  },

  // 切り分け用: flatMap は使うが、密な配列リテラルを返す（repeat=1 専用）
  "rep-flatmap-lit": (battlers) => battlers.flatMap((b) => [b]),

  // 切り分け用: Array(n).fill は使うが、flatMap を使わない
  "rep-fill-loop": (battlers, repeat) => {
    const result = [];
    for (const battler of battlers) {
      const chunk = Array(repeat).fill(battler);
      for (const b of chunk) {
        result.push(b);
      }
    }
    return result;
  },

  // --- battlersRandomTarget: tgr の重みで 1 体選ぶ ---
  "rnd-pairs": (battlers, _repeat, randomFn) => {
    if (battlers.length === 0) return [];
    if (battlers.length === 1) return Array(1).fill(battlers[0]);
    const pairs = battlers.map((battler) => ({ tgr: battler.tgr, battler }));
    const sum = pairs.reduce((acc, pair) => acc + pair.tgr, 0);
    const result = [];
    for (let i = 0; i < 1; i++) {
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

  // 中間の配列もオブジェクトも作らず、元の配列を 2 回走る案
  "rnd-direct": (battlers, _repeat, randomFn) => {
    if (battlers.length === 0) return [];
    if (battlers.length === 1) return [battlers[0]];
    const sum = battlers.reduce((acc, battler) => acc + battler.tgr, 0);
    const result = [];
    for (let i = 0; i < 1; i++) {
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
};

const makeUnit = (size, seed) => {
  const unit = [];
  for (let i = 0; i < size; i++) {
    const n = (i * 5 + seed * 11) % 23;
    unit.push({ tgr: 1 + (n % 4) / 2, alive: n % 7 !== 0 });
  }
  return unit;
};

const SIZES = { party: 4, full: 8, troop: 6 };
const REPEATS = { party: 1, full: 1, troop: 3 };

const N = 2_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "party"] = process.argv;
const fn = impls[variant];
if (!fn || !SIZES[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`人数: ${Object.keys(SIZES).join(" / ")}`);
  process.exit(1);
}
const repeat = REPEATS[mode];
const inputs = [];
for (let i = 0; i < 64; i++) inputs.push(makeUnit(SIZES[mode], i));

// 乱数は固定列。Math.random を測らない
const randoms = [];
for (let i = 0; i < 64; i++) randoms.push(((i * 37) % 64) / 64);
let randomCursor = 0;
const randomFn = () => randoms[randomCursor++ & 63];

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const r = fn(inputs[i & 63], repeat, randomFn);
    sink += r.length;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};

for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `${mode.padEnd(6)} repeat=${repeat} ${variant.padEnd(12)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(1)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
