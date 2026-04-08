import type { Data_Map, RpgDataBundle } from "@RpgTypes/rmmz";
import {
  FILENAME_ACTORS,
  FILENAME_CLASSES,
  FILENAME_ENEMIES,
  FILENAME_MAP_INFOS,
  FILENAME_WEAPONS,
  FILENAME_ANIMATIONS,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_SYSTEM,
  FILENAME_ARMORS,
  FILENAME_COMMON_EVENTS,
  FILENAME_TROOPS,
  FILENAME_TILESET,
} from "@RpgTypes/rmmz";

export const fakeFileRead = (
  filename: string,
  data: Partial<RpgDataBundle>,
  mapFiles: ReadonlyMap<number, Data_Map> = new Map(),
): string | undefined => {
  const m = mapXXX(mapFiles, filename);
  if (m) {
    return m;
  }
  if (data.mapInfos && filename.endsWith(FILENAME_MAP_INFOS)) {
    return JSON.stringify(data.mapInfos);
  }
  if (data.actors && filename.endsWith(FILENAME_ACTORS)) {
    return JSON.stringify(data.actors);
  }
  if (data.enemies && filename.endsWith(FILENAME_ENEMIES)) {
    return JSON.stringify(data.enemies);
  }
  if (data.weapons && filename.endsWith(FILENAME_WEAPONS)) {
    return JSON.stringify(data.weapons);
  }
  if (data.classes && filename.endsWith(FILENAME_CLASSES)) {
    return JSON.stringify(data.classes);
  }
  if (data.armors && filename.endsWith(FILENAME_ARMORS)) {
    return JSON.stringify(data.armors);
  }
  if (data.items && filename.endsWith(FILENAME_ITEMS)) {
    return JSON.stringify(data.items);
  }
  if (data.troops && filename.endsWith(FILENAME_TROOPS)) {
    return JSON.stringify(data.troops);
  }
  if (data.commonEvents && filename.endsWith(FILENAME_COMMON_EVENTS)) {
    return JSON.stringify(data.commonEvents);
  }
  if (data.skills && filename.endsWith(FILENAME_SKILLS)) {
    return JSON.stringify(data.skills);
  }
  if (data.states && filename.endsWith(FILENAME_STATES)) {
    return JSON.stringify(data.states);
  }
  if (data.animations && filename.endsWith(FILENAME_ANIMATIONS)) {
    return JSON.stringify(data.animations);
  }
  if (data.system && filename.endsWith(FILENAME_SYSTEM)) {
    return JSON.stringify(data.system);
  }
  if (data.tilesets && filename.endsWith(FILENAME_TILESET)) {
    return JSON.stringify(data.tilesets);
  }

  return undefined;
};

const mapXXX = (
  mapFiles: ReadonlyMap<number, Data_Map>,
  filename: string,
): string | undefined => {
  if (mapFiles.size === 0) {
    return undefined;
  }
  const m = filename.match(/Map(\d{4}).json$/);
  if (m) {
    const id = Number.parseInt(m[1], 10);
    if (mapFiles.has(id)) {
      return JSON.stringify(mapFiles.get(id));
    }
  }
  return undefined;
};
