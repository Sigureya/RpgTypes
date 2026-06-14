import type { ExtractedTextItem } from "@RpgTypes/libs";
import { SHOW_MESSAGE_BODY } from "@RpgTypes/libs";
import { isCtrlCharOnly } from "@RpgTypes/rmmz";
import type {
  MessageCommandParameter,
  TextCommandParameter,
} from "./eventCommand";
import type { ExtractedRawGameDataEventTexts } from "./types";

export const extractSpeakerTexts = <T>(
  data: ExtractedRawGameDataEventTexts,
  hashFn: (text: string) => T,
): ExtractedTextItem<T>[] => {
  const commands = collectTextCommands(data);
  return collectSpeakerNames(commands).map(
    (speaker): ExtractedTextItem<T> => ({
      filename: "",
      id: 0,
      uuid: hashFn(speaker),
      baseText: speaker,
      kind: "speaker",
      dataKey: "speaker",
      otherData: [],
    }),
  );
};

export const collectTextCommands = (
  data: ExtractedRawGameDataEventTexts,
): TextCommandParameter[] => {
  return [
    ...data.eventData.commonEvents.flatMap((event) => event.commands),
    ...data.eventData.troops.flatMap((troop) => troop.commands),
    ...data.mapFiles.validMaps.flatMap((map) =>
      map.map.events.flatMap((event) => event.commands),
    ),
  ];
};

const collectSpeakerNames = (
  commands: ReadonlyArray<TextCommandParameter>,
): string[] => {
  const list = commands
    .filter(isSpeakerMessageCommand)
    .map((command) => command.speaker.trimEnd());
  return Array.from(new Set(list));
};

const isSpeakerMessageCommand = (
  command: TextCommandParameter,
): command is MessageCommandParameter => {
  if (command.code !== SHOW_MESSAGE_BODY) {
    return false;
  }

  if (!command.speaker) {
    return false;
  }

  if (isCtrlCharOnly(command.speaker)) {
    return false;
  }

  return true;
};
