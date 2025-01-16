import type * as $ from "./traitConstants";
export * from "./other";

export type TraitCode = (typeof $)[keyof typeof $];

export interface Trait {
  code: TraitCode;
}

export interface Data_TraitContainer {
  traits: Trait[];
  note: string;
}
