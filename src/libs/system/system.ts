import type { AudioFileParams, ColorRGBA } from "@RpgTypes/utils";
import type {
  TestBattler,
  AttackMotion,
  System_Advanced,
  System_Terms,
  System_SoundsArray,
  Data_Vehicle,
  ItemCategoriesArray,
  MenuCommandsEnabledArray,
} from "./members";
import type { EditorSettings } from "./setting";

export interface Data_System {
  // battle
  battleSystem: number;
  partyMembersArray: number[];
  // サイドビューの際に魔法モーションを取るスキル系統
  magicSkills: number[];

  // images
  battleback1Name: string;
  battleback2Name: string;
  battlerName: string;
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
  itemCategories: ItemCategoriesArray;
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
  testTroopId: number;
  testBattlers: TestBattler[];
  battlerHue: number;

  // other
  windowTone: ColorRGBA;
  attackMotions: AttackMotion[];
  locale: string;
  versionId: number;
  advanced: System_Advanced;
  tileSize: number;
  faceSize: number;
  iconSize: number;

  editor: EditorSettings;
}
