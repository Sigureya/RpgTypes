import type {
  EventCommandLike,
  OPEN_SAVE_SCREEN,
} from "@RpgTypes/libs/eventCommand";

export interface Command_OpenSaveScreen extends EventCommandLike<
  typeof OPEN_SAVE_SCREEN,
  []
> {}
