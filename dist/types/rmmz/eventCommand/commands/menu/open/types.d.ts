import { EventCommandLike } from '../../../frame';
import { OPEN_MENU_SCREEN } from '../../../../rpg';
export interface Command_OpenMenu extends EventCommandLike<typeof OPEN_MENU_SCREEN> {
    parameters: ParamArray_OpenMenu;
}
export type ParamArray_OpenMenu = [];
