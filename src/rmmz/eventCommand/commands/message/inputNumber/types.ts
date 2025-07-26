import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand";

export type ParamArray_InputNumber = [variableId: number, digits: number];
export interface ParamObject_InputNumber {
  variableId: number;
  digits: number;
}
export interface Command_InputNumber extends EventCommandLike2<103> {
  parameters: ParamArray_InputNumber;
}
