import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";
import type { ValueOf } from "src/templates/valueOf";

export interface Command_ControlTimer extends EventCommandLike2<124> {
  parameters: [operation: ValueOf<Operation_PlusMinus>, time: number];
}
export type Operation_PlusMinus = "plus" | "minus";
export interface Paramobject_ControlTimer {
  operation: Operation_PlusMinus;
  time: number;
}
