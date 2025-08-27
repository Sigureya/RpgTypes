import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeClaass extends EventCommandLike2<321> {
  parameters: [actorId: number, classId: number, keepExp: boolean];
}
