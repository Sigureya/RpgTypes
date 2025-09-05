import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_MAP_NAME_DISPLAY } from "@RpgTypes/rmmz/rpg";
export interface Command_ChangeMapNameDisplay
  extends EventCommandLike<typeof CHANGE_MAP_NAME_DISPLAY> {
  parameters: ParamArray_ChangeMapNameDisplay;
}

export type ParamArray_ChangeMapNameDisplay = [display: 0 | 1];
