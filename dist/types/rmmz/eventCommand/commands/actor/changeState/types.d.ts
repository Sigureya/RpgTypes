import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeActorState extends EventCommandLike2<313> {
    parameters: ParamArray_ChangeActorState;
}
export type ParamArray_ChangeActorState = [actorId: number, stateId: number];
