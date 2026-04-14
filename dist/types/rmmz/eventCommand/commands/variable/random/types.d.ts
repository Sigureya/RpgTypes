import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../libs';
export interface Command_ControlVariables_FromRandom extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromRandom;
}
export interface ParamObject_VariableFromRandom {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
    min: number;
    max: number;
}
export type ParamArray_VariableFromRandom = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandRandom: 2,
    min: number,
    max: number
];
