import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../libs';
import { ValueOf } from 'src/libs/templates/valueOf';
import { ACTOR_STATUS } from './dataSource';
export interface Command_ControlVariables_FromActor extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromActorStatus;
}
export interface ParamObject_VariableFromActor {
    startId: number;
    endId?: number;
    actorId: number;
    operation?: VariableOperation;
}
export type ParamArray_VariableFromActorStatus = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandGameData: 3,
    typeActor: 3,
    actorId: number,
    param: ValueOf<typeof ACTOR_STATUS>
];
