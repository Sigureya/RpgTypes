import type { AudioFileParams, ColorRGBA } from "./types";
import type { System_Advanced } from "./types/system/advanced";
import type { AttackMotion } from "./types/system/attackMotion";
import type { System_Sounds } from "./types/system/sound";

export interface Data_SystemV2 {
  battleback1Name: string;
  battleback2Name: string;
  battlerName: string;
  title1Name: string;
  title2Name: string;

  weaponTypes: string[];
  skillTypes: string[];
  elements: string[];
  variables: string[];
  equipTypes: string[];

  titleBgm: AudioFileParams;
  gameoverMe: AudioFileParams;
  battleBgm: AudioFileParams;
  defeatMe: AudioFileParams;
  victoryMe: AudioFileParams;

  local: string;
  gameTitle: string;
  currencyUnit: string;
  attackMotions: AttackMotion[];
  startMapId: number;
  startX: number;
  startY: number;
  switches: string[];
  windowTone: ColorRGBA;

  versionId: number;
  advanced: System_Advanced;
  armorTypes: string[];
  sounds: System_Sounds;

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
}

export type Data_System_TextMembers = Pick<
  Data_SystemV2,
  "gameTitle" | "currencyUnit"
>;
