import type {
  EventCommandLike,
  CHANGE_MAP_NAME_DISPLAY,
} from "@RpgTypes/libs/eventCommand";

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
