import type * as $ from "./traitCode";
export type TraitCode = (typeof $)[keyof typeof $];
