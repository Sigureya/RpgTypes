import type { Data_Map, EventCommandUnknown } from "@RpgTypes/rmmz";
import { replaceTextByMap } from "./utils";

export const mapXX = <Command extends EventCommandUnknown>(
  mapData: Data_Map<Command>,
  map: ReadonlyMap<string, string>
) => {
  const displayName = replaceTextByMap(mapData.displayName, map);
};
