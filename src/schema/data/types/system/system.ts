import type { System_Advanced } from "./advanced";
import type { EditerParams } from "./editorParams";
import type { System_Terms } from "./message";
import type { System_Sounds } from "./sound";
import type { System_ImageFilenames } from "./imageFilenames";
import type { System_AudioFiles } from "./audioFiles";
import type { Vehicles } from "./vehicles";
import type { AttackMotion } from "./attackMotion";

export interface Data_System
  extends EditerParams,
    System_Params,
    System_AudioFiles,
    System_ImageFilenames,
    Vehicles {
  local: string;
  gameTitle: string;
  currencyUnit: string;
  title1Name: string;
  title2Name: string;
  optAutosave: boolean;
  attackMotions: AttackMotion[];
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
