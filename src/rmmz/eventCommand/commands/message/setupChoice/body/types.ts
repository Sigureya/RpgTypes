import type {
  EventCommandLike,
  SHOW_CHOICES,
} from "@RpgTypes/libs/eventCommand";

export type ParamArray_SetupChoice = [
  choices: string[],
  cancelType: number,
  defaultType: number,
  positionType: number,
  background: number,
];
export interface ParamObject_SetupChoice {
  choices: string[];
  cancelType: number;
  defaultType: number;
  positionType: number;
  background: number;
}

export interface Command_ShowChoices extends EventCommandLike<
  typeof SHOW_CHOICES
> {
  parameters: ParamArray_SetupChoice;
}
