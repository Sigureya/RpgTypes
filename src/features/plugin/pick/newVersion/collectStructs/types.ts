import type { ParamKinds } from "@RpgTypes/rmmz/plugin";

export interface StructCollection {
  matchedStructs: Set<string>;
  nestedStructs: Set<string>;
  targetKinds: Set<ParamKinds>;
  targetArrayKinds: Set<`${ParamKinds}[]`>;
}

export interface ReadonlyStructCollection
  extends Record<keyof StructCollection, ReadonlySet<string>> {
  readonly matchedStructs: ReadonlySet<string>;
  readonly nestedStructs: ReadonlySet<string>;
  readonly targetKinds: ReadonlySet<ParamKinds>;
  readonly targetArrayKinds: ReadonlySet<`${ParamKinds}[]`>;
}
