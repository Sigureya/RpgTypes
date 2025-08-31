import { EventCommandLike2 } from '../../../frame';
import { ERASE_EVENT } from '../../../../rpg';
export interface Command_EraseEvent extends EventCommandLike2<typeof ERASE_EVENT, ParamArray_EraseEvent> {
    parameters: ParamArray_EraseEvent;
}
export type ParamArray_EraseEvent = [];
