import type { AudioFileParams } from "@RpgTypes/utils";
import { makeAudioFileParams } from "@RpgTypes/utils";
import type {
  System_Bgm,
  System_BooleanOptionsRMMMZ as System_BooleanOptions,
  System_GameInitial,
  System_Terms,
  System_TermsPartial,
  Terms_Messages,
  TestBattler,
} from "./core";
import {
  makeBooleanOptions,
  makeDataNames,
  makeMenuCommandsEnabled,
  makeParamNamesArray,
  makeSoundsArray,
  makeSystemAdvanced,
  makeTermsBasic,
  makeTermsCommand,
  makeTermsMessages,
  makeVehicleData,
} from "./core";
import type { System_DataNames } from "./core/dataTypes";
import { makeItemCategories } from "./core/itemCategories";
import type { EditorSettings } from "./setting";
import { makeEditorSetting } from "./setting";
import type { System_Debug, System_Images, System_ImageSize } from "./subset";
import type { Data_System } from "./system";
import type { SystemDataFragments } from "./systemSegments";
import { isImageSize, isTestBattler } from "./validate";

export const makeSystemData = (
  p: Partial<SystemDataFragments>
): Data_System => {
  const vehicles = p.vehicles ?? {};

  const dataNames: Partial<System_DataNames> = p.dataNames ?? {};
  const debug: Partial<System_Debug> = p.debug ?? {};
  const images: Partial<System_Images> = p.images ?? {};
  const gameInit: Partial<System_GameInitial> = p.gameInit ?? {};
  const bgm: Partial<System_Bgm> = p.bgm ?? {};

  const size = cloneSize(p.size);

  return {
    ...(makeBooleanOptions(p.options) satisfies Record<
      string & keyof System_BooleanOptions,
      boolean
    >),
    currencyUnit: p.texts?.currencyUnit ?? "",
    gameTitle: p.texts?.gameTitle ?? "",
    sounds: makeSoundsArray(p.sounds) satisfies AudioFileParams[],
    editor: makeEditorSetting(p.editing) satisfies Record<
      keyof EditorSettings,
      number
    >,
    advanced: makeSystemAdvanced(p.advanced),
    title1Name: images.title1Name ?? "",
    title2Name: images.title2Name ?? "",
    battleback1Name: images.battleback1Name ?? "",
    battleback2Name: images.battleback2Name ?? "",
    ...(makeDataNames(dataNames) satisfies Record<
      keyof System_DataNames,
      string[]
    >),
    magicSkills: cloneNumberArray([]),
    airship: makeVehicleData(vehicles.airship),
    boat: makeVehicleData(vehicles.boat),
    ship: makeVehicleData(vehicles.ship),
    defeatMe: makeAudioFileParams(p.me?.defeatMe),
    gameoverMe: makeAudioFileParams(p.me?.gameoverMe),
    titleBgm: makeAudioFileParams(bgm.titleBgm),

    tileSize: size.tileSize,
    faceSize: size.faceSize,
    iconSize: size.iconSize,
    versionId: 1,
    attackMotions: [],
    testBattlers: cloneObjectArray(debug.testBattlers, cloneTestBattler),
    battleBgm: makeAudioFileParams(bgm.battleBgm),
    victoryMe: makeAudioFileParams(p.me?.victoryMe),
    editMapId: debug.editMapId ?? 0,
    locale: "",
    startMapId: gameInit.startMapId ?? 0,
    startX: gameInit.startX ?? 0,
    startY: gameInit.startY ?? 0,
    testTroopId: debug.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: makeTerms(p.terms ?? {}) satisfies System_Terms,
    itemCategories: makeItemCategories(p.itemCategories) satisfies boolean[],
    partyMembersArray: cloneNumberArray(gameInit.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: debug.battlerName ?? "",
    menuCommands: makeMenuCommandsEnabled(p.menuComamnds) satisfies boolean[],
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
