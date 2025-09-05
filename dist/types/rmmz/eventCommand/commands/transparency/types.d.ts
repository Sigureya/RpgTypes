import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike } from '../../frame';
export interface Command_ChangeTransparency extends EventCommandLike<211> {
    parameters: ParamArray_ChangeTransparency;
}
export type ParamArray_ChangeTransparency = [value: ValueOf<Toggle>];
