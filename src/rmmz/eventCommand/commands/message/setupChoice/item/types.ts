import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";

export interface ParamObject_ShowChoiceWhen {
  index: number;
  name: string;
}

export type ParamArray_ShowChoiceWhen = [index: number, name: string];

export interface Command_ShowChoiceWhen extends EventCommandLike<402> {
  parameters: ParamArray_ShowChoiceWhen;
}
