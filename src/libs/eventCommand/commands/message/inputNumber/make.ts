import { INPUT_NUMBER } from "@RpgTypes/schema";
import type {
  Command2_InputNumber,
  ParamArray_InputNumber,
  ParamObject_InputNumber,
} from "./types";

export const toArrayInputNumber = (
  param: Partial<ParamObject_InputNumber>
): ParamArray_InputNumber => [param.variableId ?? 0, param.digits ?? 0];

export const fromArrayInputNumber = (
  array: ParamArray_InputNumber
): ParamObject_InputNumber => ({
  variableId: array[0],
  digits: array[1],
});

export const makeCommandInputNumber = (
  param: Partial<ParamObject_InputNumber> | undefined,
  indent: number = 0
): Command2_InputNumber => ({
  code: INPUT_NUMBER,
  indent,
  parameters: toArrayInputNumber(param ?? {}),
});
