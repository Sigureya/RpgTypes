import type { EventCommandLike } from "@RpgTypes/schema";
import type { ValueOf } from "@RpgTypes/schema";

export interface Command_ControlTimer extends EventCommandLike<124> {
  parameters: [operation: ValueOf<Operation_PlusMinus>, time: number];
}
export type Operation_PlusMinus = "plus" | "minus";
export interface Paramobject_ControlTimer {
  operation: Operation_PlusMinus;
  time: number;
}
