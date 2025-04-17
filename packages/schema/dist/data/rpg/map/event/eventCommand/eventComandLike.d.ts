import type * as CodeConstants from "./eventCommandCodes";
type EventCode = (typeof CodeConstants)[keyof typeof CodeConstants];
export interface EventCommandLike<Code extends EventCode = EventCode, Parameters extends unknown[] = unknown[]> {
    parameters: Parameters;
    code: Code;
    indent: number;
}
export {};
