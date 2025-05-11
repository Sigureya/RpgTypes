import { EventCommandLike2 } from '../../..';
export type ParamArray_InputNumber = [variableId: number, digits: number];
export interface ParamObject_InputNumber {
    variableId: number;
    digits: number;
}
export interface Command2_InputNumber extends EventCommandLike2<103> {
    parameters: ParamArray_InputNumber;
}
