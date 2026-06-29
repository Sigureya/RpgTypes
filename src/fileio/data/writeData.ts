import type { IdentifiedItems } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz";
import type { Data_Map, MapFileInfo, RpgDataBundle } from "@RpgTypes/rmmz";
import type {
  MainDataFileEntry,
  MainDataFileNames,
  MainDataFileUnion,
  MainDataIdentifiedItems,
  MapDataFileEntry,
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
import type { RawGameData, RawGameData2 } from "./resultType";
import type { SystemDataFileEntry } from "./system";
import { FILENAME_SYSTEM } from "./system";
import type { DataFileNames } from "./types";

export const rawGameDataToMainDataFileEntries = (
  data: RawGameData2<EventCommand>,
): (MainDataFileUnion | SystemDataFileEntry)[] => {
  return [
    // {
    //   filename: FILENAME_SYSTEM,
    //   data: data.system.system ? data.system.system : makeSystemDataFn(),
    // },
    createFilePayload(FILENAME_ACTORS, data.actors.data),
    createFilePayload(FILENAME_CLASSES, data.classes.data),
    createFilePayload(FILENAME_SKILLS, data.skills.data),
    createFilePayload(FILENAME_ITEMS, data.items.data),
    createFilePayload(FILENAME_WEAPONS, data.weapons.data),
    createFilePayload(FILENAME_ARMORS, data.armors.data),
    createFilePayload(FILENAME_ENEMIES, data.enemies.data),
    createFilePayload(FILENAME_TROOPS, data.troops.data),
    createFilePayload(FILENAME_STATES, data.states.data),
    createFilePayload(FILENAME_ANIMATIONS, data.animations.data),
    createFilePayload(FILENAME_TILESET, data.tilesets.data),
    createFilePayload(FILENAME_COMMON_EVENTS, data.commonEvents.data),
    createFilePayload(FILENAME_MAP_INFOS, data.mapInfos.data),
    ...createMapPayload(data.mapFiles.validMaps),
  ];
};

const createMapPayload = (
  maps: ReadonlyArray<MapFileInfo>,
): MapDataFileEntry[] => {
  return maps.map((map) => ({
    filename: `${map.filename}.json`,
    data: map.map,
  }));
};

const createFilePayload = <T>(
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
