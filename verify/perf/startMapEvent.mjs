// イベント起動判定の順序。規約は performance.md [MEAS]。
//
//   node verify/perf/startMapEvent.mjs <案> <イベント数>
//
// 対象: src/rmmzFunctional/map/event.ts (startMapEvent)
//
// プレイヤーが動くたび (触れた / 決定キー) に、マップの全イベントを走る。
// 3 つの判定はコストも選択性も違う。
//   pos              … 2 つの比較。ほとんどのイベントが外れる
//   isNormalPriority … 1 つの比較。半分くらい外れる
//   isTriggerIn      … 配列の includes。最も重い

const impls = {
  // 現行: 優先度 → 位置 → トリガー
  current: (events, x, y, triggers, normalPriority) => {
    let started = 0;
    for (const event of events) {
      if (event.isNormalPriority() !== normalPriority) continue;
      if (!event.pos(x, y)) continue;
      if (!event.isTriggerIn(triggers)) continue;
      started++;
    }
    return started;
  },

  // 位置を先に見る
  posFirst: (events, x, y, triggers, normalPriority) => {
    let started = 0;
    for (const event of events) {
      if (!event.pos(x, y)) continue;
      if (event.isNormalPriority() !== normalPriority) continue;
      if (!event.isTriggerIn(triggers)) continue;
      started++;
    }
    return started;
  },

  // 現行の順序のまま forEach にする (順序の効果と構文の効果を分ける)
  currentForEach: (events, x, y, triggers, normalPriority) => {
    let started = 0;
    events.forEach((event) => {
      if (event.isNormalPriority() !== normalPriority) return;
      if (!event.pos(x, y)) return;
      if (!event.isTriggerIn(triggers)) return;
      started++;
    });
    return started;
  },

  // 位置優先 + 添字ループ (for...of の反復子を使わない)
  posFirstIndexed: (events, x, y, triggers, normalPriority) => {
    let started = 0;
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      if (!event.pos(x, y)) continue;
      if (event.isNormalPriority() !== normalPriority) continue;
      if (!event.isTriggerIn(triggers)) continue;
      started++;
    }
    return started;
  },

  // 位置優先 + forEach
  posFirstForEach: (events, x, y, triggers, normalPriority) => {
    let started = 0;
    events.forEach((event) => {
      if (!event.pos(x, y)) return;
      if (event.isNormalPriority() !== normalPriority) return;
      if (!event.isTriggerIn(triggers)) return;
      started++;
    });
    return started;
  },

  // コアと同じ形。座標で配列を作ってから、トリガー → 優先度
  coreLike: (events, x, y, triggers, normalPriority) => {
    let started = 0;
    const atPoint = events.filter((event) => event.pos(x, y));
    for (const event of atPoint) {
      if (event.isTriggerIn(triggers) && event.isNormalPriority() === normalPriority) {
        started++;
      }
    }
    return started;
  },
};

const makeEvents = (count, size) => {
  const events = [];
  for (let i = 0; i < count; i++) {
    const ex = (i * 3) % size;
    const ey = (i * 5) % size;
    const priority = i % 2 === 0 ? 1 : 0;
    const trigger = i % 4;
    events.push({
      pos: (x, y) => ex === x && ey === y,
      isNormalPriority: () => priority === 1,
      isTriggerIn: (triggers) => triggers.includes(trigger),
    });
  }
  return events;
};

const COUNTS = { few: 8, normal: 30, many: 100 };
const SIZE = 20;
const TRIGGERS = [0, 1, 2];
const N = 1_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "normal"] = process.argv;
const fn = impls[variant];
if (!fn || !COUNTS[mode]) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`イベント数: ${Object.keys(COUNTS).join(" / ")}`);
  process.exit(1);
}
const events = makeEvents(COUNTS[mode], SIZE);

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += fn(events, i % SIZE, (i >> 2) % SIZE, TRIGGERS, true);
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `イベント${String(COUNTS[mode]).padEnd(3)} ${variant.padEnd(8)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
