import { CONTROL_VARIABLES, EventCommandLike, VariableOperation } from '../../../../../libs';
import { ValueOf } from 'src/libs/templates/valueOf';
export declare const MAP_CHARACTOR_PARAM: {
    readonly X: 0;
    readonly Y: 1;
    readonly DIRECTION: 2;
    readonly SCREEN_X: 3;
    readonly SCREEN_Y: 4;
};
export interface Command_ControlVariables_FromMapCharactor extends EventCommandLike<typeof CONTROL_VARIABLES> {
    code: typeof CONTROL_VARIABLES;
    indent: number;
    parameters: ParamArray_VariableFromMapCharactor;
}
export interface ParamObject_VariableFromMapPlayer {
    startId: number;
    endId?: number;
    operation?: VariableOperation;
}
export interface ParamObject_VariableFromMapCharactor {
    startId: number;
    endId?: number;
    charactorId?: number;
    operation?: VariableOperation;
}
export type ParamArray_VariableFromMapCharactor = [
    rangeStartId: number,
    rangeEndId: number,
    operation: VariableOperation,
    operandGameData: 3,
    typeMapCharactor: 5,
    charactorId: number,
    param: ValueOf<typeof MAP_CHARACTOR_PARAM>
];
