import { AudioFileParams } from "../../../types/audio";

export interface System_Vehicle {
  bgm: AudioFileParams;
}

export interface Vehicles {
  boat: System_Vehicle;
  ship: System_Vehicle;
  airship: System_Vehicle;
}
