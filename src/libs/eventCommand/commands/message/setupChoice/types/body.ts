import type { EventCommandLike2 } from "@RpgTypes/eventCommand";

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

export interface Command_ShowChoices extends EventCommandLike2<102> {
  parameters: ParamArray_SetupChoice;
}
