// 対象選択の残り。規約は .claude/skills/rmmz-plugin/core/common/performance.md [MEAS]。
//
//   node verify/perf/targetSelect.mjs <案> <人数>
//
// 対象: makeTargets.ts (actionTargetsEveryone) / support.ts (smoothTarget)
// actionTargetsEveryone には「最適化のためにforループ」というコメントがある。
// それが正しいかを確かめる。

const isAlive = (battler) => battler.isAlive();

const impls = {
  // --- 全員を集める（現行: for ループ + push） ---
  "all-for": (provider) => {
    const result = [];
    for (const battler of provider.friendsUnit()) {
      if (isAlive(battler)) {
        result.push(battler);
      }
    }
    for (const battler of provider.opponentsUnit()) {
      if (isAlive(battler)) {
        result.push(battler);
      }
    }
    return result;
  },

  "all-spread": (provider) => [
    ...provider.friendsUnit().filter(isAlive),
    ...provider.opponentsUnit().filter(isAlive),
  ],

  "all-concat": (provider) =>
    provider.friendsUnit().filter(isAlive).concat(provider.opponentsUnit().filter(isAlive)),

  "all-reduce": (provider) => {
    const push = (acc, battler) => {
      if (isAlive(battler)) {
        acc.push(battler);
      }
      return acc;
    };
    return provider.opponentsUnit().reduce(push, provider.friendsUnit().reduce(push, []));
  },

  // --- smoothTarget: 指定添字を優先し、駄目なら別の該当者 ---
  "smooth-find": (provider, index) => {
    const battlers = provider.friendsUnit();
    if (battlers.length === 0) return undefined;
    const finalIndex = Math.max(0, index);
    const target = battlers[finalIndex];
    if (target && isAlive(target)) {
      return target;
    }
    return battlers.find((b, i) => i !== index && isAlive(b)) ?? undefined;
  },

  "smooth-for": (provider, index) => {
    const battlers = provider.friendsUnit();
    if (battlers.length === 0) return undefined;
    const finalIndex = Math.max(0, index);
    const target = battlers[finalIndex];
    if (target && isAlive(target)) {
      return target;
    }
    for (let i = 0; i < battlers.length; i++) {
      if (i !== index && isAlive(battlers[i])) {
        return battlers[i];
      }
    }
    return undefined;
  },
};

const makeUnit = (size, seed, deadEvery) => {
  const unit = [];
  for (let i = 0; i < size; i++) {
    const n = (i * 5 + seed * 11) % 23;
    const alive = n % deadEvery !== 0;
    unit.push({ tgr: 1, isAlive: () => alive });
  }
  return unit;
};

// 生存率: alive = ほぼ全員生存 / mixed = 3 人に 1 人死亡
const MODES = {
  alive: { size: 4, deadEvery: 97, index: 0 },
  mixed: { size: 8, deadEvery: 3, index: 0 },
  miss: { size: 8, deadEvery: 3, index: 3 },
};

const N = 2_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "alive"] = process.argv;
const fn = impls[variant];
if (!fn || !MODES[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`入力: ${Object.keys(MODES).join(" / ")}`);
  process.exit(1);
}
const { size, deadEvery, index } = MODES[mode];
const inputs = [];
for (let i = 0; i < 64; i++) {
  const friends = makeUnit(size, i, deadEvery);
  const opponents = makeUnit(size, i + 3, deadEvery);
  inputs.push({ friendsUnit: () => friends, opponentsUnit: () => opponents });
}

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const r = fn(inputs[i & 63], index);
    sink += r === undefined ? 0 : r.length ?? 1;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};

for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `${mode.padEnd(6)} ${variant.padEnd(12)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(1)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
