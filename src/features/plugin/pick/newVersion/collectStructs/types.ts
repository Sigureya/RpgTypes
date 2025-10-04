import type { ParamKinds } from "@RpgTypes/rmmz/plugin";

export interface StructCollection {
  matchedStructs: Set<string>;
  nestedStructs: Set<string>;
  targetKinds: Set<ParamKinds>;
  targetArrayKinds: Set<`${ParamKinds}[]`>;
}
