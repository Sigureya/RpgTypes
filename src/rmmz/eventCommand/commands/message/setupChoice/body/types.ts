import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";

export type ParamArray_SetupChoice = [
  choices: string[],
  cancelType: number,
  defaultType: number,
  positionType: number,
  background: number
];
export interface ParamObject_SetupChoice {
  choices: string[];
  cancelType: number;
  defaultType: number;
  positionType: number;
  background: number;
}

export interface Command_ShowChoices extends EventCommandLike<102> {
  parameters: ParamArray_SetupChoice;
}
