// タイルイベントの絞り込み。規約は performance.md [MEAS]。
//
//   node verify/perf/mapEventsXy.mjs <案> <イベント数>
//
// 対象: src/rmmz/rpg/event/map/event/event.ts (mapEvents / mapEventsXy)
//       src/rmmzFunctional/map/map.ts (mapTileEventTileIds)
//
// 毎フレームの通行判定から呼ばれる。1 回の判定で配列を 3 本作っている。

const impls = {
  // 現行: null 除去 → 座標で絞る → tileId を集める (配列 3 本)
  current: (map, x, y, activePage) => {
    const all = map.events.filter((event) => !!event);
    const atPoint = all.filter((event) => event.x === x && event.y === y);
    return atPoint.reduce((acc, event) => {
      const page = activePage(event);
      if (page && page.priorityType === 0 && page.image.tileId > 0) {
        acc.push(page.image.tileId);
      }
      return acc;
    }, []);
  },

  // 1 回の走査で集める (配列 1 本)
  onePass: (map, x, y, activePage) =>
    map.events.reduce((acc, event) => {
      if (!event || event.x !== x || event.y !== y) {
        return acc;
      }
      const page = activePage(event);
      if (page && page.priorityType === 0 && page.image.tileId > 0) {
        acc.push(page.image.tileId);
      }
      return acc;
    }, []),

  // 座標で絞るだけなら filter 1 回で済む (型では is を使う)
  filterOnce: (map, x, y) =>
    map.events.filter((event) => !!event && event.x === x && event.y === y),

  // 同じことを reduce で
  reduceOnce: (map, x, y) =>
    map.events.reduce((acc, event) => {
      if (event && event.x === x && event.y === y) {
        acc.push(event);
      }
      return acc;
    }, []),

  // 該当が無ければ配列も作らない
  lazyArray: (map, x, y, activePage) => {
    let result = null;
    for (const event of map.events) {
      if (!event || event.x !== x || event.y !== y) {
        continue;
      }
      const page = activePage(event);
      if (page && page.priorityType === 0 && page.image.tileId > 0) {
        if (result === null) {
          result = [];
        }
        result.push(page.image.tileId);
      }
    }
    return result ?? EMPTY;
  },
};

const EMPTY = [];

const makeMap = (count, size) => {
  const events = [null];
  for (let i = 0; i < count; i++) {
    events.push({
      id: i + 1,
      x: (i * 3) % size,
      y: (i * 5) % size,
      pages: [],
    });
  }
  return { events };
};

const PAGE_TILE = { through: false, priorityType: 0, image: { tileId: 1000 } };
const PAGE_CHARACTER = { through: false, priorityType: 1, image: { tileId: 0 } };
const activePage = (event) => (event.id % 3 === 0 ? PAGE_TILE : PAGE_CHARACTER);

const COUNTS = { none: 0, few: 8, many: 40, huge: 120 };
const SIZE = 40;
const N = 1_000_000;
const WARMUP = 2;
const ROUNDS = 5;

const [, , variant, mode = "few"] = process.argv;
const fn = impls[variant];
if (!fn || COUNTS[mode] === undefined) {
  console.error(`案: ${Object.keys(impls).join(" / ")}`);
  console.error(`イベント数: ${Object.keys(COUNTS).join(" / ")}`);
  process.exit(1);
}
const map = makeMap(COUNTS[mode], SIZE);

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += fn(map, i & 31, (i >> 2) & 31, activePage).length;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `イベント${String(COUNTS[mode]).padEnd(3)} ${variant.padEnd(9)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
