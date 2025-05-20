import { makeAudioFileParams } from "@RpgTypes/utils";
import {
  makeItemCategories,
  makeMenuCommandsEnabled,
  makeParamNamesArray,
  makeSoundsArray,
  makeSystemAdvanced,
  makeTermsBasic,
  makeTermsCommand,
  makeTermsMessages,
  makeVehicleData,
} from "./members";
import type { Data_System } from "./system";
import { makeEditorSetting } from "./setting";
import type { SystemDataFragments } from "./systemSegments";
import type {
  System_DataNames,
  System_Debug,
  System_Images,
  System_GameInitial,
  System_Bgm,
} from "./subset";
import { makeBooleanOptions } from "./booleanOptions";

const cloneArray = (array?: string[]) => {
  return array ? [...array] : [];
};

export const makeSystemData = (
  p: Partial<SystemDataFragments>
): Data_System => {
  const vehicles = p.vehicles ?? {};

  const dataNames: Partial<System_DataNames> = p.dataNames ?? {};
  const debug: Partial<System_Debug> = p.debug ?? {};
  const images: Partial<System_Images> = p.images ?? {};
  const gameInit: Partial<System_GameInitial> = p.gameInit ?? {};
  const bgm: Partial<System_Bgm> = p.bgm ?? {};
  return {
    ...makeBooleanOptions(p.options),
    currencyUnit: p.texts?.currencyUnit ?? "",
    gameTitle: p.texts?.gameTitle ?? "",
    sounds: makeSoundsArray(p.sounds),
    editor: makeEditorSetting(p.editing),
    advanced: makeSystemAdvanced(p.advanced),
    title1Name: images.title1Name ?? "",
    title2Name: images.title2Name ?? "",
    battleback1Name: images.battleback1Name ?? "",
    battleback2Name: images.battleback2Name ?? "",

    armorTypes: cloneArray(dataNames.armorTypes),
    elements: cloneArray(dataNames.elements),
    equipTypes: cloneArray(dataNames.equipTypes),
    weaponTypes: cloneArray(dataNames.weaponTypes),
    skillTypes: cloneArray(dataNames.skillTypes),
    switches: cloneArray(dataNames.switches),
    variables: cloneArray(dataNames.variables),
    magicSkills: cloneArray(dataNames.magicSkills),
    battlerName: debug.battlerName ?? "",
    airship: makeVehicleData(vehicles.airship),
    boat: makeVehicleData(vehicles.boat),
    ship: makeVehicleData(vehicles.ship),
    defeatMe: makeAudioFileParams(),
    gameoverMe: makeAudioFileParams(),
    titleBgm: makeAudioFileParams(bgm.titleBgm),
    tileSize: 48,
    faceSize: 144,
    iconSize: 32,
    versionId: 1,
    attackMotions: [],
    testBattlers: debug.testBattlers ?? [],
    battleBgm: makeAudioFileParams(bgm.battleBgm),
    victoryMe: makeAudioFileParams(),
    editMapId: debug.editMapId ?? 0,
    locale: "",
    startMapId: gameInit.startMapId ?? 0,
    startX: gameInit.startX ?? 0,
    startY: gameInit.startY ?? 0,
    testTroopId: debug.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: {
      basic: makeTermsBasic({}),
      messages: makeTermsMessages({}),
      commands: makeTermsCommand({}),
      params: makeParamNamesArray({}),
    },
    itemCategories: makeItemCategories(p.itemCategories),
    partyMembersArray: [],
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: makeMenuCommandsEnabled({}),
  };
};
