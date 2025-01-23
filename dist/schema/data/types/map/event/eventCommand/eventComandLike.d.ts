import type * as CodeConstants from "./eventCommandCodes";
export interface EventCommandLike2<Code extends (typeof CodeConstants)[keyof typeof CodeConstants], Parameters extends unknown[]> {
    parameters: Parameters;
    code: Code;
    indent: number;
}
