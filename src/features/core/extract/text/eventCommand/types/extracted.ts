import type { PLUGIN_COMMAND_MZ, TextCommandCodeUnion } from "@RpgTypes/libs";

export type PluginCommandCodeFormat =
  `code:${typeof PLUGIN_COMMAND_MZ}-${string}`;

export type CommandCodeFormat =
  `code:${TextCommandCodeUnion | 101 | 401 | typeof PLUGIN_COMMAND_MZ}`;

export interface ExtractedPluginCommandItem<UUID> {
  uuid: UUID;
  kind: string;
  baseText: string;
  otherData: string[];
  filename: string;
  id: number;
  dataKey: PluginCommandCodeFormat;
}
