import type { AudioFileParams } from "@RpgTypes/utils";

export interface Data_Vehicle {
  bgm: AudioFileParams;
  characterIndex: number;
  characterName: string;
  startMapId: number;
  startX: number;
  startY: number;
}
