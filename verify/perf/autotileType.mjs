// オートタイル種別の計算。規約は performance.md [MEAS]。
//
//   node verify/perf/autotileType.mjs <案>
//
// 対象: src/rmmz/rpg/event/map/tiles/tiles.ts (mapAutotileType)
// タイル 1 枚ごとに呼ばれうる。除算と切り捨ての形を比べる。

const AUTOTILE_BASE = 2048;
const AUTOTILE_SIZE = 48;

const impls = {
  // 現行。コアと同じ形
  floor: (tileId) =>
    tileId >= AUTOTILE_BASE
      ? Math.floor((tileId - AUTOTILE_BASE) / AUTOTILE_SIZE)
      : -1,

  // 32bit 整数へ落として切り捨てる
  bitOr: (tileId) =>
    tileId >= AUTOTILE_BASE ? ((tileId - AUTOTILE_BASE) / AUTOTILE_SIZE) | 0 : -1,

  trunc: (tileId) =>
    tileId >= AUTOTILE_BASE
      ? Math.trunc((tileId - AUTOTILE_BASE) / AUTOTILE_SIZE)
      : -1,
};

const N = 20_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant] = process.argv;
const fn = impls[variant];
if (!fn) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  process.exit(1);
}

// 通常タイルとオートタイルを混ぜる
const inputs = [];
for (let i = 0; i < 64; i++) {
  inputs.push(i % 3 === 0 ? i * 17 : AUTOTILE_BASE + i * 37);
}

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += fn(inputs[i & 63]);
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `${variant.padEnd(6)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(2)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
