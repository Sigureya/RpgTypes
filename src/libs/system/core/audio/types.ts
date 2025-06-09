import type { AudioFileParams } from "@RpgTypes/utils";

export interface System_Me {
  gameoverMe: AudioFileParams;
  defeatMe: AudioFileParams;
  victoryMe: AudioFileParams;
}

export interface System_Bgm {
  titleBgm: AudioFileParams;
  battleBgm: AudioFileParams;
}
export type System_AudioFiles = System_Bgm & System_Me;
