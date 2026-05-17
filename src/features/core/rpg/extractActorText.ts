import type { KeyValuePairEx } from "@RpgTypes/libs";
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

export interface ActorTextDictionaryHandlers<T> {
  newText: (text: string) => string;
  hashText: (text: string) => T;
}

export const createActorTextDictionary = <T>(
  actors: ReadonlyArray<Data_Actor>,
  commons: ReadonlyArray<Data_CommonEvent>,
  troops: ReadonlyArray<Data_Troop>,
  maps: ReadonlyArray<Data_Map>,
  handlers: ActorTextDictionaryHandlers<T>,
): KeyValuePairEx<string, T>[] => {
  const set = extractActorTexts(actors, commons, troops, maps);
  const list = Array.from(set);
  const baseTexts = list.map(
    (text): KeyValuePairEx<string, T> => ({
      key: text,
      value: handlers.hashText(text),
    }),
  );
  const newTexts = baseTexts.map((pair): KeyValuePairEx<string, T> => {
    const t2 = handlers.newText(pair.key);
    return {
      key: t2,
      value: handlers.hashText(t2),
    };
  });
  return [...baseTexts, ...newTexts];
};

export const extractActorTexts = (
  actors: ReadonlyArray<Data_Actor>,
  commons: ReadonlyArray<Data_CommonEvent>,
  troops: ReadonlyArray<Data_Troop>,
  maps: ReadonlyArray<Data_Map>,
): Set<string> => {
  const actorTexts = extractActorTextsFromActors(actors);
  const mapTexts = maps.map(extractActorTextFromMapEvent);
  const commonEventTexts = extractActorTextFromCommonEvents(commons);
  const troopTexts = extractActorTextFromTroops(troops);
  return new Set([actorTexts, commonEventTexts, troopTexts, mapTexts].flat(4));
};

const extractActorTextsFromActors = (
  actors: ReadonlyArray<Data_Actor>,
): string[][] => {
  return actors.map((actor): string[] => [
    actor.name,
    actor.nickname,
    actor.profile,
  ]);
};

const extractActorTextFromMapEvent = (
  map: Data_Map<EventCommand>,
): string[][] => {
  return collectMapEvents(map, extractActorTextFromCommandContainer);
};

const extractActorTextFromCommonEvents = (
  commons: ReadonlyArray<Data_CommonEvent>,
): string[][] => {
  return processCommonEvents(commons, extractActorTextFromCommandContainer);
};

const extractActorTextFromTroops = (
  troops: readonly Data_Troop[],
): string[][][] => {
  return processTroopEvents(troops, extractActorTextFromCommandContainer);
};

const extractActorTextFromCommandContainer = ({
  list,
}: CommandContainer<EventCommand>): string[] => {
  return list.filter(isActorTextCommand).map((c): string => c.parameters[1]);
};

const isActorTextCommand = (command: EventCommand) => {
  return (
    command.code === CHANGE_NAME ||
    command.code === CHANGE_PROFILE ||
    command.code === CHANGE_NICKNAME
  );
};
