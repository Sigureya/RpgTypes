import type {
  ReadAllGameDataResultUnknown,
  ReadHandledResult,
} from "./resultType";
import type { DataReadErrors, ErrorItem } from "./types";

export const correctError = (
  data: ReadAllGameDataResultUnknown,
): DataReadErrors => {
  return {
    main: mainError(data),
    map: data.mapFiles.invalidMaps.map(
      (m): ErrorItem => ({
        fileName: m.filename,
        error: m.message,
      }),
    ),
  };
};

const mainError = (data: ReadAllGameDataResultUnknown): ErrorItem[] => {
  const main: ErrorItem[] = [
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
    .filter((item: ReadHandledResult<unknown, null>) => !item.succcess)
    .map((item): ErrorItem => ({ fileName: item.fileName, error: item.error }));

  if (data.system.system === null) {
    const system: ErrorItem = {
      fileName: data.system.message,
      error: data.system.message,
    };
    return [system, ...main];
  }
  return main;
};
