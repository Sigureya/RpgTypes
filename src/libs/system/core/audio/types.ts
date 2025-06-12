import type { AudioFileParams } from "@RpgTypes/utils";
import type { System_SoundsArray } from "./soundArray";

export interface System_Me {
  gameoverMe: AudioFileParams;
  defeatMe: AudioFileParams;
  victoryMe: AudioFileParams;
}

export interface System_Bgm {
  titleBgm: AudioFileParams;
  battleBgm: AudioFileParams;
}

export interface System_Sounds {
  sounds: System_SoundsArray;
}

export type System_AudioFiles = System_Bgm &
  System_Me & { [K in keyof System_Sounds]: AudioFileParams[] };
