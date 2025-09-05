import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type {
  CHANGE_MENU_ACCESS,
  CHANGE_SAVE_ACCESS,
  CHANGE_FORMATION_ACCESS,
  Toggle,
} from "@RpgTypes/rmmz/rpg";

export type ParamArray_ChangeEnabled = [value: ValueOf<Toggle>];

export interface Command_ChangeMenuAccess
  extends EventCommandLike<typeof CHANGE_MENU_ACCESS> {
  parameters: ParamArray_ChangeEnabled;
}

export interface Command_ChangeSaveAccess
  extends EventCommandLike<typeof CHANGE_SAVE_ACCESS> {
  parameters: ParamArray_ChangeEnabled;
}

export interface Command_ChangeFormationAccess
  extends EventCommandLike<typeof CHANGE_FORMATION_ACCESS> {
  parameters: ParamArray_ChangeEnabled;
}
