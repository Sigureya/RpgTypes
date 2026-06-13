import { describe, expect, test } from "vitest";
import type { TestDataSourceBundle } from "@RpgTypes/libs";
import type { RpgDataBundleHasText } from "@RpgTypes/rmmz";
import {
  makeActorDataFromTestSoruce,
  makeArmorDataFromTestSoruce,
  makeClassDataFromTestSoruce,
  makeEnemyDataFromTestSoruce,
  makeItemDataFromTestSoruce,
  makeSkillDataFromTestSoruce,
  makeStateDataFromTestSoruce,
  makeTestSystemData,
  makeWeaponDataFromTestSoruce,
} from "@RpgTypes/rmmz";
import {
  makeTestCommonEventData,
  makeTestTroopData,
} from "@RpgTypes/rmmz/makeTestData";
import type { RuntimeDictionary } from "./core/extract";
import { replaceRuntimeData } from "./replace";

const AUDIO_NAME = "AudioName";
const IMAGE_NAME = "ImageName";
const TEXT = "Text";
const SWITCHES_TEXT = "Switches";
const VARIABLES_TEXT = "Variables";
const NON_REPLACEABLE_TEXT = "NonReplaceableText";
const MESSAGE_TEXT = "Message";
const NOTE_TEXT = "<Hexproof:呪禁><Target:Text>";
const NEW_NOTE_TEXT = ["<Hexproof:呪禁>", "<Target:New-Text>"].join("\n");
const NEW_TEXT = "New-Text";
const SYSTEM_TEXT = "SystemText";

const makeTestData = (src: TestDataSourceBundle): RpgDataBundleHasText => ({
  system: makeTestSystemData(src),
  actors: [makeActorDataFromTestSoruce(src)],
  enemies: [makeEnemyDataFromTestSoruce(src)],
  weapons: [makeWeaponDataFromTestSoruce(src)],
  armors: [makeArmorDataFromTestSoruce(src)],
  classes: [makeClassDataFromTestSoruce(src)],
  items: [makeItemDataFromTestSoruce(src)],
  troops: [makeTestTroopData(src)],
  commonEvents: [makeTestCommonEventData(src)],
  skills: [makeSkillDataFromTestSoruce(src)],
  states: [makeStateDataFromTestSoruce(src)],
});

describe("replaceRuntimeData", () => {
  test("", () => {
    const input = makeTestData({
      text: TEXT,
      image: IMAGE_NAME,
      audio: AUDIO_NAME,
      switches: SWITCHES_TEXT,
      variables: VARIABLES_TEXT,
      message: MESSAGE_TEXT,
      nonReplaceableText: NON_REPLACEABLE_TEXT,
      note: NOTE_TEXT,
      systemText: SYSTEM_TEXT,
    });
    const runtimeDictionaryData: RuntimeDictionary<string> = {
      targetNoteKeys: new Set(["Target"]),
      textDictionary: new Map([[TEXT, NEW_TEXT]]),
      actorTextDictionary: new Map(),
    };

    const result = replaceRuntimeData(input, runtimeDictionaryData);
    const expected: RpgDataBundleHasText = makeTestData({
      text: NEW_TEXT,
      image: IMAGE_NAME,
      audio: AUDIO_NAME,
      switches: SWITCHES_TEXT,
      variables: VARIABLES_TEXT,
      message: MESSAGE_TEXT,
      nonReplaceableText: NON_REPLACEABLE_TEXT,
      note: NEW_NOTE_TEXT,
      systemText: SYSTEM_TEXT,
    });
    expect(result.actors).toEqual(expected.actors);
    expect(result.armors).toEqual(expected.armors);
    expect(result.classes).toEqual(expected.classes);
    expect(result.enemies).toEqual(expected.enemies);
    expect(result.items).toEqual(expected.items);
    expect(result.skills).toEqual(expected.skills);
    expect(result.states).toEqual(expected.states);
    expect(result.troops).toEqual(expected.troops);
    expect(result.commonEvents).toEqual(expected.commonEvents);
  });
});
