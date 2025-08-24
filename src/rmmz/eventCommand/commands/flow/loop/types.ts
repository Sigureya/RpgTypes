import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { LOOP, LOOP_BREAK } from "@RpgTypes/rmmz/rpg";

export interface Command_Loop extends EventCommandLike2<typeof LOOP, []> {}

export interface Command_LoopBreak
  extends EventCommandLike2<typeof LOOP_BREAK, []> {}
