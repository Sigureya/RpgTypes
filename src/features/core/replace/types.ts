import type {
  TextReplaceHandlers,
  Command_PluginCommandMZ,
  Command_ScriptHeader,
  NoteReplaceHandlers,
} from "@RpgTypes/rmmz";

export interface ReplaceEventTextHandlers extends TextReplaceHandlers {
  pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
  scriptCommand: (command: Command_ScriptHeader) => Command_ScriptHeader;
  replaceText: (key: string) => string | undefined;
}

export type MapDataReplaceHandlers = ReplaceEventTextHandlers &
  NoteReplaceHandlers;
