import type { EventCommandLike } from "@RpgTypes/rmmz";

export type ParamArray_ChangeActorImages = [
  actorId: number,
  characterImage: string,
  characterIndex: number,
  faceImage: string,
  faceIndex: number,
  battlerImage: string,
];

export interface ParamObject_ChangeActorImages {
  actorId: number;
  faceIndex: number;
  faceName: string;
  characterIndex: number;
  characterName: string;
  battlerName: string;
}

export interface Command_ChangeActorImages extends EventCommandLike<322> {
  parameters: ParamArray_ChangeActorImages;
}
