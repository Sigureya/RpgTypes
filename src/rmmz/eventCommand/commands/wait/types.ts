import type { EventCommandLike } from "../../frame";

export interface Command_Wait extends EventCommandLike<230> {
  parameters: ParamArray_Wait;
}

export type ParamArray_Wait = [duration: number];
