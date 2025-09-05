import type { Data_CommonEvent } from "@RpgTypes/rmmz";
import { extractCalledCommonEventIds } from "./fromRoots";

export const treeShake = (
  events: ReadonlyArray<Data_CommonEvent>,
  roots: ReadonlySet<number>
): Set<number> => {
  const list: number[] = events
    .map((e) => extractCalledCommonEventIds(e.list))
    .filter((children: number[]) => {
      return children.some((id) => roots.has(id));
    })
    .flat();
  return new Set(list);
};
