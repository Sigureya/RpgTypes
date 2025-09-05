import { EventCommandLike } from '../../../frame';
export interface Command_ChangeActorState extends EventCommandLike<313> {
    parameters: ParamArray_ChangeActorState;
}
export type ParamArray_ChangeActorState = [actorId: number, stateId: number];
