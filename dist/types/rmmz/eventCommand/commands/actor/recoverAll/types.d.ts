import { EventCommandLike, RECOVER_ALL } from '../../../../../libs/eventCommand';
export interface Command_RecoverAll extends EventCommandLike<typeof RECOVER_ALL> {
    parameters: ParamArray_RecoverAll;
}
export type ParamArray_RecoverAll = ParamArray_EachActorRecoverAll | ParamArray_TargetActorRecoverAll | ParamArray_RecoverAllTargetVariable;
export type ParamArray_EachActorRecoverAll = [modeDirect: 0, 0];
export type ParamArray_TargetActorRecoverAll = [modeDirect: 0, actorId: number];
export type ParamArray_RecoverAllTargetVariable = [
    modeVariable: 1,
    variableId: number
];
