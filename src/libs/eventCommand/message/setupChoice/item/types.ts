import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";

export interface ParamObject_ShowChoiceItem {
  index: number;
  name: string;
}

export type ParamArray_ShowChoiceItem = [index: number, name: string];

export interface Command2_ShowChoiceItem extends EventCommandLike2<402> {
  parameters: ParamArray_ShowChoiceItem;
}
