import { AudioFileParams } from "../../../types/audio";
import { System_Advanced } from "./advanced";
import { EditerParams } from "./editorParams";
import { System_Message, System_Terms } from "./message";
import { System_Sounds } from "./sound";
export interface Data_System
  extends EditerParams,
    System_Params,
    System_AudioFiles {}

interface System_Vehicle {
  bgm: AudioFileParams;
}

interface System_AudioFiles {
  gameoverMe: AudioFileParams;
  battleBgm: AudioFileParams;
  defeatMe: AudioFileParams;
}

interface System_Params {
  advanced: System_Advanced;
  airship: System_Vehicle;
  boat: System_Vehicle;
  armorTypes: string[];
  elements: number[];
  variables: string[];
  equipTypes: string[];
  gameTitle: string;
  sounds: System_Sounds;
  terms: System_Terms;
}
