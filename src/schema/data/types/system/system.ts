import type { AudioFileParams } from "../../../../types";
import type { System_Advanced } from "./advanced";
import type { EditerParams } from "./editorParams";
import type { System_Terms } from "./message";
import type { System_Sounds } from "./sound";
import type { System_ImageFilenames } from "./imageFilenames";
import type { Vehicles } from "./vehicles";
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
}

interface System_AudioFiles {
  titleBgm: AudioFileParams;
  gameoverMe: AudioFileParams;
  battleBgm: AudioFileParams;
  defeatMe: AudioFileParams;
  victoryMe: AudioFileParams;
}

interface System_Params {
  versionId: number;
  advanced: System_Advanced;
  armorTypes: string[];
  elements: number[];
  variables: string[];
  equipTypes: string[];
  gameTitle: string;
  sounds: System_Sounds;
  terms: System_Terms;
}
