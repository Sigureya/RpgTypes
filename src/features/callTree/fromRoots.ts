import { COMMON_EVENT } from "@RpgTypes/libs/eventCommand";
import type { Data_CommonEvent, EventCommand } from "@RpgTypes/rmmz";

export const extractCalledCommonEventIds = (
  list: ReadonlyArray<EventCommand>,
): number[] => {
  return list
    .filter((cmd) => cmd.code === COMMON_EVENT)
    .map((cmd) => cmd.parameters[0]);
};

export const findCallerCommonEvents = (
  commonEvents: ReadonlyArray<Data_CommonEvent>,
  ddEventIdSet: ReadonlySet<number>,
): Data_CommonEvent[] => {
  return commonEvents.filter((ev) => ccc(ev.list, ddEventIdSet));
};

const ccc = (
  commandList: ReadonlyArray<EventCommand>,
  ddEventIdSet: ReadonlySet<number>,
): boolean => {
  return extractCalledCommonEventIds(commandList).some((id) =>
    ddEventIdSet.has(id),
  );
};
