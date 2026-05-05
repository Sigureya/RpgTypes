import type { PLUGIN_COMMAND_MZ, TextCommandCodeUnion } from "@RpgTypes/libs";
import type { ExtractedTextItem } from "./mainData";

export type PluginCommandCodeFormat =
  `code:${typeof PLUGIN_COMMAND_MZ}-${string}`;

export type CommandCodeFormat = `code:${TextCommandCodeUnion}`;

export type ExtractedCommandItem<UUID, Other extends string[] = string[]> =
  | ExtractedTextItem<UUID, CommandCodeFormat, Other>
  | ExtractedPluginCommandItem<UUID>;

export type ExtractedTroopTextItem<UUID> =
  | ExtractedCommandItem<UUID, [`page:${number}`]>
  | ExtractedPluginCommandItem<UUID>;

export type ExtractedPluginCommandItem<UUID> = ExtractedTextItem<
  UUID,
  PluginCommandCodeFormat
>;
