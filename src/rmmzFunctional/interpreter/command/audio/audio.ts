import type {
  Command_PlayBGM,
  Command_PlayBGS,
  Command_PlayME,
  Command_PlaySE,
  Command_FadeOutBGM,
  Command_FadeOutBGS,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_AudioManager } from "@RpgTypes/rmmzRuntime";

export const commandPlayBgm = (
  command: Command_PlayBGM,
  audio: Rmmz_AudioManager,
): void => {
  audio.playBgm(command.parameters[0]);
};

export const commandPlayBgs = (
  command: Command_PlayBGS,
  audio: Rmmz_AudioManager,
): void => {
  audio.playBgs(command.parameters[0]);
};

export const commandPlayMe = (
  command: Command_PlayME,
  audio: Rmmz_AudioManager,
): void => {
  audio.playMe(command.parameters[0]);
};

export const commandPlaySe = (
  command: Command_PlaySE,
  audio: Rmmz_AudioManager,
): void => {
  audio.playSe(command.parameters[0]);
};

export const commandFadeOutBgm = (
  command: Command_FadeOutBGM,
  audio: Rmmz_AudioManager,
): void => {
  audio.fadeOutBgm(command.parameters[0]);
};

export const commandFadeOutBgs = (
  command: Command_FadeOutBGS,
  audio: Rmmz_AudioManager,
): void => {
  audio.fadeOutBgs(command.parameters[0]);
};
