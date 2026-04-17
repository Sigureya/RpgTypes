import type { IdentifiedItems } from "@RpgTypes/libs";
import type {
  Data_Actor,
  Data_Animation,
  Data_Armor,
  Data_Class,
  Data_CommonEvent,
  Data_Enemy,
  Data_Item,
  Data_MapInfo,
  Data_Skill,
  Data_State,
  Data_Tileset,
  Data_Troop,
  Data_Weapon,
} from "@RpgTypes/rmmz";
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
} from "./constants";
import type { MainDataFileNames } from "./types";

export interface DDDD {
  actors: IdentifiedItems<Data_Actor>;
  classes: IdentifiedItems<Data_Class>;
  skills: IdentifiedItems<Data_Skill>;
  items: IdentifiedItems<Data_Item>;
  weapons: IdentifiedItems<Data_Weapon>;
  armors: IdentifiedItems<Data_Armor>;
  enemies: IdentifiedItems<Data_Enemy>;
  troops: IdentifiedItems<Data_Troop>;
  states: IdentifiedItems<Data_State>;
  animations: IdentifiedItems<Data_Animation>;
  tilesets: IdentifiedItems<Data_Tileset>;
  commonEvents: IdentifiedItems<Data_CommonEvent>;
  mapInfos: IdentifiedItems<Data_MapInfo>;
}

export const writeData = <T>(
  filename: MainDataFileNames,
  items: IdentifiedItems<T>,
  fileWriteFn: (filename: MainDataFileNames, json: string) => Promise<void>,
): Promise<void> => {
  const json = JSON.stringify(items);
  return fileWriteFn(filename, json);
};

export const writeMainData = (
  data: DDDD,
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
