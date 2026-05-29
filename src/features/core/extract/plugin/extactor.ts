import type {
  Command_PluginCommandMZ,
  PluginCommandParameter,
} from "@RpgTypes/rmmz";
import {
  createCommandExtractorMapFromPipeline,
  extractPluginCommandWithExtractor,
} from "@sigureya/rmmz-plugin-schema";
import type {
  PluginCommandExtractErrorHandlers,
  PluginCommandExtractorSource,
} from "@sigureya/rmmz-plugin-schema";
import { buildPluginCommandArgInfo } from "./conv";
import type { PluginCommandExtractor } from "./types/types";

export const createPluginCommandExtractorV2 = (
  src: PluginCommandExtractorSource,
): PluginCommandExtractor => {
  const map = createCommandExtractorMapFromPipeline(src);
  return {
    extractArgs(
      command: Command_PluginCommandMZ,
      handles: PluginCommandExtractErrorHandlers,
    ): PluginCommandParameter<string>[] {
      const data = extractPluginCommandWithExtractor(command, map, handles);
      return data.args.map((arg) => buildPluginCommandArgInfo(data, arg));
    },
  };
};
