import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ABORT_BATTLE } from "@RpgTypes/rmmz/rpg";

export interface Command_AbortBattle
  extends EventCommandLike2<typeof ABORT_BATTLE> {
  parameters: [];
}
