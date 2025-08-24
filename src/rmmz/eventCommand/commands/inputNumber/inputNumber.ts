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

export const fromArrayInputNumber = (
  arr: ParamArray_InputNumber
): ParamObject_InputNumber => ({
  variableId: arr[0],
  maxDigits: arr[1],
});
