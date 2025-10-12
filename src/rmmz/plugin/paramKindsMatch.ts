import type { ParamKinds, PrimitiveParam } from "./core";

const isXX = <K extends ParamKinds>(
  param: PrimitiveParam,
  set: ReadonlySet<K>
): param is Extract<PrimitiveParam, { kind: K }> => {
  return set.has(param.kind as K);
};

export interface SetPair<K extends string> {
  single: ReadonlySet<K>;
  array: ReadonlySet<`${K}[]`>;
}

export const makeKindsSet = <K extends string>(
  kinds: ReadonlyArray<K>
): SetPair<K> => {
  return {
    single: new Set(kinds),
    array: new Set(kinds.map((k): `${K}[]` => `${k}[]`)),
  };
};
