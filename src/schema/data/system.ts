import type {
  TestBattlers,
  AttackMotion,
  System_Advanced,
  System_Terms,
} from "./systemMembers";
import type { AudioFileParams, ColorRGBA } from "./types";
import type { Data_Vehicle } from "./vehicle";

export interface Data_System {
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
  tileSize: number;
}
export type System_Sounds = [
  cursor: AudioFileParams,
  ok: AudioFileParams,
  cancel: AudioFileParams,
  buzzer: AudioFileParams,
  equip: AudioFileParams,
  save: AudioFileParams,
  load: AudioFileParams,
  battleStart: AudioFileParams,
  escape: AudioFileParams,
  enemyAttack: AudioFileParams,
  enemyDamage: AudioFileParams,
  bossCollapes1: AudioFileParams,
  bossCollapes1: AudioFileParams,
  actorDamage: AudioFileParams,
  playRecovery: AudioFileParams,
  playEvasion: AudioFileParams,
  pagicEvasion: AudioFileParams,
  playReflection: AudioFileParams,
  shop: AudioFileParams,
  useItem: AudioFileParams,
  useSkill: AudioFileParams,
  unknown1: AudioFileParams,
  unknown2: AudioFileParams,
  unknown3: AudioFileParams
];
