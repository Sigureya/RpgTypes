import type { AudioFileParams } from "@RpgTypes/libs";
import type { Data_Vehicle } from "@RpgTypes/rmmz/system";
import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Rmmz_Vehicle {
  _type: string;
  isBoat(): boolean;
  isShip(): boolean;
  isAirship(): boolean;
  vehicle(): Data_Vehicle | null;
  setLocation(mapId: number, x: number, y: number): void;
  getOn(): void;
  getOff(): void;
  setBgm(bgm: AudioFileParams): void;
  playBgm(): void;
  isLandOk(x: number, y: number, d: Direction8): boolean;
}
