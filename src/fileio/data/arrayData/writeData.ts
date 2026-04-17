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

const writeData = <T>(
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
    writeData(FILENAME_ACTORS, data.actors, fileWriteFn),
    writeData(FILENAME_CLASSES, data.classes, fileWriteFn),
    writeData(FILENAME_SKILLS, data.skills, fileWriteFn),
    writeData(FILENAME_ITEMS, data.items, fileWriteFn),
    writeData(FILENAME_WEAPONS, data.weapons, fileWriteFn),
    writeData(FILENAME_ARMORS, data.armors, fileWriteFn),
    writeData(FILENAME_ENEMIES, data.enemies, fileWriteFn),
    writeData(FILENAME_TROOPS, data.troops, fileWriteFn),
    writeData(FILENAME_STATES, data.states, fileWriteFn),
    writeData(FILENAME_ANIMATIONS, data.animations, fileWriteFn),
    writeData(FILENAME_TILESET, data.tilesets, fileWriteFn),
    writeData(FILENAME_COMMON_EVENTS, data.commonEvents, fileWriteFn),
    writeData(FILENAME_MAP_INFOS, data.mapInfos, fileWriteFn),
  ]);
};
