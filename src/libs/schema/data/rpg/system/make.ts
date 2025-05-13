import { makeAudioFileParams } from "@RpgTypes/utils";
import { makeSoundsArray, makeSystemAdvanced } from "./members";
import { makeVehicleData } from "./members/vehicle/make";
import type { Data_System, System_BoolanOptions } from "./system";

export const makeSystemData = (
  options: Partial<System_BoolanOptions>
): Partial<Data_System> => {
  return {
    advanced: makeSystemAdvanced(),
    airship: makeVehicleData(),
    armorTypes: [],
    battleback1Name: "",
    battleback2Name: "",
    battlerName: "",
    boat: makeVehicleData(),
    ship: makeVehicleData(),
    defeatMe: makeAudioFileParams(),
    currencyUnit: "",
    elements: [],
    equipTypes: [],
    gameTitle: "",
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
    optMessageSkip: true,
    skillTypes: [],
    sounds: makeSoundsArray({}),
    switches: [],
    title1Name: "",
    title2Name: "",
    titleBgm: makeAudioFileParams(),
    tileSize: 48,
    variables: [],
    versionId: 1,
    attackMotions: [],
    testBattlers: [],
    battleBgm: makeAudioFileParams(),
    victoryMe: makeAudioFileParams(),
    editMapId: 0,
    local: "",
    startX: 0,
    startY: 0,
    testTroopId: 0,
    windowTone: [0, 0, 0, 0],
    weaponTypes: [],
    startMapId: 1,
  };
};
