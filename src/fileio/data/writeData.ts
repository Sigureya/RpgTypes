import type { IdentifiedItems } from "@RpgTypes/libs";
import type { Data_Map, RpgDataBundle } from "@RpgTypes/rmmz";
import type { MainDataIdentifiedItems } from "./arrayData";
import { writeMainData } from "./arrayData";
import type { MapBatchReadResult, MapFileNameWithExt } from "./map";
import { writeMapFiles } from "./map";
import type { RawGameData } from "./resultType";
import { FILENAME_SYSTEM } from "./system";
import type { DataFileNames } from "./types";

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
    actors: toIdentifiedItems(data.actor.data),
    classes: toIdentifiedItems(data.classes.data),
    skills: toIdentifiedItems(data.skill.data),
    items: toIdentifiedItems(data.item.data),
    weapons: toIdentifiedItems(data.weapon.data),
    armors: toIdentifiedItems(data.armor.data),
    enemies: toIdentifiedItems(data.enemies.data),
    troops: toIdentifiedItems(data.troop.data),
    states: toIdentifiedItems(data.state.data),
    animations: toIdentifiedItems(data.animations.data),
    tilesets: toIdentifiedItems(data.tilesets.data),
    commonEvents: toIdentifiedItems(data.commonEvent.data),
    mapInfos: toIdentifiedItems(data.mapInfo.data),
  };
};
