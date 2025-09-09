import { ValueOf } from '../../../../libs/templates/valueOf';
import { CHANGE_TRANSPARENCY } from '../../../rpg';
import { Toggle } from '../../../utils';
import { EventCommandLike } from '../../frame';
export interface Command_ChangeTransparency extends EventCommandLike<typeof CHANGE_TRANSPARENCY> {
    parameters: ParamArray_ChangeTransparency;
}
export type ParamArray_ChangeTransparency = [value: ValueOf<Toggle>];
