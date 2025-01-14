import type { AudioFileParams } from "../../types/";
import type { Game_Character } from "./Game_Character";
import type { Direction8 } from "./types/interface/character";
export declare class Game_Vehicle extends Game_Character {
    _type: string;
    isBoat(): boolean;
    isShip(): boolean;
    isAirship(): boolean;
    vehicle(): any | null;
    setLocation(mapId: number, x: number, y: number): void;
    getOn(): void;
    getOff(): void;
    setBgm(bgm: AudioFileParams): void;
    playBgm(): void;
    isLandOk(x: number, y: number, d: Direction8): boolean;
}
