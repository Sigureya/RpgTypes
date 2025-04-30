import type { AudioFileParams, ColorRGBA } from "@RpgTypes/utils";

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

export interface Data_Animation {
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
