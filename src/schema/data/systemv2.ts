import type { AudioFileParams, ColorRGBA, Data_Vehicle } from "./types";
import type { System_Advanced } from "./types/system/advanced";
import type { AttackMotion } from "./types/system/attackMotion";
import type { TestBattlers } from "./types/system/testBattlers";
import type { System_Sounds } from "./types/system/sound";

export interface Data_SystemV2 {
  // images
  battleback1Name: string;
  battleback2Name: string;
  battlerName: string;
  title1Name: string;
  title2Name: string;

  // text
  gameTitle: string;
  currencyUnit: string;

  // DataTypeNames
  weaponTypes: string[];
  skillTypes: string[];
  elements: string[];
  variables: string[];
  equipTypes: string[];
  switches: string[];
  armorTypes: string[];

  // audioFiles
  titleBgm: AudioFileParams;
  gameoverMe: AudioFileParams;
  battleBgm: AudioFileParams;
  defeatMe: AudioFileParams;
  victoryMe: AudioFileParams;
  // system sounds
  sounds: System_Sounds;

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

  // initial data
  startMapId: number;
  startX: number;
  startY: number;

  // editor params
  editMapId: number;
  testTroopId: number;
  testBattlers: TestBattlers[];

  // other
  windowTone: ColorRGBA;
  attackMotions: AttackMotion[];
  local: string;
  versionId: number;
  advanced: System_Advanced;
}
