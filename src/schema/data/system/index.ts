import { AudioFileParams } from "../../../types/audio";
import { System_Advanced } from "./advanced";
import { EditerParams } from "./editorParams";
import { System_Message } from "./message";
import { System_Sounds } from "./sound";

interface System_Vehicle {
  bgm: AudioFileParams;
}

interface AudioFiles {
  gameoverMe: AudioFileParams;
  battleBgm: AudioFileParams;
  defeatMe: AudioFileParams;
}

interface SystemParams {
  advanced: System_Advanced;
  airship: System_Vehicle;
  boat: System_Vehicle;
  armorTypes: string[];
  elements: number[];
  variables: string[];
  equipTypes: string[];
  gameTitle: string;
  sounds: System_Sounds;
  messages: System_Message;
}

export interface Data_System extends EditerParams, SystemParams, AudioFiles {}
