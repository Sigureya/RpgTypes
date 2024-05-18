import { AudioFileParams } from "src/types/audio";
import { Game_Character } from "./Game_Character";
import { Direction8 } from "./types/interface/character";

export class Game_Vehicle extends Game_Character {
  _type: string;
  isBoat(): boolean {
    return this._type === "boat";
  }
  isShip(): boolean {
    return this._type === "ship";
  }
  isAirship(): boolean {
    return this._type === "airship";
  }
  vehicle(): any | null {
    return null;
  }
  setLocation(mapId: number, x: number, y: number) {}
  getOn(): void {}
  getOff(): void {}
  setBgm(bgm: AudioFileParams): void {}
  playBgm(): void {}
  isLandOk(x: number, y: number, d: Direction8): boolean {
    return true;
  }
}
