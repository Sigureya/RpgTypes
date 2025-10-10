import type {
  ParamKinds,
  PluginStructSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import { createStructMap, structDependencies } from "@RpgTypes/rmmz/plugin";
import type { StructCollection } from "./types";

export const collectStructsByKinds = (
  structs: ReadonlyArray<PluginStructSchemaArray>,
  kinds: ReadonlyArray<ParamKinds>
): StructCollection => {
  const singleKinds: Set<ParamKinds> = new Set(kinds);
  const arrayKinds = new Set(kinds.map((k): `${ParamKinds}[]` => `${k}[]`));
  const scalaMatchedStructs = structs.filter((s) =>
    isAnyAttributeKindMatched(s, singleKinds, arrayKinds)
  );
  const structMap = createStructMap(scalaMatchedStructs);
  return {
    targetArrayKinds: arrayKinds,
    targetKinds: singleKinds,
    matchedStructs: new Set(scalaMatchedStructs.map((s) => s.struct)),
    nestedStructs: new Set(
      structs.flatMap((s) => structDependencies(s.struct, structMap))
    ),
  };
};

const isAnyAttributeKindMatched = (
  struct: PluginStructSchemaArray,
  single: ReadonlySet<string>,
  array: ReadonlySet<string>
): boolean => {
  return struct.params.some((p) => {
    return single.has(p.attr.kind) || array.has(p.attr.kind);
  });
};
