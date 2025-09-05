import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ABORT_BATTLE } from "@RpgTypes/rmmz/rpg";

export interface Command_AbortBattle
  extends EventCommandLike<typeof ABORT_BATTLE> {
  parameters: [];
}
