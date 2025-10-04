import type { PluginParamGroups } from "./types";

export const isEmptyParamGroup = (gropu: PluginParamGroups): boolean => {
  return (
    gropu.array.length === 0 &&
    gropu.single.length === 0 &&
    gropu.struct.length === 0 &&
    gropu.structArray.length === 0
  );
};
