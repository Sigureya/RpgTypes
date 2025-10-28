import type { PluginStructSchemaArray } from "./arraySchemaTypes";
import type { PrimitiveParam } from "./paramUnion";

export const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};
