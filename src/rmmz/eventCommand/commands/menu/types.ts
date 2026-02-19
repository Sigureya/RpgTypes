import type {
  EventCommandLike,
  CHANGE_MENU_ACCESS,
  CHANGE_SAVE_ACCESS,
  CHANGE_FORMATION_ACCESS,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/utils";

export type ParamArray_ChangeEnabled = [value: ValueOf<Toggle>];

export interface Command_ChangeMenuAccess extends EventCommandLike<
  typeof CHANGE_MENU_ACCESS
> {
  parameters: ParamArray_ChangeEnabled;
}

export interface Command_ChangeSaveAccess extends EventCommandLike<
  typeof CHANGE_SAVE_ACCESS
> {
  parameters: ParamArray_ChangeEnabled;
}

export interface Command_ChangeFormationAccess extends EventCommandLike<
  typeof CHANGE_FORMATION_ACCESS
> {
  parameters: ParamArray_ChangeEnabled;
}
