import { EventCommandLike2 } from '../../../frame';
import { CHANGE_MAP_NAME_DISPLAY } from '../../../../rpg';
export interface Command_ChangeMapNameDisplay extends EventCommandLike2<typeof CHANGE_MAP_NAME_DISPLAY> {
    parameters: ParamArray_ChangeMapNameDisplay;
}
export type ParamArray_ChangeMapNameDisplay = [display: 0 | 1];
