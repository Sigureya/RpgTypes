import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeBattleBackground extends EventCommandLike2<283> {
  parameters: [background1: string, background2: string];
}
