import {
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  CHANGE_BATTLE_BGM,
  CHANGE_VICTORY_ME,
  CHANGE_DEFEAT_ME,
} from "@RpgTypes/libs/eventCommand";
import type { CommandUnion_AnyAudio } from "./audio";
import type { EventCommand } from "./union";

export const isCommandAnyAudio = (
  command: EventCommand,
): command is CommandUnion_AnyAudio => {
  return (
    command.code === PLAY_BGM ||
    command.code === PLAY_BGS ||
    command.code === PLAY_ME ||
    command.code === PLAY_SE ||
    command.code === CHANGE_BATTLE_BGM ||
    command.code === CHANGE_VICTORY_ME ||
    command.code === CHANGE_DEFEAT_ME
  );
};
