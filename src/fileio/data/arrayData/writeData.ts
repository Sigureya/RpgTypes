import type { IdentifiedItems } from "@RpgTypes/libs";
import {
  FILENAME_ACTORS,
  FILENAME_ANIMATIONS,
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_TILESET,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
} from "./constants/fileNames";
import type { MainDataIdentifiedItems, MainDataFileNames } from "./types";

const writeMainDataFile = <T>(
  filename: MainDataFileNames,
  items: IdentifiedItems<T>,
  fileWriteFn: (filename: MainDataFileNames, json: string) => Promise<void>,
): Promise<void> => {
  const json = JSON.stringify(items);
  return fileWriteFn(filename, json);
};

export const writeMainData = (
  data: MainDataIdentifiedItems,
  fileWriteFn: (filename: MainDataFileNames, json: string) => Promise<void>,
): Promise<void[]> => {
  return Promise.all([
    writeMainDataFile(FILENAME_ACTORS, data.actors, fileWriteFn),
    writeMainDataFile(FILENAME_CLASSES, data.classes, fileWriteFn),
    writeMainDataFile(FILENAME_SKILLS, data.skills, fileWriteFn),
    writeMainDataFile(FILENAME_ITEMS, data.items, fileWriteFn),
    writeMainDataFile(FILENAME_WEAPONS, data.weapons, fileWriteFn),
    writeMainDataFile(FILENAME_ARMORS, data.armors, fileWriteFn),
    writeMainDataFile(FILENAME_ENEMIES, data.enemies, fileWriteFn),
    writeMainDataFile(FILENAME_TROOPS, data.troops, fileWriteFn),
    writeMainDataFile(FILENAME_STATES, data.states, fileWriteFn),
    writeMainDataFile(FILENAME_ANIMATIONS, data.animations, fileWriteFn),
    writeMainDataFile(FILENAME_TILESET, data.tilesets, fileWriteFn),
    writeMainDataFile(FILENAME_COMMON_EVENTS, data.commonEvents, fileWriteFn),
    writeMainDataFile(FILENAME_MAP_INFOS, data.mapInfos, fileWriteFn),
  ]);
};
