import { CHANGE_NAME, CHANGE_PROFILE, CHANGE_NICKNAME } from "@RpgTypes/libs";
import type {
  Data_Actor,
  Data_Map,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import type { CommandContainer } from "./map";
import {
  collectMapEvents,
  processCommonEvents,
  processTroopEvents,
} from "./map";

export const extractActorTexts = (
  actors: ReadonlyArray<Data_Actor>,
  maps: ReadonlyArray<Data_Map>,
  commons: ReadonlyArray<Data_CommonEvent>,
  troops: ReadonlyArray<Data_Troop>,
): Set<string> => {
  const actorTexts = extractActorTexts2(actors);
  const mapTexts = maps.map(extractActorTextFromMapEvent);
  const commonEventTexts = extractActorTextFromCommonEvents(commons);
  const troopTexts = extractActorTextFromTroops(troops);
  return new Set([actorTexts, commonEventTexts, troopTexts, mapTexts].flat(4));
};

const extractActorTexts2 = (actors: ReadonlyArray<Data_Actor>): string[][] => {
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

const extractActorTextFromCommonEvents = (
  commons: ReadonlyArray<Data_CommonEvent>,
): string[][] => {
  return processCommonEvents(commons, cmdEx);
};

const extractActorTextFromTroops = (
  troops: readonly Data_Troop[],
): string[][][] => {
  return processTroopEvents(troops, cmdEx);
};

const cmdEx = ({ list }: CommandContainer<EventCommand>): string[] => {
  return list.filter(isActorTextCommand).map((c): string => c.parameters[1]);
};

const isActorTextCommand = (command: EventCommand) => {
  return (
    command.code === CHANGE_NAME ||
    command.code === CHANGE_PROFILE ||
    command.code === CHANGE_NICKNAME
  );
};
