import type { ExtractedTextItem } from "@RpgTypes/libs";
import type {
  Command_PluginCommandMZ,
  PluginCommandParameter,
} from "@RpgTypes/rmmz";
import type { PluginCommandExtractErrorHandlers } from "@sigureya/rmmz-plugin-schema";

export interface PluginCommandExtractor {
  extractArgs(
    command: Command_PluginCommandMZ,
    errorHanldes: PluginCommandExtractErrorHandlers,
  ): PluginCommandParameter<string>[];
}

export type ExtractedPluginParamItem<UUID> = ExtractedTextItem<UUID, string>;
