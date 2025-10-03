import type {
  ParamKinds,
  PluginStructSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import {
  createStructMap,
  structDependencies,
} from "./structDep/structDependencies";

export interface RRR {
  structNames: Set<string>;
  structNests: Set<string>;
  singleKinds: Set<ParamKinds>;
  arrayKinds: Set<`${ParamKinds}[]`>;
}

export const stst = (
  structs: ReadonlyArray<PluginStructSchemaArray>,
  kinds: ReadonlyArray<ParamKinds>
): RRR => {
  const singleKinds: Set<ParamKinds> = new Set(kinds);
  const arrayKinds = new Set(kinds.map((k): `${ParamKinds}[]` => `${k}[]`));
  const scalaMatchedStructs = structs.filter((s) =>
    isAnyAttributeKindMatched(s, singleKinds, arrayKinds)
  );
  const structMap = createStructMap(scalaMatchedStructs);
  return {
    arrayKinds: arrayKinds,
    singleKinds: singleKinds,
    structNames: new Set(scalaMatchedStructs.map((s) => s.struct)),
    structNests: new Set(
      structs.flatMap((s) => structDependencies(s.struct, structMap))
    ),
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
