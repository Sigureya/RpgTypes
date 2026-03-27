import type {
  Data_Map,
  Data_Actor,
  EventCommand,
  Data_CommonEvent,
} from "@RpgTypes/rmmz";
import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_PROFILE } from "@RpgTypes/rmmz";
import type { CommandContainer } from "./rpg";
import { collectMapEvents, processCommonEvents } from "./rpg";

const aaaa = (actors: ReadonlyArray<Data_Actor>): string[][] => {
  return actors.map((actor): string[] => [
    actor.name,
    actor.nickname,
    actor.profile,
  ]);
};

const extractActorTextFromMapEvent = (
  map: Data_Map<EventCommand>,
): string[][] => {
  return collectMapEvents(map, cmdEx);
};

const com = (commons: ReadonlyArray<Data_CommonEvent>): string[][] => {
  return processCommonEvents(commons, cmdEx);
};

const cmdEx = ({ list }: CommandContainer<EventCommand>): string[] => {
  return list.filter(ccc).map((c): string => c.parameters[1]);
};

const ccc = (command: EventCommand) => {
  return (
    command.code === CHANGE_NAME ||
    command.code === CHANGE_PROFILE ||
    command.code === CHANGE_NICKNAME
  );
};
