import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike } from '../../frame';
export interface Command_ChangePlayerFollowers extends EventCommandLike<216> {
    parameters: ParamArray_ChangePlayerFollowers;
}
export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
