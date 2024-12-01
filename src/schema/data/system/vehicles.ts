import type { AudioFileParams } from "../../../types/audio";

export interface System_Vehicle {
  bgm: AudioFileParams;
  characterIndex: number;
  characterName: string;
  startMapId: 0;
  startX: 0;
  startY: 0;
}

export interface Vehicles {
  boat: System_Vehicle;
  ship: System_Vehicle;
  airship: System_Vehicle;
}
