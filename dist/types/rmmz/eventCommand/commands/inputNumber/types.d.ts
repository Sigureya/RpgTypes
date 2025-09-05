import { EventCommandLike } from '../../frame';
import { INPUT_NUMBER } from '../../../rpg';
export interface Command_InputNumber extends EventCommandLike<typeof INPUT_NUMBER> {
    parameters: ParamArray_InputNumber;
}
export type ParamArray_InputNumber = [variableId: number, maxDigits: number];
export interface ParamObject_InputNumber {
    variableId: number;
    maxDigits: number;
}
