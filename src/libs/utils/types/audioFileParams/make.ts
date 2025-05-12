import type { AudioFileParams } from "./audioFileParams";

export const makeAudioFileParams = (
  audioFileParams: Partial<AudioFileParams> = {}
): AudioFileParams => {
  return {
    name: audioFileParams.name ?? "",
    volume: audioFileParams.volume ?? 100,
    pitch: audioFileParams.pitch ?? 100,
    pan: audioFileParams.pan ?? 0,
  };
};
