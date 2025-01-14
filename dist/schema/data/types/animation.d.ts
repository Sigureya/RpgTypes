import type { Data_NamedItem } from "./bases";
import type { AudioFileParams, ColorRGBA } from "./map";
export interface FlashTiming {
    frame: number;
    duration: number;
    color: ColorRGBA;
}
export interface SoundTiming {
    frame: number;
    se: AudioFileParams;
}
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
export interface Data_Animation extends Data_NamedItem {
    id: number;
    displayType: number;
    effectName: string;
    flashTimings: FlashTiming[];
    name: string;
    offsetX: number;
    offsetY: number;
    rotation: Vector3;
    scale: number;
    soundTimings: SoundTiming[];
    speed: number;
}
