import type { AudioFileParams } from "src/utils";
import { makeAudioFileParams } from "src/utils";
import {
  makeBooleanOptions,
  makeDataNames,
  makeItemCategories,
  makeMenuCommandsEnabled,
  makeParamNamesArray,
  makeSoundsArray,
  makeSystemAdvanced,
  makeTermsBasic,
  makeTermsCommand,
  makeTermsMessages,
  makeVehicleData,
} from "./core";
import type {
  System_BooleanGameOptions,
  System_RPG_DataNames,
  System_ImageSize,
  System_Terms,
  System_TermsPartial,
  Terms_Messages,
} from "./core";
import type { EditorSettings, TestBattler } from "./gameEdit";
import { makeEditorSetting } from "./gameEdit";
import type { Data_System } from "./system";
import type { SystemDataFragments } from "./systemSegments";
import { isImageSize, isTestBattler } from "./validate";

export const makeSystemData = (
  fragments: Partial<SystemDataFragments>
): Data_System => {
  const size = cloneSize(fragments.size);

  return {
    ...(makeBooleanOptions(fragments.options) satisfies Record<
      string & keyof System_BooleanGameOptions,
      boolean
    >),
    currencyUnit: fragments.texts?.currencyUnit ?? "",
    gameTitle: fragments.texts?.gameTitle ?? "",
    sounds: makeSoundsArray(fragments.sounds) satisfies AudioFileParams[],
    editor: makeEditorSetting(fragments.editing) satisfies Record<
      keyof EditorSettings,
      number
    >,
    advanced: makeSystemAdvanced(fragments.advanced),
    title1Name: fragments.images?.title1Name ?? "",
    title2Name: fragments.images?.title2Name ?? "",
    ...(makeDataNames(fragments.dataNames ?? {}) satisfies Record<
      keyof System_RPG_DataNames,
      string[]
    >),
    magicSkills: cloneNumberArray([]),
    airship: makeVehicleData(fragments.vehicles?.airship),
    boat: makeVehicleData(fragments.vehicles?.boat),
    ship: makeVehicleData(fragments.vehicles?.ship),
    defeatMe: makeAudioFileParams(fragments.me?.defeatMe),
    gameoverMe: makeAudioFileParams(fragments.me?.gameoverMe),
    titleBgm: makeAudioFileParams(fragments.bgm?.titleBgm),

    tileSize: size.tileSize,
    faceSize: size.faceSize,
    iconSize: size.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: fragments.battleTest?.battleback1Name ?? "",
    battleback2Name: fragments.battleTest?.battleback2Name ?? "",
    testTroopId: fragments.battleTest?.testTroopId ?? 0,
    testBattlers: cloneObjectArray(
      fragments.battleTest?.testBattlers,
      cloneTestBattler
    ),
    battleBgm: makeAudioFileParams(fragments.bgm?.battleBgm),
    victoryMe: makeAudioFileParams(fragments.me?.victoryMe),
    editMapId: fragments.editorTemporary?.editMapId ?? 0,
    battlerName: fragments.editorTemporary?.battlerName ?? "",
    locale: "",
    startMapId: fragments.gameInit?.startMapId ?? 0,
    startX: fragments.gameInit?.startX ?? 0,
    startY: fragments.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: makeTerms(fragments.terms ?? {}) satisfies System_Terms,
    itemCategories: makeItemCategories(
      fragments.itemCategories
    ) satisfies boolean[],
    partyMembersArray: cloneNumberArray(fragments.gameInit?.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: makeMenuCommandsEnabled(
      fragments.menuComamnds
    ) satisfies boolean[],
  };
};

export default makeSystemData;

const makeTerms = (terms: System_TermsPartial): System_Terms => {
  return {
    basic: makeTermsBasic(terms.basic ?? {}) satisfies string[],
    commands: makeTermsCommand(terms.commands ?? {}) satisfies string[],
    params: makeParamNamesArray(terms.params ?? {}) satisfies string[],
    messages: makeTermsMessages(terms.messages ?? {}) satisfies Record<
      keyof Terms_Messages,
      string
    >,
  };
};

const cloneNumberArray = (array?: ReadonlyArray<number>) => {
  return array ? [...array] : [];
};

const cloneSize = (data: unknown): System_ImageSize => {
  return isImageSize(data)
    ? {
        tileSize: data.tileSize,
        faceSize: data.faceSize,
        iconSize: data.iconSize,
      }
    : {
        tileSize: 48,
        faceSize: 144,
        iconSize: 32,
      };
};

const cloneObjectArray = <T>(
  array: ReadonlyArray<unknown> | undefined,
  fn: (data: unknown) => T
) => {
  return array ? array.map(fn) : [];
};

const cloneTestBattler = (data: unknown): TestBattler => {
  return isTestBattler(data)
    ? {
        actorId: data.actorId,
        equips: cloneNumberArray(data.equips),
        level: data.level,
      }
    : {
        actorId: 0,
        equips: [],
        level: 1,
      };
};
