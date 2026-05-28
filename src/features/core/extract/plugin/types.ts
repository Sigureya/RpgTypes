import type { ExtractedTextItemBase } from "@RpgTypes/libs";
import type {
  Command_PluginCommandMZ,
  PluginCommandParameter,
} from "@RpgTypes/rmmz";
import type { PluginCommandExtractErrorHandlers } from "@sigureya/rmmz-plugin-schema";

export interface ExtractedPluginText<
  UUID,
> extends ExtractedTextItemBase<UUID> {}

export interface PluginCommandExtractorV2 {
  extractArgs(
    command: Command_PluginCommandMZ,
    errorHanldes: PluginCommandExtractErrorHandlers,
  ): PluginCommandParameter<string>[];
}
