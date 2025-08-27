import { Command_InputNumber, ParamArray_InputNumber, ParamObject_InputNumber } from './types';
export declare const makeCommandInputNumber: (params: ParamObject_InputNumber, indent?: number) => Command_InputNumber;
export declare const toArrayInputNumber: (param: Partial<ParamObject_InputNumber>) => ParamArray_InputNumber;
export declare const fromArrayInputNumber: (array: ParamArray_InputNumber) => ParamObject_InputNumber;
