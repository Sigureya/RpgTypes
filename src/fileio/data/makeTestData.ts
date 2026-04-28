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
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
} from "./arrayData";
import type { RawGameData } from "./resultType";
import type { TestRawDataSource } from "./types";

const NON_REPLACEABLE_TEXT = "";
const VALIABLE_TEXT = "Variables";
const SWITCHES_TEXT = "Switches";

export const makeMockDataBundle = (soruce: TestRawDataSource): RawGameData => {
  const { text, image, message } = soruce;
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
        name: NON_REPLACEABLE_TEXT,
      }),
      message,
      FILENAME_TROOPS,
    ),
    commonEvents: makeReadResult(
      makeCommonEventData({
        id: 1,
        name: NON_REPLACEABLE_TEXT,
      }),
      message,
      FILENAME_COMMON_EVENTS,
    ),
    mapInfos: makeEmptyReadResult(),
    animations: makeEmptyReadResult(),
    tilesets: makeEmptyReadResult(),
    system: {
      system: makeTestSystemData({
        text,
        image,
        audio: "AudioName",
        switches: SWITCHES_TEXT,
        variables: VALIABLE_TEXT,
      }),
      message: message,
    },
    mapFiles: {
      info: { success: true },
      validMaps: [],
      invalidMaps: [],
    },
  };
};

const makeEmptyReadResult = <T>(): ReadArrayResult<T> => ({
  data: [],
  error: "",
  fileName: "mockFile",
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
