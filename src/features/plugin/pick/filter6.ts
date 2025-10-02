import type { ParamKinds } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/types";
import type { ParamFilterCriteria } from "./filterParamArray2";

const stst = (
  structs: ReadonlyArray<PluginStructSchemaArray>,
  kinds: ReadonlyArray<ParamKinds>
): ParamFilterCriteria => {
  const singleKinds: ReadonlySet<ParamKinds> = new Set(kinds);
  const arrayKinds = new Set(kinds.map((k): `${ParamKinds}[]` => `${k}[]`));

  const scalaStructs = structs.filter((s) =>
    isAnyAttributeKindMatched(s, singleKinds, arrayKinds)
  );

  return {
    arrayKinds: new Set(),
    singleKinds: singleKinds,
    structNames: new Set(),
  };
};

export const isAnyAttributeKindMatched = (
  struct: PluginStructSchemaArray,
  single: ReadonlySet<string>,
  array: ReadonlySet<string>
): boolean => {
  return struct.params.some((p) => {
    return single.has(p.attr.kind) || array.has(p.attr.kind);
  });
};

const mappp = (
  structs: ReadonlyArray<PluginStructSchemaArray>
): Map<string, PluginStructSchemaArray> => {
  return new Map(structs.map((s) => [s.struct, s]));
};
