import type {
  BattleEventPage,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";

export const replaceTroopTexts = (
  troop: Data_Troop,
  dic: ReadonlyMap<string, string>
): Data_Troop => {
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
  commonEvent: Data_CommonEvent,
  dic: ReadonlyMap<string, string>
): Data_CommonEvent => {
  return {
    ...commonEvent,
    list: replaceEventCommandTexts(commonEvent.list, dic),
  };
};
