import { EventCommandLike, CHANGE_PLAYER_FOLLOWERS } from '../../../../libs/eventCommand';
import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../utils';
export interface Command_ChangePlayerFollowers extends EventCommandLike<typeof CHANGE_PLAYER_FOLLOWERS> {
    parameters: ParamArray_ChangePlayerFollowers;
}
export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
