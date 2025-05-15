import {
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  CHANGE_BATTLE_BGM,
  CHANGE_DEFEAT_ME,
  CHANGE_VICTORY_ME,
} from "@RpgTypes/schema";
import type {
  Command2_PlayBGM,
  Command2_PlayBGS,
  Command2_ChangeBattleBGM,
  Command2_ChangeVictoryME,
  Command2_ChangeDefeatME,
  Command2_PlayME,
  Command2_PlaySE,
} from "./commands/audio/types";
import { isCommandAudio } from "./validate";

export const isCommandPlayBgm = (
  command: unknown
): command is Command2_PlayBGM => {
  return isCommandAudio(command) && command.code === PLAY_BGM;
};

export const isCommandPlayBgs = (
  command: unknown
): command is Command2_PlayBGS => {
  return isCommandAudio(command) && command.code === PLAY_BGS;
};

export const isCommandPlayMe = (
  command: unknown
): command is Command2_PlayME => {
  return isCommandAudio(command) && command.code === PLAY_ME;
};

export const isCommandPlaySe = (
  command: unknown
): command is Command2_PlaySE => {
  return isCommandAudio(command) && command.code === PLAY_SE;
};

export const isCommandChangeBattleBgm = (
  command: unknown
): command is Command2_ChangeBattleBGM => {
  return isCommandAudio(command) && command.code === CHANGE_BATTLE_BGM;
};

export const isCommandChangeVictoryMe = (
  command: unknown
): command is Command2_ChangeVictoryME => {
  return isCommandAudio(command) && command.code === CHANGE_VICTORY_ME;
};

export const isCommandChangeDefeatMe = (
  command: unknown
): command is Command2_ChangeDefeatME => {
  return isCommandAudio(command) && command.code === CHANGE_DEFEAT_ME;
};
