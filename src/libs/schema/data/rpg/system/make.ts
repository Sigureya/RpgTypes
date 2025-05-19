import { makeAudioFileParams } from "@RpgTypes/utils";
import type { System_Advanced, System_SoundsObject } from "./members";
import { makeSoundsArray, makeSystemAdvanced } from "./members";
import { makeVehicleData } from "./members/vehicle/make";
import type {
  Data_System,
  System_Bgm,
  System_BooleanOptions,
  System_DataNames,
  System_Debug,
  System_Text,
  System_Vehicle,
} from "./system";
import type { EditorSettings } from "./setting";

interface XXX {
  options: Partial<System_BooleanOptions>;
  advanced: Partial<System_Advanced>;
  vehicles: Partial<System_Vehicle>;
  editing: Partial<EditorSettings>;
  dataNames: Partial<System_DataNames>;
  bgm: Partial<System_Bgm>;
  texts: Partial<System_Text>;
  sounds: Partial<System_SoundsObject>;
  debug: Partial<System_Debug>;
}

const cloneArray = <T>(array?: T[]) => {
  return array ? [...array] : [];
};

export const makeSystemData = (p: Partial<XXX>): Partial<Data_System> => {
  const options = p.options ?? {};
  const vehicles = p.vehicles ?? {};

  const dataNames = p.dataNames ?? {};
  const debug = p.debug ?? {};
  return {
    armorTypes: cloneArray(dataNames.armorTypes),
    elements: cloneArray(dataNames.elements),
    equipTypes: cloneArray(dataNames.equipTypes),
    weaponTypes: cloneArray(dataNames.weaponTypes),
    skillTypes: cloneArray(dataNames.skillTypes),
    switches: cloneArray(dataNames.switches),
    variables: cloneArray(dataNames.variables),
    advanced: makeSystemAdvanced(),
    battleback1Name: "",
    battleback2Name: "",
    battlerName: debug.battlerName ?? "",
    airship: makeVehicleData(vehicles.airship),
    boat: makeVehicleData(vehicles.boat),
    ship: makeVehicleData(vehicles.ship),
    defeatMe: makeAudioFileParams(),
    currencyUnit: p.texts?.currencyUnit ?? "",
    gameTitle: p.texts?.gameTitle ?? "",
    gameoverMe: makeAudioFileParams(),
    optAutosave: options.optAutosave ?? true,
    optDisplayTp: options.optDisplayTp ?? true,
    optDrawTitle: options.optDrawTitle ?? true,
    optExtraExp: options.optExtraExp ?? true,
    optFloorDeath: options.optFloorDeath ?? true,
    optFollowers: options.optFollowers ?? true,
    optKeyItemsNumber: options.optKeyItemsNumber ?? true,
    optSideView: options.optSideView ?? true,
    optSlipDeath: options.optSlipDeath ?? true,
    optSplashScreen: options.optSplashScreen ?? true,
    optTransparent: options.optTransparent ?? true,
    optMessageSkip: options.optMessageSkip ?? true,
    sounds: makeSoundsArray(p.sounds ?? {}),
    title1Name: "",
    title2Name: "",
    titleBgm: makeAudioFileParams(),
    tileSize: 48,
    versionId: 1,
    attackMotions: [],
    testBattlers: debug.testBattlers ?? [],
    battleBgm: makeAudioFileParams(),
    victoryMe: makeAudioFileParams(),
    editMapId: 0,
    locale: "",
    startX: 0,
    startY: 0,
    testTroopId: 0,
    windowTone: [0, 0, 0, 0],
    startMapId: 1,
  };
};
