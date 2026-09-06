// filter と reduce+push の差はどこから来るのか。
//
//   node verify/perf/filterVsReduce.mjs <案> <入力>
//
// 仮説を 3 つに分けて測る。
//   1. null が混じっていること (配列の要素種別)
//   2. 述語の中の !! による二重の判定
//   3. 残る割合 (出力配列の作られ方)

const impls = {
  // 述語が同じ形の filter / reduce
  "filter": (list, x) =>
    list.filter((item) => !!item && item.x === x),
  "reduce": (list, x) =>
    list.reduce((acc, item) => {
      if (item && item.x === x) {
        acc.push(item);
      }
      return acc;
    }, []),

  // null チェックを外した版 (null の無い入力でのみ使う)
  "filter-plain": (list, x) => list.filter((item) => item.x === x),
  "reduce-plain": (list, x) =>
    list.reduce((acc, item) => {
      if (item.x === x) {
        acc.push(item);
      }
      return acc;
    }, []),

  // 出力を作らない版。走査だけのコストを見る
  "some-only": (list, x) => (list.some((item) => !!item && item.x === x) ? 1 : 0),
  "reduce-count": (list, x) =>
    list.reduce((acc, item) => (item && item.x === x ? acc + 1 : acc), 0),
};

const SIZE = Number(process.argv[4] ?? 40);

/** withNull: 半分が null / dense: null なし / hit: 残る割合 */
const makeList = (mode) => {
  const list = [];
  for (let i = 0; i < SIZE; i++) {
    // hit=none は常に外れ、hit=every は常に当たり、few は 1/8
    const x = mode.hit === "every" ? 0 : mode.hit === "none" ? 99 : i % 8;
    const item = { x, y: i };
    list.push(mode.withNull && i % 2 === 0 ? null : item);
  }
  return list;
};

const MODES = {
  // null 混じり・該当は 1/8
  mixed: { withNull: true, hit: "few" },
  // null 無し・該当は 1/8
  dense: { withNull: false, hit: "few" },
  // null 無し・1 つも該当しない (出力は空)
  none: { withNull: false, hit: "none" },
  // null 無し・全部該当 (出力が入力と同じ長さ)
  every: { withNull: false, hit: "every" },
};

const N = 1_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "mixed"] = process.argv;
const fn = impls[variant];
if (!fn || !MODES[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`入力: ${Object.keys(MODES).join(" / ")}`);
  process.exit(1);
}
const lists = [];
for (let i = 0; i < 64; i++) lists.push(makeList(MODES[mode]));

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    const r = fn(lists[i & 63], i & 7);
    sink += typeof r === "number" ? r : r.length;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `要素${String(SIZE).padEnd(3)} ${mode.padEnd(6)} ${variant.padEnd(13)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
