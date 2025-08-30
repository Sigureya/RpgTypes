import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeBattleBackground extends EventCommandLike2<283> {
  parameters: ParamArray_ChangeBattleBackground;
}

export type ParamArray_ChangeBattleBackground = [
  background1: string,
  background2: string
];
