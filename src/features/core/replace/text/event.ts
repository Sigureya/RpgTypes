import type {
  BattleEventPage,
  Data_CommonEvent,
  Data_Troop,
  EventCommand2,
} from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";

export const replaceTroopTexts = (
  troop: Data_Troop<EventCommand2>,
  dic: ReadonlyMap<string, string>
): Data_Troop<EventCommand2> => {
  const pages = troop.pages.map(
    (page): BattleEventPage<EventCommand2> => ({
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
  commonEvent: Data_CommonEvent<EventCommand2>,
  dic: ReadonlyMap<string, string>
): Data_CommonEvent<EventCommand2> => {
  return {
    ...commonEvent,
    list: replaceEventCommandTexts(commonEvent.list, dic),
  };
};
