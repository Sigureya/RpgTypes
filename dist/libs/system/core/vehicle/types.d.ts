import { AudioFileParams } from '../../../utils';
export interface Data_Vehicle {
    bgm: AudioFileParams;
    characterIndex: number;
    characterName: string;
    startMapId: number;
    startX: number;
    startY: number;
}
export interface System_Vehicles {
    boat: Data_Vehicle;
    ship: Data_Vehicle;
    airship: Data_Vehicle;
}
