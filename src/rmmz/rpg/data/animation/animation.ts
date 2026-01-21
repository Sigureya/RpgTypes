import type { AudioFileParams, ColorRGBA } from "src/libs/utils";

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
  name: string;
  id: number;
  effectName: string;
  displayType: number;
  offsetX: number;
  offsetY: number;
  scale: number;
  speed: number;
  rotation: Vector3;
  soundTimings: SoundTiming[];
  flashTimings: FlashTiming[];
}
