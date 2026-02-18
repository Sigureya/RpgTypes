import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_MAP_NAME_DISPLAY } from "@RpgTypes/rmmz/rpg";
export type Command_ChangeMapNameDisplay =
  | Command_ShowMapNameDisplay
  | Command_HideMapNameDisplay;
export type ParamArray_ChangeMapNameDisplay = [display: 0 | 1];

export interface Command_ShowMapNameDisplay extends EventCommandLike<
  typeof CHANGE_MAP_NAME_DISPLAY
> {
  parameters: [display: 0];
}

export interface Command_HideMapNameDisplay extends EventCommandLike<
  typeof CHANGE_MAP_NAME_DISPLAY
> {
  parameters: [display: 1];
}
