import type { PLUGIN_COMMAND_MZ, TextCommandCodeUnion } from "@RpgTypes/libs";
import type { ExtractedTextItemG } from "../../../sss";

export type PluginCommandCodeFormat =
  `code:${typeof PLUGIN_COMMAND_MZ}-${string}`;

export type CommandCodeFormat =
  `code:${TextCommandCodeUnion | 101 | 401 | typeof PLUGIN_COMMAND_MZ}`;

export type ExtractedCommandItem<UUID, Other extends string[] = string[]> =
  | ExtractedTextItemG<UUID, CommandCodeFormat, Other>
  | ExtractedPluginCommandItem<UUID>;

export type ExtractedTroopTextItem<UUID> =
  | ExtractedCommandItem<UUID, [`page:${number}`]>
  | ExtractedPluginCommandItem<UUID>;

export interface ExtractedPluginCommandItem<UUID> {
  uuid: UUID;
  kind: string;
  baseText: string;
  otherData: string[];
  filename: string;
  id: number;
  dataKey: PluginCommandCodeFormat;
}
