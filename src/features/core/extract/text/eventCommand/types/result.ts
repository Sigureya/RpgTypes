import type { NoteReadResult } from "@RpgTypes/rmmz";
import type { TextPluginCommandParameter } from "./pluginCommand";
import type { TextCommandParameter } from "./union";

export interface ExtractedBattleEventText<
  T extends TextPluginCommandParameter = TextPluginCommandParameter,
> {
  eventId: number;
  commands: (TextCommandParameter | T)[];
  pageIndex: number;
}

export interface ExtractedCommonEventText<
  T extends TextPluginCommandParameter = TextPluginCommandParameter,
> {
  eventId: number;
  name: string;
  commands: (TextCommandParameter | T)[];
}

export interface ExtractedMapTexts<
  T extends TextPluginCommandParameter = TextPluginCommandParameter,
> {
  events: ExtractedMapEventTexts<T>[];
  note: string;
  noteItems: NoteReadResult[];
  displayedName: string;
}

export interface ExtractedMapEventTexts<
  T extends TextPluginCommandParameter = TextPluginCommandParameter,
> {
  eventId: number;
  name: string;
  pageIndex: number;
  commands: (TextCommandParameter | T)[];
  note: string;
  noteItems: NoteReadResult[];
}
