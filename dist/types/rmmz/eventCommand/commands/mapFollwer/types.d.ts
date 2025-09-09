import { ValueOf } from '../../../../libs/templates/valueOf';
import { CHANGE_PLAYER_FOLLOWERS } from '../../../rpg';
import { Toggle } from '../../../utils';
import { EventCommandLike } from '../../frame';
export interface Command_ChangePlayerFollowers extends EventCommandLike<typeof CHANGE_PLAYER_FOLLOWERS> {
    parameters: ParamArray_ChangePlayerFollowers;
}
export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
