import { COMMON_EVENT } from "@RpgTypes/libs/eventCommand";
import type { Data_CommonEvent, EventCommand } from "@RpgTypes/rmmz";
import { extractCalledCommonEventIds } from "./fromRoots";
import type { CommonEventDependencies, CommonEventNode } from "./types";

export const buildCommonEventDependencyMap = (
  events: ReadonlyArray<Data_CommonEvent>,
): Map<number, CommonEventDependencies> => {
  const maped = events.map((ev): [number, CommonEventDependencies] => [
    ev.id,
    {
      eventId: ev.id,
      name: ev.name,
      childeCommons: new Set(extractCalledCommonEventIds(ev.list)),
    },
  ]);
  return new Map<number, CommonEventDependencies>(maped);
};

export const extractCalledCommonEventNodes = (
  list: ReadonlyArray<EventCommand>,
  events: ReadonlyArray<Data_CommonEvent>,
): CommonEventNode[] => {
  return list.reduce((result: CommonEventNode[], cmd) => {
    if (cmd.code !== COMMON_EVENT) {
      return result;
    }

    const eventId = cmd.parameters[0];
    const ev = findCommonEventById(eventId, events);
    const node: CommonEventNode = {
      eventId: eventId,
      name: ev ? ev.name : `(not found id=${eventId})`,
    };

    return [...result, node];
  }, []);
};

const findCommonEventById = (
  id: number,
  events: ReadonlyArray<Data_CommonEvent>,
): Data_CommonEvent | undefined => {
  return events.find((ev) => ev.id === id);
};
