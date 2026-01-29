import { AudioFileParams } from '../../../../libs';
import { Data_Vehicle } from '../../../../rmmz/system';
import { Direction8 } from '../../../../rmmz/utils';
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
    setImage(characterImage: string, characterIndex: number): void;
}
