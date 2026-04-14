import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../libs';
import { ValueOf } from 'src/libs/templates/valueOf';
import { VARIABLE_SRC_LAST } from './dataSource';
export interface Command_ControlVariables_FromLastData extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromLastData;
}
export interface ParamObject_VariableFromLastData {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
}
export type ParamArray_VariableFromLastData = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandGameData: 3,
    typeLastData: 8,
    index: ValueOf<typeof VARIABLE_SRC_LAST>
];
