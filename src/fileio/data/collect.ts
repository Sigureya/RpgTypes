import type { ReadAllDataFieldsUnknown, ReadHandledResult } from "./resultType";
import type { DataReadErrors, DataReadErrorIte } from "./types";

export const correctErrors = (
  data: ReadAllDataFieldsUnknown,
): DataReadErrors => {
  return {
    main: mainError(data),
    map: data.mapFiles.invalidMaps.map(
      (m): DataReadErrorIte => ({
        fileName: m.filename,
        error: m.message,
      }),
    ),
  };
};

const mainError = (data: ReadAllDataFieldsUnknown): DataReadErrorIte[] => {
  const main: DataReadErrorIte[] = [
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
      (item): DataReadErrorIte => ({
        fileName: item.fileName,
        error: item.error,
      }),
    );

  if (data.system.system === null) {
    const system: DataReadErrorIte = {
      fileName: data.system.message,
      error: data.system.message,
    };
    return [system, ...main];
  }
  return main;
};
