import type { AudioFileParams, ColorRGBA } from "@RpgTypes/utils";
import type {
  TestBattler,
  AttackMotion,
  System_Advanced,
  System_Terms,
  System_SoundsArray,
  Data_Vehicle,
} from "./members";
import type { EditorSettings } from "./setting";
import type { MenuCommandsEnabledArray } from "./members/menuCommands/types";

export interface Data_System {
  // battle
  battleSystem: number;
  partyMembersArray: number[];

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
  magicSkills: string[];
  itemCategories: string[];
  menuCommands: MenuCommandsEnabledArray;

  // audioFiles
  titleBgm: AudioFileParams;
  gameoverMe: AudioFileParams;
  battleBgm: AudioFileParams;
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

  editor: EditorSettings;
}

export type System_Pick<
  K1 extends keyof Data_System,
  K2 extends keyof Data_System[K1]
> = {
  [key in K1]: Pick<Data_System[K1], K2>;
};

export type System_ParamNames = System_Pick<"terms", "params">;

export type System_DataNames = Pick<
  Data_System,
  | "weaponTypes"
  | "skillTypes"
  | "elements"
  | "variables"
  | "equipTypes"
  | "switches"
  | "armorTypes"
  | "magicSkills"
>;

export type System_Images = Pick<
  Data_System,
  | "battleback1Name"
  | "battleback2Name"
  | "battlerName"
  | "title1Name"
  | "title2Name"
>;

export type System_Text = Pick<Data_System, "gameTitle" | "currencyUnit">;

export type System_Vehicle = Pick<Data_System, "boat" | "ship" | "airship">;

export type System_Bgm = Pick<Data_System, "titleBgm" | "battleBgm">;

export type System_Me = Pick<
  Data_System,
  "gameoverMe" | "defeatMe" | "victoryMe"
>;

export type System_AudioFiles = System_Bgm & System_Me;

export type System_BooleanOptions = Pick<
  Data_System,
  | "optAutosave"
  | "optDisplayTp"
  | "optDrawTitle"
  | "optExtraExp"
  | "optFloorDeath"
  | "optFollowers"
  | "optKeyItemsNumber"
  | "optSideView"
  | "optSlipDeath"
  | "optTransparent"
  | "optMessageSkip"
  | "optSplashScreen"
>;

export type System_Debug = Pick<
  Data_System,
  "battlerHue" | "battlerName" | "testBattlers" | "testTroopId" | "editMapId"
>;

export type System_GameInitial = Pick<
  Data_System,
  "startMapId" | "startX" | "startY" | "partyMembersArray"
>;
