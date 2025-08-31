import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike2 } from '../../frame';
export interface Command_ChangePlayerFollowers extends EventCommandLike2<216> {
    parameters: ParamArray_ChangePlayerFollowers;
}
export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
