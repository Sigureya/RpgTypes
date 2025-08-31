import { EventCommandLike2 } from '../../../frame';
import { NAME_INPUT_PROCESSING } from '../../../../rpg';
export interface Command_NameInputProcessing extends EventCommandLike2<typeof NAME_INPUT_PROCESSING> {
    parameters: ParamArray_NameInputProcessing;
}
export type ParamArray_NameInputProcessing = [actorId: number, param1: unknown];
