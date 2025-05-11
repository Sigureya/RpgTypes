import type { EventCommandLike2 } from "@RpgTypes/eventCommand";

export type ParamArray_InputNumber = [variableId: number, digits: number];
export interface ParamObject_InputNumber {
  variableId: number;
  digits: number;
}
export interface Command2_InputNumber extends EventCommandLike2<405> {
  parameters: ParamArray_InputNumber;
}
