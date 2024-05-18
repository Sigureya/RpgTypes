import { ValueOf } from "src/types/types";
import type * as $ from "./traitConstants";
export * from "./other";

export type TraitCode = ValueOf<typeof $>;

export interface Trait {
  code: TraitCode;
}

export interface TraitContainer {
  traits: Trait[];
  note: string;
}
