import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../libs';
export interface Command_ControlVariables_FromSystem extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromSystem;
}
export interface ParamObject_VariableFromSystem {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
}
export type ParamArray_VariableFromSystem = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandGameData: 3,
    typeSystem: 7,
    param: number
];
