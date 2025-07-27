import type { Command_ShowMessageHeader, Data_Actor } from "@sigureya/rpgtypes";
import {
  isCommandShowMessage,
  type EventCommand,
  ControlChar,
} from "@sigureya/rpgtypes";

export const pickSpeakerName = (command: Command_ShowMessageHeader): string => {
  return command.parameters[4] ? command.parameters[4].trimEnd() : "";
};

const allSpeaker = (list: ReadonlyArray<EventCommand>) => {
  list.filter(isCommandShowMessage).map(pickSpeakerName);
};

const actorNames = (actors: Data_Actor[]): Map<number, string> => {
  const map = new Map<number, string>();
  actors.forEach((actor) => {
    map.set(actor.id, actor.name);
  });
  return map;
};

// ある文字列が翻訳対象か否か
export const speakerNameIsHHH = (name: string): boolean => {
  return false;
};
