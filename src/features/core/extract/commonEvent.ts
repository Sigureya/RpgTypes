import type { ExtractedCommandItem, ExtractedTroopTextItem } from "./sss/types";
import type {
  TextCommandParameter,
  ExtractedCommonEventText,
  ExtractedBattleEventText,
} from "./text";
import { convertCommandInfo } from "./text/eventCommand/conv";

export const ccedFromList = <UUID>(
  filename: string,
  cc: ReadonlyArray<ExtractedCommonEventText>,
  uuidGenFunc: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedCommandItem<UUID>[] => {
  return cc.flatMap((c) => cced(filename, c, uuidGenFunc, commandNameFn));
};

const cced = <UUID>(
  filename: string,
  cc: ExtractedCommonEventText,
  uuidGenFunc: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedCommandItem<UUID>[] => {
  return cc.commands
    .filter(isValidCommandText)
    .map(
      (command): ExtractedCommandItem<UUID> =>
        convertCommandInfo(
          command,
          cc.eventId,
          filename,
          commandNameFn,
          uuidGenFunc,
          [cc.name],
        ),
    );
};

export const ctx = <UUID>(
  texts: ExtractedBattleEventText[],
  filename: string,
  commandNameFn: (command: TextCommandParameter) => string,
  uuidGenFunc: (text: string) => UUID,
): ExtractedTroopTextItem<UUID>[] => {
  return texts
    .filter((item) => item.commands.length > 0)
    .flatMap((item): ExtractedTroopTextItem<UUID>[] => {
      const pageIndex = `page:${item.pageIndex + 1}` as const;
      return item.commands.map(
        (commnad): ExtractedTroopTextItem<UUID> =>
          convertCommandInfo(
            commnad,
            item.eventId,
            filename,
            commandNameFn,
            uuidGenFunc,
            [pageIndex],
          ),
      );
    });
};

export const isValidCommandText = (command: TextCommandParameter): boolean => {
  return command.value.length > 0;
};
