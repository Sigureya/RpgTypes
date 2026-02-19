import type { EventCommandLike } from "@RpgTypes/libs/eventCommand";

export interface Command_Wait extends EventCommandLike<230> {
  parameters: ParamArray_Wait;
}

export type ParamArray_Wait = [duration: number];
