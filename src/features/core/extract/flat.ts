import type { ExtractedTextItem } from "@RpgTypes/libs";
import type { ExtractedTextBundle } from "./text";
import type { ExtractedTextFinalWithNotes } from "./types";

export const createDuplicateMap = (
  list: readonly ExtractedTextItem<unknown>[],
): Map<string, number> => {
  const map = new Map<string, number>();
  // eslint-disable-next-line @functional/no-return-void
  list.forEach((item, index) => {
    if (!map.has(item.baseText)) {
      map.set(item.baseText, index);
    }
  });
  return map;
};

export const flattenExtractedItems = <UUID>(
  data: ExtractedTextFinalWithNotes<UUID>,
): ExtractedTextItem<UUID>[] => {
  const temp: ExtractedTextItem<UUID>[][][][] = [
    convertPair(data.actors.texts),
    convertPair(data.skills),
    convertPair(data.items),
    convertPair(data.weapons),
    convertPair(data.armors),
    convertPair(data.classes),
    convertPair(data.states),
    convertPair(data.enemies),
  ];

  return [
    ...data.system.texts,
    ...temp.flat(3),
    ...data.commonEvents,
    ...data.map,
    ...data.troops,
    ...data.pluginParams.flat(),
  ];
};

const convertPair = <T, UUID>(
  texts: readonly ExtractedTextBundle<T, UUID>[],
): ExtractedTextItem<UUID>[][][] => {
  return texts.map((b) => [b.main, b.note]);
};
