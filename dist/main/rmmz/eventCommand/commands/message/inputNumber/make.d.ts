import { Command_InputNumber, ParamArray_InputNumber, ParamObject_InputNumber } from './types';
export declare const toArrayInputNumber: (param: Partial<ParamObject_InputNumber>) => ParamArray_InputNumber;
export declare const fromArrayInputNumber: (array: ParamArray_InputNumber) => ParamObject_InputNumber;
export declare const makeCommandInputNumber: (param: Partial<ParamObject_InputNumber> | undefined, indent?: number) => Command_InputNumber;
