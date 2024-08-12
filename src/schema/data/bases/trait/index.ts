import type { ValueOf } from "../../../../types/types";
import type * as $ from "./traitConstants";
export * from "./other";

export type TraitCode = ValueOf<typeof $>;

export interface Trait {
  code: TraitCode;
}

export interface Data_TraitContainer {
  traits: Trait[];
  note: string;
}
