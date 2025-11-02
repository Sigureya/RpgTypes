import type { PluginStructSchemaArray } from "./params";
import type { PrimitiveParam } from "./params/types/paramUnion";

export const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};
