import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
} from "./extract/types";
import { extractTextFromEventCommands } from "./getTextFromCommand";
import { processCommonEvents, processTroopEvents } from "./rpg";

export const extractCommonEventTexts = (
  commons: ReadonlyArray<Data_CommonEvent<EventCommand>>
): ExtractedCommonEventText[] => {
  return processCommonEvents(
    commons,
    (
      page: { list: EventCommand[] },
      pageIndex: number,
      { id }: { id: number }
    ): ExtractedCommonEventText => ({
      eventId: id,
      commands: extractTextFromEventCommands(page.list),
    })
  );
};

export const extractBattleEventTexts = (
  list: ReadonlyArray<Data_Troop<EventCommand>>
): ExtractedBattleEventText[][] => {
  return processTroopEvents(
    list,
    (
      page: { list: EventCommand[] },
      pageIndex: number,
      { id }: { id: number }
    ): ExtractedBattleEventText => ({
      eventId: id,
      pageIndex,
      commands: extractTextFromEventCommands(page.list),
    })
  );
};
