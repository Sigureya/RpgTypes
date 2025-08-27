import { EventCommandLike2 } from '../../frame';
import { INPUT_NUMBER } from '../../../rpg';
export interface Command_InputNumber extends EventCommandLike2<typeof INPUT_NUMBER> {
    parameters: ParamArray_InputNumber;
}
export type ParamArray_InputNumber = [variableId: number, maxDigits: number];
export interface ParamObject_InputNumber {
    variableId: number;
    maxDigits: number;
}
