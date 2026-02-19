import { EventCommandLike, CHANGE_TRANSPARENCY } from '../../../../libs/eventCommand';
import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../utils';
export interface Command_ChangeTransparency extends EventCommandLike<typeof CHANGE_TRANSPARENCY> {
    parameters: ParamArray_ChangeTransparency;
}
export type ParamArray_ChangeTransparency = [value: ValueOf<Toggle>];
