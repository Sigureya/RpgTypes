import type {
  Command_InputNumber,
  ParamArray_InputNumber,
  ParamObject_InputNumber,
} from "./types";

export const makeCommandInputNumber = (
  params: ParamObject_InputNumber,
  indent: number = 0
): Command_InputNumber => ({
  code: 103,
  parameters: [params.variableId, params.maxDigits],
  indent,
});
export const toArrayInputNumber = (
  param: Partial<ParamObject_InputNumber>
): ParamArray_InputNumber => [param.variableId ?? 0, param.maxDigits ?? 0];

export const fromArrayInputNumber = (
  array: ParamArray_InputNumber
): ParamObject_InputNumber => ({
  variableId: array[0],
  maxDigits: array[1],
});
