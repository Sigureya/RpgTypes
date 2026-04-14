import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../libs';
export interface Command_ControlVariables_FromVariable extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromVariable;
}
export interface ParamObject_VariableFromVariable {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
    variableId: number;
}
export type ParamArray_VariableFromVariable = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandVariable: 1,
    variableId: number
];
