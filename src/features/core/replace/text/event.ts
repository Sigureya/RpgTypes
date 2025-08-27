import type {
  BattleEventPage,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";

export const replaceTroopTexts = (
  troop: Data_Troop<EventCommand>,
  dic: ReadonlyMap<string, string>
): Data_Troop<EventCommand> => {
  const pages = troop.pages.map(
    (page): BattleEventPage<EventCommand> => ({
      list: replaceEventCommandTexts(page.list, dic),
      conditions: page.conditions,
      span: page.span,
    })
  );
  return {
    ...troop,
    pages: pages,
  };
};

export const replaceCommonEventTexts = (
  commonEvent: Data_CommonEvent<EventCommand>,
  dic: ReadonlyMap<string, string>
): Data_CommonEvent<EventCommand> => {
  return {
    ...commonEvent,
    list: replaceEventCommandTexts(commonEvent.list, dic),
  };
};
