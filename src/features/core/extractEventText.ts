import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
  EventCommand2,
  EventCommandUnknown,
} from "@RpgTypes/rmmz";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { extractTextFromEventCommands } from "./getTextFromCommand";
import { processCommonEvents, processTroopEvents } from "./rpg";

export interface ExtractedCommonEventText {
  eventId: number;
  commands: TextCommandParameter[];
}

export const extractCommonEventTexts = (
  commons: Data_CommonEvent<EventCommand2>[]
): ExtractedCommonEventText[] => {
  return processCommonEvents(
    commons,
    (
      page: { list: EventCommand2[] },
      pageIndex: number,
      { id }: { id: number }
    ) => ({
      eventId: id,
      commands: extractTextFromEventCommands(page.list),
    })
  );
};

export interface ExtractedBattleEventText {
  eventId: number;
  commands: TextCommandParameter[];
  pageIndex: number;
}

export const extractBattleEventTexts = (list: ReadonlyArray<Data_Troop>) => {
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
