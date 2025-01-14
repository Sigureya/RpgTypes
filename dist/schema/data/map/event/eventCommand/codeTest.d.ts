import * as Code from "./codes";
type CodeKeys = keyof typeof Code;
export interface CodeTest<T extends Record<CodeKeys, Array<unknown>>> {
}
export {};
