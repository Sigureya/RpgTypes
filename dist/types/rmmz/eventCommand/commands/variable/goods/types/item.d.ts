import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../../libs';
export interface Command_ControlVariables_FromItem extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromItem;
}
export interface ParamObject_VariableFromItem {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
    itemId: number;
}
export type ParamArray_VariableFromItem = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandGameData: 3,
    typeItem: 0,
    itemId: number
];
