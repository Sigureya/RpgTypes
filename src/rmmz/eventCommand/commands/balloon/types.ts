import type { EventCommandLike } from "../../frame";

export interface Command_ShowBalloonIcon extends EventCommandLike<213> {
  parameters: ParamArray_ShowBalloonIcon;
}

export type ParamArray_ShowBalloonIcon = [
  characterId: number,
  balloonId: number,
  waiting: boolean,
];

export interface ParamObject_ShowBalloonIcon {
  characterId: number;
  balloonId: number;
  waiting: boolean;
}
