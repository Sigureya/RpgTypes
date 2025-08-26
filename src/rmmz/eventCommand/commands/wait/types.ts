import type { EventCommandLike2 } from "../../frame";

export interface Command_Wait extends EventCommandLike2<230> {
  parameters: [duration: number];
}
