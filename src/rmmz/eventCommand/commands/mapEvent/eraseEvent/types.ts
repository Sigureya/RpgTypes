import type {
  EventCommandLike,
  ERASE_EVENT,
} from "@RpgTypes/libs/eventCommand";

export interface Command_EraseEvent extends EventCommandLike<
  typeof ERASE_EVENT,
  ParamArray_EraseEvent
> {
  parameters: ParamArray_EraseEvent;
}

// thisを消すのでパラメータが無い
export type ParamArray_EraseEvent = [];
