import type {
  EventCommandLike,
  SHOW_BALLOON_ICON,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ShowBalloonIcon extends EventCommandLike<
  typeof SHOW_BALLOON_ICON
> {
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
