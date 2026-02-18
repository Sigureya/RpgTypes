import type { AudioFileParams } from "@RpgTypes/libs";
import { makeAudioFileParams } from "@RpgTypes/libs";
import {
  createMenuCommandState,
  makeBooleanOptions,
  makeItemCategories,
  makeMenuCommandsEnabled,
  makeParamNamesArray,
  makeSoundsArray,
  makeSoundsObject,
  makeSystemAdvanced,
  makeTermsBasic,
  makeTermsCommandArray,
  makeTermsMessages,
  makeTitleCommandWindow,
  makeVehicleData,
} from "./core";
import type {
  System_BooleanGameOptions,
  System_ImageSize,
  System_Terms,
  System_TermsPartial,
  Terms_Messages,
} from "./core";
import type { EditorSettings } from "./gameEdit";
import { makeEditorSetting } from "./gameEdit";
import type { TestBattler } from "./gameEdit/testPlay/testBattler/types";
import type { Data_System } from "./system";
import type { Data_SystemMV } from "./systemMV";
import type { SystemDataFragments } from "./systemSegments";

export const makeSystemDataFromMV = (data: Data_SystemMV): Data_System => {
  return makeSystemData({
    vesionId: data.versionId,

    menuCommands: createMenuCommandState(data),
    locale: data.locale,
    gameInit: {
      startMapId: data.startMapId,
      startX: data.startX,
      startY: data.startY,
      partyMembers: data.partyMembers,
    },
    battle: { magicSkills: data.magicSkills },
    bgm: {
      titleBgm: data.titleBgm,
      battleBgm: data.battleBgm,
    },
    options: data,
    vehicles: {
      airship: data.airship,
      boat: data.boat,
      ship: data.ship,
    },
    images: { title1Name: data.title1Name, title2Name: data.title2Name },
    me: {
      defeatMe: data.defeatMe,
      gameoverMe: data.gameoverMe,
      victoryMe: data.victoryMe,
    },
    battleTest: {
      battleback1Name: data.battleback1Name,
      battleback2Name: data.battleback2Name,
      testTroopId: data.testTroopId,
      testBattlers: data.testBattlers,
    },
    attackMotion: data.attackMotions,
    sounds: makeSoundsObject(data.sounds),
    dataNames: {
      skillTypes: data.skillTypes,
      weaponTypes: data.weaponTypes,
      armorTypes: data.armorTypes,
      elements: data.elements,
      equipTypes: data.equipTypes,
      switches: data.switches,
      variables: data.variables,
    },
    texts: { currencyUnit: data.currencyUnit, gameTitle: data.gameTitle },
    editorTemporary: {
      editMapId: data.editMapId,
      battlerName: data.battlerName,
      battlerHue: data.battlerHue,
    },
  });
};

export const makeSystemData = (
  fragments: Partial<SystemDataFragments>,
): Data_System => {
  const size = cloneSize(fragments.size);

  return {
    ...(makeBooleanOptions(fragments.options) satisfies Record<
      string & keyof System_BooleanGameOptions,
      boolean
    >),
    titleCommandWindow: makeTitleCommandWindow(
      fragments.titleCommandWindow ?? {},
    ),
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
    armorTypes: cloneValueArray(fragments.dataNames?.armorTypes),
    equipTypes: cloneValueArray(fragments.dataNames?.equipTypes),
    elements: cloneValueArray(fragments.dataNames?.elements),
    skillTypes: cloneValueArray(fragments.dataNames?.skillTypes),
    weaponTypes: cloneValueArray(fragments.dataNames?.weaponTypes),
    switches: cloneValueArray(fragments.dataNames?.switches),
    variables: cloneValueArray(fragments.dataNames?.variables),
    magicSkills: cloneValueArray(fragments.battle?.magicSkills),
    battleSystem: fragments.battle?.battleSystem ?? 0,
    airship: makeVehicleData(fragments.vehicles?.airship),
    boat: makeVehicleData(fragments.vehicles?.boat),
    ship: makeVehicleData(fragments.vehicles?.ship),
    defeatMe: makeAudioFileParams(fragments.me?.defeatMe),
    gameoverMe: makeAudioFileParams(fragments.me?.gameoverMe),
    titleBgm: makeAudioFileParams(fragments.bgm?.titleBgm),

    tileSize: size.tileSize,
    faceSize: size.faceSize,
    iconSize: size.iconSize,
    versionId: fragments.vesionId ?? 1,
    attackMotions: fragments.attackMotion ? [...fragments.attackMotion] : [],
    battleback1Name: fragments.battleTest?.battleback1Name ?? "",
    battleback2Name: fragments.battleTest?.battleback2Name ?? "",
    testTroopId: fragments.battleTest?.testTroopId ?? 0,
    testBattlers: cloneObjectArray(
      fragments.battleTest?.testBattlers,
      cloneTestBattler,
    ),
    battleBgm: makeAudioFileParams(fragments.bgm?.battleBgm),
    victoryMe: makeAudioFileParams(fragments.me?.victoryMe),
    editMapId: fragments.editorTemporary?.editMapId ?? 0,
    battlerName: fragments.editorTemporary?.battlerName ?? "",
    locale: fragments.locale ?? "en-US",
    startMapId: fragments.gameInit?.startMapId ?? 0,
    startX: fragments.gameInit?.startX ?? 0,
    startY: fragments.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: makeTerms(fragments.terms ?? {}) satisfies System_Terms,
    itemCategories: makeItemCategories(
      fragments.itemCategories,
    ) satisfies boolean[],
    partyMembers: cloneValueArray(fragments.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: makeMenuCommandsEnabled(
      fragments.menuCommands,
    ) satisfies boolean[],
  };
};

const makeTerms = (terms: System_TermsPartial): System_Terms => {
  return {
    basic: makeTermsBasic(terms.basic ?? {}) satisfies string[],
    commands: makeTermsCommandArray(terms.commands ?? {}) satisfies string[],
    params: makeParamNamesArray(terms.params ?? {}) satisfies string[],
    messages: makeTermsMessages(terms.messages ?? {}) satisfies Record<
      keyof Terms_Messages,
      string
    >,
  };
};

const cloneValueArray = <T extends number | string>(
  array?: ReadonlyArray<T>,
): T[] => {
  return array ? [...array] : [];
};

const cloneSize = (
  data: Partial<System_ImageSize> | undefined,
): System_ImageSize => {
  return data
    ? {
        tileSize: data.tileSize ?? 48,
        faceSize: data.faceSize ?? 144,
        iconSize: data.iconSize ?? 32,
      }
    : {
        tileSize: 48,
        faceSize: 144,
        iconSize: 32,
      };
};

const cloneObjectArray = <T>(
  array: ReadonlyArray<T> | undefined,
  fn: (data: T) => T,
): T[] => {
  return array ? array.map(fn) : [];
};

const cloneTestBattler = (data: TestBattler | undefined): TestBattler => {
  return data
    ? {
        actorId: data.actorId,
        equips: cloneValueArray(data.equips),
        level: data.level,
      }
    : {
        actorId: 0,
        equips: [],
        level: 1,
      };
};
