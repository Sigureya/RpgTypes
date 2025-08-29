import type { EventCommandLike2 } from "../../frame";

export interface Command_Wait extends EventCommandLike2<230> {
  parameters: ParamArray_Wait;
}

export type ParamArray_Wait = [duration: number];
