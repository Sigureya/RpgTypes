import type { IdentifiedItems } from "@RpgTypes/libs";
import {
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILENAME_ANIMATIONS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_STATES,
} from "./arrayData/constants";
import type { MapFileNameWithExt } from "./map";
import type { RowGameData } from "./resultType";
import type { DataFileNames } from "./types";

const writeGameData = (
  data: RowGameData,
  fileWriteFn: (
    filename: DataFileNames | MapFileNameWithExt,
    json: string,
  ) => Promise<void>,
) => {
  return [
    xxx(FILENAME_ACTORS, data.actor.data, fileWriteFn),
    xxx(FILENAME_ARMORS, data.armor.data, fileWriteFn),
  ];
};

const xxx = <T>(
  filename: DataFileNames,
  list: ReadonlyArray<T>,
  fileWriteFn: (
    filename: DataFileNames | MapFileNameWithExt,
    json: string,
  ) => Promise<void>,
): Promise<void> => {
  const items: IdentifiedItems<T> = [null, ...list];
  const json = JSON.stringify(items);
  return fileWriteFn(filename, json);
};
