import { describe, expect, test } from "vitest";
import type {
  SystemTestDataSource,
  TestDataSourceBundle,
} from "@RpgTypes/libs";
import type { RpgDataBundleHasText } from "@RpgTypes/rmmz";
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
import { makeTestTroopData } from "@RpgTypes/rmmz/makeTestData";
import { replaceRuntimeData } from "./replaceBundle";

const AUDIO_NAME = "AudioName";
const IMAGE_NAME = "ImageName";
const TEXT = "Text";
const SWITCHES_TEXT = "Switches";
const VARIABLES_TEXT = "Variables";

const makeTestData = (src: TestDataSourceBundle): RpgDataBundleHasText => ({
  system: makeTestSystemData(src),
  actors: [makeActorDataFromTestSoruce(src)],
  enemies: [makeEnemyDataFromTestSoruce(src)],
  weapons: [makeWeaponDataFromTestSoruce(src)],
  armors: [makeArmorDataFromTestSoruce(src)],
  classes: [makeClassDataFromTestSoruce(src)],
  items: [makeItemDataFromTestSoruce(src)],
  troops: [makeTestTroopData(src)],
  commonEvents: [],
  skills: [makeSkillDataFromTestSoruce(src)],
  states: [makeStateDataFromTestSoruce(src)],
});
