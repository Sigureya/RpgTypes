import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ERASE_EVENT } from "@RpgTypes/rmmz/rpg";

export interface Command_EraseEvent
  extends EventCommandLike2<typeof ERASE_EVENT, ParamArray_EraseEvent> {
  parameters: ParamArray_EraseEvent;
}

// thisを消すのでパラメータが無い
export type ParamArray_EraseEvent = [];
