import { ValueOf } from '../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../frame';
import { CHANGE_MENU_ACCESS, CHANGE_SAVE_ACCESS, CHANGE_FORMATION_ACCESS, Toggle } from '../../../rpg';
export type ParamArray_ChangeEnabled = [value: ValueOf<Toggle>];
export interface Command_ChangeMenuAccess extends EventCommandLike2<typeof CHANGE_MENU_ACCESS> {
    parameters: ParamArray_ChangeEnabled;
}
export interface Command_ChangeSaveAccess extends EventCommandLike2<typeof CHANGE_SAVE_ACCESS> {
    parameters: ParamArray_ChangeEnabled;
}
export interface Command_ChangeFormationAccess extends EventCommandLike2<typeof CHANGE_FORMATION_ACCESS> {
    parameters: ParamArray_ChangeEnabled;
}
