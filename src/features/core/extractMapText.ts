import type { Data_Map } from "@RpgTypes/rmmz";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { extractTextFromEventCommands } from "./getTextFromCommand";
import { collectMapEvents } from "./rpg";

const xx = (map: Data_Map) => {
  return collectMapEvents(map, (page, pageIndex, event) => {
    const texts = extractTextFromEventCommands(page.list);
    return [
      {
        eventId: event.id,
        pageIndex,
        texts,
      },
    ];
  });
};

export interface ExtractedEventText {
  eventId: number;
  pageIndex: number;
  commands: TextCommandParameter[];
}
