// マップの通行判定。規約は performance.md [MEAS]。
//
//   node verify/perf/mapPassage.mjs <案> <イベント数>
//
// 対象: src/rmmzFunctional/map/map.ts (mapCheckPassage / mapAllTiles)
//       src/rmmz/rpg/event/map/tiles/tiles.ts (mapLayeredTiles)
//
// 毎フレーム、動く人物ごとに走る。プレイヤー + フォロワー + イベントぶん。

const mapTileId = (map, x, y, z) =>
  map.data[(z * map.height + y) * map.width + x] || 0;

const LAYER_Z_ORDER = [3, 2, 1, 0];

const impls = {
  // 現行
  current: (map, x, y, bit, events, flags) => {
    const layered = [3, 2, 1, 0].map((z) => mapTileId(map, x, y, z));
    const tileEvents = events
      .filter((e) => e.x === x && e.y === y)
      .flatMap((e) => {
        if (e.priorityType !== 0) return [];
        return e.tileId > 0 ? [e.tileId] : [];
      });
    const all = [...tileEvents, ...layered];
    const found = all.find((tile) => {
      const flag = flags[tile] ?? 0;
      if ((flag & 0x10) !== 0) return false;
      const masked = flag & bit;
      return masked === 0 || masked === bit;
    });
    if (found === undefined) return false;
    return ((flags[found] ?? 0) & bit) === 0;
  },

  // 配列を 1 本にまとめ、flatMap をやめる
  oneArray: (map, x, y, bit, events, flags) => {
    const all = [];
    for (const e of events) {
      if (e.x === x && e.y === y && e.priorityType === 0 && e.tileId > 0) {
        all.push(e.tileId);
      }
    }
    for (const z of LAYER_Z_ORDER) {
      all.push(mapTileId(map, x, y, z));
    }
    const found = all.find((tile) => {
      const flag = flags[tile] ?? 0;
      if ((flag & 0x10) !== 0) return false;
      const masked = flag & bit;
      return masked === 0 || masked === bit;
    });
    if (found === undefined) return false;
    return ((flags[found] ?? 0) & bit) === 0;
  },

  // 配列を作らず、コアと同じく見つけた時点で返す
  noArray: (map, x, y, bit, events, flags) => {
    const decide = (tile) => {
      const flag = flags[tile] ?? 0;
      if ((flag & 0x10) !== 0) return null;
      return (flag & bit) === 0;
    };
    for (const e of events) {
      if (e.x === x && e.y === y && e.priorityType === 0 && e.tileId > 0) {
        const d = decide(e.tileId);
        if (d !== null) return d;
      }
    }
    for (const z of LAYER_Z_ORDER) {
      const d = decide(mapTileId(map, x, y, z));
      if (d !== null) return d;
    }
    return false;
  },
  // 配列を作らず、高階関数のまま (find は確保しない)。イベント側の配列は provider が作る
  findShape: (map, x, y, bit, events, flags) => {
    const isResolved = (tile) => {
      const flag = flags[tile] ?? 0;
      if ((flag & 0x10) !== 0) return false;
      const masked = flag & bit;
      return masked === 0 || masked === bit;
    };
    const eventTiles = events
      .filter((e) => e.x === x && e.y === y && e.priorityType === 0 && e.tileId > 0)
      .map((e) => e.tileId); // provider が返す配列に相当
    const fromEvent = eventTiles.find(isResolved);
    if (fromEvent !== undefined) {
      return ((flags[fromEvent] ?? 0) & bit) === 0;
    }
    const z = LAYER_Z_ORDER.find((z) => isResolved(mapTileId(map, x, y, z)));
    if (z === undefined) return false;
    return ((flags[mapTileId(map, x, y, z)] ?? 0) & bit) === 0;
  },
};

const makeMap = (size) => {
  const data = new Array(size * size * 6).fill(0);
  for (let i = 0; i < data.length; i++) data[i] = (i * 7) % 300;
  return { width: size, height: size, data };
};

const makeEvents = (count, size) => {
  const events = [];
  for (let i = 0; i < count; i++) {
    events.push({
      x: (i * 3) % size,
      y: (i * 5) % size,
      priorityType: i % 3 === 0 ? 0 : 1,
      tileId: i % 2 === 0 ? 1000 + i : 0,
    });
  }
  return events;
};

const COUNTS = { none: 0, few: 8, many: 40 };
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
const map = makeMap(SIZE);
const events = makeEvents(COUNTS[mode], SIZE);
const flags = new Array(2048).fill(0);
for (let i = 0; i < flags.length; i++) flags[i] = (i * 13) % 0x1ff;

const run = () => {
  let sink = 0;
  const started = process.hrtime.bigint();
  for (let i = 0; i < N; i++) {
    sink += fn(map, i & 31, (i >> 2) & 31, 0x02, events, flags) ? 1 : 0;
  }
  return { elapsed: Number(process.hrtime.bigint() - started) / 1e6, sink };
};
for (let i = 0; i < WARMUP; i++) run();
const times = [];
for (let i = 0; i < ROUNDS; i++) times.push(run().elapsed);
times.sort((a, b) => a - b);
const median = times[(ROUNDS - 1) >> 1];
console.log(
  `イベント${String(COUNTS[mode]).padEnd(2)} ${variant.padEnd(9)} median ${median.toFixed(1)} ms` +
    ` (${((median * 1e6) / N).toFixed(0)} ns/call)  [${times.map((t) => t.toFixed(1)).join(" ")}]`,
);
