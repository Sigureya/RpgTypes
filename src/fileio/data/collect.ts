import type { ReadGameDataUnknown, ReadHandledResult } from "./resultType";
import type { DataReadErrors, DataReadErrorItem } from "./types";

export const summarizeReadErrors = (
  data: ReadGameDataUnknown,
): DataReadErrors => {
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
    data.actors,
    data.armors,
    data.classes,
    data.commonEvents,
    data.enemies,
    data.items,
    data.skills,
    data.states,
    data.troops,
    data.weapons,
    data.mapInfos,
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
