import type * as $ from "./constants/traitCode";

export type TraitCode = (typeof $)[keyof typeof $];

export interface Trait {
  code: number;
  dataId: number;
  value: number;
}

export interface Data_TraitContainer {
  traits: Trait[];
  note: string;
}
