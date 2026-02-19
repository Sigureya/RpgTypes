import type {
  EventCommandLike,
  FADEOUT_BGM,
  SAVE_BGM,
  RESUME_BGM,
  FADEOUT_BGS,
} from "@RpgTypes/libs/eventCommand";

export interface Command_FadeOutBGM extends EventCommandLike<
  typeof FADEOUT_BGM,
  [duration: number]
> {}

export interface Command_SaveBGM extends EventCommandLike<
  typeof SAVE_BGM,
  []
> {}

export interface Command_ResumeBGM extends EventCommandLike<
  typeof RESUME_BGM,
  []
> {}

export interface Command_FadeOutBGS extends EventCommandLike<
  typeof FADEOUT_BGS
> {
  parameters: ParamArray_FadeOutAudio;
}

export type ParamArray_FadeOutAudio = [duration: number];
