import type { ParamKinds } from "./core";

export interface ParamFilter<K extends ParamKinds> {
  kinds: K[];
  single: Set<K>;
  array: Set<`${K}[]`>;
}

export const createParamFilter = <K extends ParamKinds>(
  kinds: ReadonlyArray<K>
): ParamFilter<K> => {
  return {
    kinds: [...kinds],
    single: new Set(kinds),
    array: new Set(kinds.map((k): `${K}[]` => `${k}[]`)),
  };
};
