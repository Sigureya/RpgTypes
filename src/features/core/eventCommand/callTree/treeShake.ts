import type { Data_CommonEvent } from "@RpgTypes/rmmz";
import { extractCalledCommonEventIds } from "./fromRoots";

/**
 * 指定したrootイベントID群から到達可能な全てのコモンイベントIDを再帰的に列挙します。
 * 再帰とmap/filter/reduceのみで実装（for/while禁止）
 */
export const treeShake = (
  events: ReadonlyArray<Data_CommonEvent>,
  roots: ReadonlySet<number>
): ReadonlySet<number> => {
  const eventMap = new Map(events.map((ev) => [ev.id, ev]));
  return visit(eventMap, roots, new Set());
};

const visit = (
  eventMap: ReadonlyMap<number, Data_CommonEvent>,
  ids: ReadonlySet<number>,
  visited: ReadonlySet<number>
): ReadonlySet<number> => {
  // 既に訪問済みのIDは除外
  const newIds: number[] = Array.from(ids).filter((id) => !visited.has(id));
  if (newIds.length === 0) {
    return visited;
  }

  // 新たに訪問するIDを追加
  const nextVisited = new Set([...visited, ...newIds]);

  // 新たに訪問するIDから子IDを集める
  const childIds = newIds
    .map((id) => eventMap.get(id))
    .filter((ev): ev is Data_CommonEvent => !!ev)
    .flatMap((ev) => extractCalledCommonEventIds(ev.list));

  // 子IDをSet化して再帰
  return visit(eventMap, new Set(childIds), nextVisited);
};
