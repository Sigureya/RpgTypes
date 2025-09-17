import type { AudioFileParams } from "@RpgTypes/libs";

export interface Rmmz_AudioManager {
  playBgm(bgm: AudioFileParams): void;
  stopBgm(): void;
  fadeOutBgm(duration: number): void;
  fadeInBgm(bgm: AudioFileParams, duration: number): void;
  playBgs(bgs: AudioFileParams): void;
  stopBgs(): void;
  fadeOutBgs(duration: number): void;
  fadeInBgs(bgs: AudioFileParams, duration: number): void;
  playMe(me: AudioFileParams): void;
  playSe(se: AudioFileParams): void;
  playStaticSe(se: AudioFileParams): void;
}
