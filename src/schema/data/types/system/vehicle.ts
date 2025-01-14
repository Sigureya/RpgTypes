import type { AudioFileParams } from "../map";

export interface Data_Vehicle {
  bgm: AudioFileParams;
  characterIndex: number;
  characterName: string;
  startMapId: number;
  startX: number;
  startY: number;
}

export interface Vehicles {
  boat: Data_Vehicle;
  ship: Data_Vehicle;
  airship: Data_Vehicle;
}
