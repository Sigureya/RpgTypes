import type { PluginStructSchemaArray } from "./paramTypes/arraySchemaTypes";
import type { PrimitiveParam } from "./paramTypes/paramUnion";

export const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};
