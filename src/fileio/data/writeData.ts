import type { IdentifiedItems } from "@RpgTypes/libs";
import type { Data_Map, RpgDataBundle } from "@RpgTypes/rmmz";
import type {
  MainDataFileEntry,
  MainDataFileNames,
  MainDataFileUnion,
  MainDataIdentifiedItems,
} from "./arrayData";
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
  writeMainData,
} from "./arrayData";
import type { MapBatchReadResult, MapFileNameWithExt } from "./map";
import { writeMapFiles } from "./map";
import type { RawGameData } from "./resultType";
import { FILENAME_SYSTEM } from "./system";
import type { DataFileNames } from "./types";

export const rawGameDataToMainDataFileEntries = (
  data: RawGameData,
): MainDataFileUnion[] => {
  return [
    xxxx(FILENAME_ACTORS, data.actors.data),
    xxxx(FILENAME_CLASSES, data.classes.data),
    xxxx(FILENAME_SKILLS, data.skills.data),
    xxxx(FILENAME_ITEMS, data.items.data),
    xxxx(FILENAME_WEAPONS, data.weapons.data),
    xxxx(FILENAME_ARMORS, data.armors.data),
    xxxx(FILENAME_ENEMIES, data.enemies.data),
    xxxx(FILENAME_TROOPS, data.troops.data),
    xxxx(FILENAME_STATES, data.states.data),
    xxxx(FILENAME_ANIMATIONS, data.animations.data),
    xxxx(FILENAME_TILESET, data.tilesets.data),
    xxxx(FILENAME_COMMON_EVENTS, data.commonEvents.data),
    xxxx(FILENAME_MAP_INFOS, data.mapInfos.data),
  ];
};

const xxxx = <T>(
  filename: MainDataFileNames,
  data: ReadonlyArray<T>,
): MainDataFileEntry<T> => {
  return {
    filename,
    data: [null, ...data],
  };
};

export const writeSystemData = (
  system: RpgDataBundle["system"],
  fn: (
    filename: DataFileNames | MapFileNameWithExt,
    json: string,
  ) => Promise<void>,
): Promise<void> => {
  return fn(FILENAME_SYSTEM, JSON.stringify(system));
};

export const writeBundleData = (
  bundle: RpgDataBundle,
  map: MapBatchReadResult<Data_Map>,
  fn: (
    filename: DataFileNames | MapFileNameWithExt,
    json: string,
  ) => Promise<void>,
): Promise<void> => {
  return Promise.all([
    writeMainData(bundleToMainData(bundle), fn),
    writeSystemData(bundle.system, fn),
    writeMapFiles(map.validMaps, fn),
  ]).then(() => undefined);
};

export const writeRawGameData = (
  data: RawGameData,
  fileWriteFn: (
    filename: DataFileNames | MapFileNameWithExt,
    json: string,
  ) => Promise<void>,
): Promise<void> => {
  const writes: Promise<unknown>[] = [
    writeMainData(rawGameDataToMainData(data), fileWriteFn),
    writeMapFiles(data.mapFiles.validMaps, fileWriteFn),
  ];

  if (data.system.system) {
    writes.push(writeSystemData(data.system.system, fileWriteFn));
  }

  return Promise.all(writes).then(() => undefined);
};

const toIdentifiedItems = <T>(list: readonly T[]): IdentifiedItems<T> => {
  return [null, ...list];
};

const bundleToMainData = (bundle: RpgDataBundle): MainDataIdentifiedItems => {
  return {
    actors: toIdentifiedItems(bundle.actors),
    classes: toIdentifiedItems(bundle.classes),
    skills: toIdentifiedItems(bundle.skills),
    items: toIdentifiedItems(bundle.items),
    weapons: toIdentifiedItems(bundle.weapons),
    armors: toIdentifiedItems(bundle.armors),
    enemies: toIdentifiedItems(bundle.enemies),
    troops: toIdentifiedItems(bundle.troops),
    states: toIdentifiedItems(bundle.states),
    animations: toIdentifiedItems(bundle.animations),
    tilesets: toIdentifiedItems(bundle.tilesets),
    commonEvents: toIdentifiedItems(bundle.commonEvents),
    mapInfos: toIdentifiedItems(bundle.mapInfos),
  };
};

const rawGameDataToMainData = (data: RawGameData): MainDataIdentifiedItems => {
  return {
    actors: toIdentifiedItems(data.actors.data),
    classes: toIdentifiedItems(data.classes.data),
    skills: toIdentifiedItems(data.skills.data),
    items: toIdentifiedItems(data.items.data),
    weapons: toIdentifiedItems(data.weapons.data),
    armors: toIdentifiedItems(data.armors.data),
    enemies: toIdentifiedItems(data.enemies.data),
    troops: toIdentifiedItems(data.troops.data),
    states: toIdentifiedItems(data.states.data),
    animations: toIdentifiedItems(data.animations.data),
    tilesets: toIdentifiedItems(data.tilesets.data),
    commonEvents: toIdentifiedItems(data.commonEvents.data),
    mapInfos: toIdentifiedItems(data.mapInfos.data),
  };
};
