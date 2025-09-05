import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface MapEvent_Image {
  characterIndex: number;
  characterName: string;
  direction: Direction8;
  pattern: number;
  tileId: number;
}
