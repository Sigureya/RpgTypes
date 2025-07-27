import type { EventCommandLike2 } from "@RpgTypes/rmmz";

export type ParamArray_ChangeActorImages = [
  actorId: number,
  faceIndex: number,
  faceName: string,
  characterIndex: number,
  characterName: string,
  battlerName: string
];

export interface ParamObject_ChangeActorImages {
  actorId: number;
  faceIndex: number;
  faceName: string;
  characterIndex: number;
  characterName: string;
  battlerName: string;
}

export interface Command_ChangeActorImages extends EventCommandLike2<321> {
  parameters: ParamArray_ChangeActorImages;
}
