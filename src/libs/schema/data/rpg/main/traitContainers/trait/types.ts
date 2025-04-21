import type * as $ from "./constants/traitCode";

export type TraitCode = (typeof $)[keyof typeof $];

export interface Trait {
  code: number;
  dataId: number;
  value: number;
}
