import type { ExtractedTextItem } from "@RpgTypes/libs";
import type {
  CommandCodeFormat,
  ExtractedPluginCommandItem,
} from "./extracted";
import type { TextPluginCommandParameter } from "./pluginCommand";
import type {
  GenericCommandParameter,
  MessageCommandParameter,
} from "./rmmzCommands";

export type TextCommandParameter =
  | GenericCommandParameter
  | MessageCommandParameter
  | TextPluginCommandParameter;

export type ExtractedCommandItem<UUID, Other extends string[] = string[]> =
  | ExtractedTextItem<UUID, CommandCodeFormat, Other>
  | ExtractedPluginCommandItem<UUID>;

export type ExtractedTroopTextItem<UUID> =
  | ExtractedCommandItem<UUID, [`page:${number}`]>
  | ExtractedPluginCommandItem<UUID>;
