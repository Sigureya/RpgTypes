import type { AudioFileParams } from "@RpgTypes/libs";
import { makeAudioFileParams } from "@RpgTypes/libs";
import {
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  CHANGE_BATTLE_BGM,
  CHANGE_VICTORY_ME,
  CHANGE_DEFEAT_ME,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_PlayBGM,
  Command_PlayBGS,
  Command_PlayME,
  Command_PlaySE,
  Command_ChangeDefeatME,
  Command_ChangeVictoryME,
  Command_ChangeBattleBGM,
  CommandUnion_AnyAudio,
} from "./types";

export const makeAudioCommand = <Code extends CommandUnion_AnyAudio["code"]>(
  code: Code,
  filename: string,
) => {
  return makeCommandAudioAny(code, makeAudioFileParams({ name: filename }));
};

export const makeCommandAudioAny = <Code extends CommandUnion_AnyAudio["code"]>(
  code: Code,
  audio: AudioFileParams,
  indent: number = 0,
) => {
  return {
    code,
    parameters: [makeAudioFileParams(audio)] satisfies [AudioFileParams],
    indent,
  };
};

export const makeCommandPlayBGM = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_PlayBGM => makeCommandAudioAny(PLAY_BGM, audio, indent);

export const makeCommandPlayBGS = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_PlayBGS => makeCommandAudioAny(PLAY_BGS, audio, indent);

export const makeCommandPlayME = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_PlayME => makeCommandAudioAny(PLAY_ME, audio, indent);

export const makeCommandPlaySE = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_PlaySE => makeCommandAudioAny(PLAY_SE, audio, indent);

export const makeCommandChangeBattleBGM = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_ChangeBattleBGM =>
  makeCommandAudioAny(CHANGE_BATTLE_BGM, audio, indent);

export const makeCommandChangeVictoryME = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_ChangeVictoryME =>
  makeCommandAudioAny(CHANGE_VICTORY_ME, audio, indent);

export const makeCommandChangeDefeatME = (
  audio: AudioFileParams,
  indent: number = 0,
): Command_ChangeDefeatME =>
  makeCommandAudioAny(CHANGE_DEFEAT_ME, audio, indent);
