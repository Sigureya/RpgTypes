import type { ControlCharInfo, Data_Actor } from "@RpgTypes/rmmz";
import type { ExtractedTextBundle } from "./mainData";

export interface ExtractedActorTexts<UUID> {
  controlChars: ControlCharInfo[];
  texts: ExtractedTextBundle<Data_Actor, UUID>[];
}
