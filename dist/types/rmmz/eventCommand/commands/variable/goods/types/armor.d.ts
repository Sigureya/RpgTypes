import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../../libs';
export interface Command_ControlVariables_FromArmor extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromArmor;
}
export interface ParamObject_VariableFromArmor {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
    armorId: number;
}
export type ParamArray_VariableFromArmor = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandGameData: 3,
    typeArmor: 2,
    armorId: number
];
