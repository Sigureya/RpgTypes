import type {
  EventCommandLike,
  INPUT_NUMBER,
} from "@RpgTypes/libs/eventCommand";

export interface Command_InputNumber extends EventCommandLike<
  typeof INPUT_NUMBER
> {
  parameters: ParamArray_InputNumber;
}

export type ParamArray_InputNumber = [variableId: number, maxDigits: number];

export interface ParamObject_InputNumber {
  variableId: number;
  maxDigits: number;
}
