import type { ReadGameDataUnknown, ReadHandledResult } from "./resultType";
import type { DataReadErrors, DataReadErrorItem } from "./types";

export const correctErrors = (data: ReadGameDataUnknown): DataReadErrors => {
  return {
    main: mainReadErrors(data),
    map: data.mapFiles.invalidMaps.map(
      (m): DataReadErrorItem => ({
        fileName: m.filename,
        error: m.message,
      }),
    ),
  };
};

const mainReadErrors = (data: ReadGameDataUnknown): DataReadErrorItem[] => {
  const main: DataReadErrorItem[] = [
    data.actor,
    data.armor,
    data.classes,
    data.commonEvent,
    data.enemies,
    data.item,
    data.skill,
    data.state,
    data.troop,
    data.weapon,
    data.mapInfo,
  ]
    .filter((item: ReadHandledResult<unknown, null>) => !item.success)
    .map(
      (item): DataReadErrorItem => ({
        fileName: item.fileName,
        error: item.error,
      }),
    );

  if (data.system.system === null) {
    const system: DataReadErrorItem = {
      fileName: data.system.message,
      error: data.system.message,
    };
    return [system, ...main];
  }
  return main;
};
