import type {
  EventCommandLike,
  LOOP,
  LOOP_BREAK,
} from "@RpgTypes/libs/eventCommand";

export interface Command_Loop extends EventCommandLike<typeof LOOP, []> {}

export interface Command_LoopBreak extends EventCommandLike<
  typeof LOOP_BREAK,
  []
> {}
