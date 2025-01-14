import type { System_Advanced } from "./advanced";
import type { EditerParams } from "./testBattlers";
import type { System_Terms } from "./message";
import type { System_Sounds } from "./sound";
import type { System_ImageFilenames } from "./imageFilenames";
import type { System_AudioFiles } from "./audioFiles";
import type { Vehicles } from "./vehicle";
import type { AttackMotion } from "./attackMotion";
import type { System_DataTypeNames } from "./dataTypeNames";
import type { OptionBooleans } from "./optionBooleans";
export interface Data_System
  extends EditerParams,
    System_Params,
    System_AudioFiles,
    System_ImageFilenames,
    System_DataTypeNames,
    OptionBooleans,
    Vehicles {
  local: string;
  gameTitle: string;
  currencyUnit: string;
  title1Name: string;
  title2Name: string;
  optAutosave: boolean;
  attackMotions: AttackMotion[];
  startMapId: number;
  startX: number;
  startY: number;
  switches: string[];
  windowTone: [red: number, green: number, blue: number, a: number];
}

interface System_Params {
  versionId: number;
  advanced: System_Advanced;
  armorTypes: string[];
  elements: string[];
  variables: string[];
  equipTypes: string[];
  gameTitle: string;
  sounds: System_Sounds;
  terms: System_Terms;
}
