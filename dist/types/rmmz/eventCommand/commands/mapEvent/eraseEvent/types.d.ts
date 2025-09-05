import { EventCommandLike } from '../../../frame';
import { ERASE_EVENT } from '../../../../rpg';
export interface Command_EraseEvent extends EventCommandLike<typeof ERASE_EVENT, ParamArray_EraseEvent> {
    parameters: ParamArray_EraseEvent;
}
export type ParamArray_EraseEvent = [];
