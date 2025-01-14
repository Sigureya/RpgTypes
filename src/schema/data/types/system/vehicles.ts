import type { AudioFileParams } from "../map";

export interface System_Vehicle {
  bgm: AudioFileParams;
  characterIndex: number;
  characterName: string;
  startMapId: number;
  startX: number;
  startY: number;
}

export interface Vehicles {
  boat: System_Vehicle;
  ship: System_Vehicle;
  airship: System_Vehicle;
}
