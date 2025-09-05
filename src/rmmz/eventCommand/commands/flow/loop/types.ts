import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { LOOP, LOOP_BREAK } from "@RpgTypes/rmmz/rpg";

export interface Command_Loop extends EventCommandLike<typeof LOOP, []> {}

export interface Command_LoopBreak
  extends EventCommandLike<typeof LOOP_BREAK, []> {}
