import type {
  ParamKinds,
  PluginStructSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import type { ParamFilterCriteria } from "./filterParamArray2";
import {
  createStructMap,
  structDependencies,
} from "./structDep/structDependencies";

export const stst = (
  structs: ReadonlyArray<PluginStructSchemaArray>,
  kinds: ReadonlyArray<ParamKinds>
): ParamFilterCriteria => {
  const singleKinds: ReadonlySet<ParamKinds> = new Set(kinds);
  const arrayKinds = new Set(kinds.map((k): `${ParamKinds}[]` => `${k}[]`));
  const scalaMatchedStructs = structs.filter((s) =>
    isAnyAttributeKindMatched(s, singleKinds, arrayKinds)
  );
  const structMap = createStructMap(structs);
  const structNames: string[] = scalaMatchedStructs.flatMap((s) =>
    structDependencies(s.struct, structMap)
  );
  return {
    arrayKinds: arrayKinds,
    singleKinds: singleKinds,
    structNames: new Set(structNames),
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
