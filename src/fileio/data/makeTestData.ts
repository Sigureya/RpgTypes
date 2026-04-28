import {
  makeActorDataFromTestSoruce,
  makeArmorDataFromTestSoruce,
  makeClassDataFromTestSoruce,
  makeCommonEventData,
  makeEnemyDataFromTestSoruce,
  makeItemDataFromTestSoruce,
  makeSkillDataFromTestSoruce,
  makeStateDataFromTestSoruce,
  makeTestSystemData,
  makeTroopData,
  makeWeaponDataFromTestSoruce,
} from "@RpgTypes/rmmz";
import type { ReadArrayResult } from "./arrayData";
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
} from "./arrayData";
import type { RawGameData } from "./resultType";
import type { TestRawDataSource } from "./types";

export const makeMockDataBundle = (soruce: TestRawDataSource): RawGameData => {
  const { message } = soruce;
  return {
    actors: makeReadResult(
      makeActorDataFromTestSoruce(soruce),
      message,
      FILENAME_ACTORS,
    ),
    classes: makeReadResult(
      makeClassDataFromTestSoruce(soruce),
      message,
      FILENAME_CLASSES,
    ),
    armors: makeReadResult(
      makeArmorDataFromTestSoruce(soruce),
      message,
      FILENAME_ARMORS,
    ),
    weapons: makeReadResult(
      makeWeaponDataFromTestSoruce(soruce),
      message,
      FILENAME_WEAPONS,
    ),
    items: makeReadResult(
      makeItemDataFromTestSoruce(soruce),
      message,
      FILENAME_ITEMS,
    ),
    enemies: makeReadResult(
      makeEnemyDataFromTestSoruce(soruce),
      message,
      FILENAME_ENEMIES,
    ),
    skills: makeReadResult(
      makeSkillDataFromTestSoruce(soruce),
      message,
      FILENAME_SKILLS,
    ),
    states: makeReadResult(
      makeStateDataFromTestSoruce(soruce),
      message,
      FILENAME_STATES,
    ),
    troops: makeReadResult(
      makeTroopData({
        id: 1,
        name: soruce.nonReplaceableText,
      }),
      message,
      FILENAME_TROOPS,
    ),
    commonEvents: makeReadResult(
      makeCommonEventData({
        id: 1,
        name: soruce.nonReplaceableText,
      }),
      message,
      FILENAME_COMMON_EVENTS,
    ),
    mapInfos: makeEmptyReadResult(message, FILENAME_MAP_INFOS),
    animations: makeEmptyReadResult(message, FILENAME_ANIMATIONS),
    tilesets: makeEmptyReadResult(message, FILENAME_TILESET),
    system: {
      system: makeTestSystemData(soruce),
      message: message,
    },
    mapFiles: {
      info: { success: true },
      validMaps: [],
      invalidMaps: [],
    },
  };
};

const makeEmptyReadResult = <T>(
  msg: string,
  filename: string,
): ReadArrayResult<T> => ({
  data: [],
  error: msg,
  fileName: filename,
  success: true,
});

const makeReadResult = <T>(
  data: T,
  errorMessage: string,
  fileName: string,
): ReadArrayResult<T> => ({
  data: [data],
  error: errorMessage,
  fileName: fileName,
  success: true,
});
