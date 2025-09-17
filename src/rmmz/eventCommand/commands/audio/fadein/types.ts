import type { AudioFileParams } from "@RpgTypes/libs";

export interface Command_FadeInBGM {
  parameters: ParamArray_FadeInAudio;
}

export interface Command_FadeInBGS {
  parameters: ParamArray_FadeInAudio;
}

export type ParamArray_FadeInAudio = [audio: AudioFileParams, duration: number];
