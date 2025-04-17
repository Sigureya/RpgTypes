import type * as $ from "./traitCode";
export type TraitCode = (typeof $)[keyof typeof $];
export interface Trait {
    code: number;
    dataId: number;
    value: number;
}
