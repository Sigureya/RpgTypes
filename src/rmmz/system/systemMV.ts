import type { AudioFileParams, ColorRGBA } from "@RpgTypes/libs";
import type {
  AttackMotion,
  Data_Vehicle,
  MenuCommandsEnabledArray,
  System_SoundsArray,
  System_Terms,
} from "./core";
import type { TestBattler } from "./gameEdit";

export interface Data_SystemMV {
  // battle
  battleSystem: number;
  partyMembers: number[];
  // サイドビューの際に魔法モーションを取るスキル系統
  magicSkills: number[];

  // images
  title1Name: string;
  title2Name: string;

  // text
  gameTitle: string;
  currencyUnit: string;

  terms: System_Terms;

  // DataTypeNames
  weaponTypes: string[];
  skillTypes: string[];
  elements: string[];
  variables: string[];
  equipTypes: string[];
  switches: string[];
  armorTypes: string[];
  menuCommands: MenuCommandsEnabledArray;

  // audioFiles - bgm
  titleBgm: AudioFileParams;
  battleBgm: AudioFileParams;
  // audioFiles - me
  gameoverMe: AudioFileParams;
  defeatMe: AudioFileParams;
  victoryMe: AudioFileParams;
  // system sounds
  sounds: System_SoundsArray;

  // Vehicle
  boat: Data_Vehicle;
  ship: Data_Vehicle;
  airship: Data_Vehicle;

  // options
  optAutosave: boolean;
  optDisplayTp: boolean;
  optDrawTitle: boolean;
  optExtraExp: boolean;
  optFloorDeath: boolean;
  optFollowers: boolean;
  optKeyItemsNumber: boolean;
  optSideView: boolean;
  optSlipDeath: boolean;
  optTransparent: boolean;
  optSplashScreen: boolean;
  optMessageSkip: boolean;

  // initial data
  startMapId: number;
  startX: number;
  startY: number;

  // editor params
  editMapId: number;
  battlerHue: number;
  battlerName: string;
  // battle test
  testTroopId: number;
  testBattlers: TestBattler[];
  battleback1Name: string;
  battleback2Name: string;

  // other
  windowTone: ColorRGBA;
  attackMotions: AttackMotion[];
  locale: string;
  versionId: number;
  tileSize: number;
  faceSize: number;
  iconSize: number;
}
