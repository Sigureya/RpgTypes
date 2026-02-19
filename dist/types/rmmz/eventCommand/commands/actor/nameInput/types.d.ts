import { EventCommandLike, NAME_INPUT_PROCESSING } from '../../../../../libs/eventCommand';
export interface Command_NameInputProcessing extends EventCommandLike<typeof NAME_INPUT_PROCESSING> {
    parameters: ParamArray_NameInputProcessing;
}
export type ParamArray_NameInputProcessing = [actorId: number, param1: unknown];
