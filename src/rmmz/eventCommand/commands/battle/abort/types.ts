import type {
  EventCommandLike,
  ABORT_BATTLE,
} from "@RpgTypes/libs/eventCommand";

export interface Command_AbortBattle extends EventCommandLike<
  typeof ABORT_BATTLE
> {
  parameters: [];
}
