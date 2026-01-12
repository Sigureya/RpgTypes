import type {
  BattleEventPage,
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";

export const replaceTroopTexts = (
  troop: Data_Troop,
  fn: (key: string) => string | undefined
): Data_Troop => {
  const pages = troop.pages.map(
    (page): BattleEventPage<EventCommand> => ({
      conditions: page.conditions,
      span: page.span,
      list: ccc(page.list, fn),
    })
  );
  return {
    ...troop,
    pages: pages,
  };
};

export const replaceCommonEventTexts = (
  commonEvent: Data_CommonEvent,
  fn: (key: string) => string | undefined
): Data_CommonEvent => {
  return {
    ...commonEvent,
    list: ccc(commonEvent.list, fn),
  };
};

const ccc = (
  list: ReadonlyArray<EventCommand>,
  fn: (key: string) => string | undefined
): EventCommand[] => {
  return list.map((c) => replaceEventCommandTexts(c, fn));
};
