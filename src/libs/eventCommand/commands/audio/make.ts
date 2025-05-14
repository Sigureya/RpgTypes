import { makeAudioFileParams, type AudioFileParams } from "@RpgTypes/utils";
import type {
  Command2_PlayBGM,
  Command2_PlayBGS,
  Command2_PlayME,
  Command2_PlaySE,
  Command2_ChangeDefeatME,
  Command2_ChangeVictoryME,
  Command2_ChangeBattleBGM,
  CommandUnion_AnyAudio,
} from "./types";
import {
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  CHANGE_DEFEAT_ME,
  CHANGE_VICTORY_ME,
  CHANGE_BATTLE_BGM,
} from "@RpgTypes/schema";

export const makeAudioCommand = <Code extends CommandUnion_AnyAudio["code"]>(
  code: Code,
  filename: string
) => {
  return makeCommandAudioAny(code, makeAudioFileParams({ name: filename }));
};

export const makeCommandAudioAny = <Code extends CommandUnion_AnyAudio["code"]>(
  code: Code,
  audio: AudioFileParams,
  indent: number = 0
) => {
  return {
    code,
    parameters: [makeAudioFileParams(audio)] satisfies [AudioFileParams],
    indent,
  };
};

export const makeCommandPlayBGM = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_PlayBGM => makeCommandAudioAny(PLAY_BGM, audio, indent);

export const makeCommandPlayBGS = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_PlayBGS => makeCommandAudioAny(PLAY_BGS, audio, indent);

export const makeCommandPlayME = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_PlayME => makeCommandAudioAny(PLAY_ME, audio, indent);

export const makeCommandPlaySE = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_PlaySE => makeCommandAudioAny(PLAY_SE, audio, indent);

export const makeCommandChangeBattleBGM = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_ChangeBattleBGM =>
  makeCommandAudioAny(CHANGE_BATTLE_BGM, audio, indent);

export const makeCommandChangeVictoryME = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_ChangeVictoryME =>
  makeCommandAudioAny(CHANGE_VICTORY_ME, audio, indent);

export const makeCommandChangeDefeatME = (
  audio: AudioFileParams,
  indent: number = 0
): Command2_ChangeDefeatME =>
  makeCommandAudioAny(CHANGE_DEFEAT_ME, audio, indent);
