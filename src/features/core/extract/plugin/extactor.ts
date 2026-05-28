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
  PluginCommandExtractionOutput,
  PluginExtractedValue,
  PluginCommandExtractorSource,
} from "@sigureya/rmmz-plugin-schema";
import type { PluginCommandExtractorV2 } from "./types";

export const createPluginCommandExtractorV2 = (
  src: PluginCommandExtractorSource,
): PluginCommandExtractorV2 => {
  const map = createCommandExtractorMapFromPipeline(src);
  return {
    extractArgs(
      command: Command_PluginCommandMZ,
      handles: PluginCommandExtractErrorHandlers,
    ): PluginCommandParameter<string>[] {
      const xxx = extractPluginCommandWithExtractor(command, map, handles);
      return fff(xxx);
    },
  };
};

const fff = (
  ss: PluginCommandExtractionOutput,
): PluginCommandParameter<string>[] => {
  return ss.args.map(
    (gg: PluginExtractedValue): PluginCommandParameter<string> => ({
      code: 357,
      pluginName: ss.pluginName,
      commandName: ss.commandName,
      argName: gg.param.name,
      value: typeof gg.value === "string" ? gg.value : "",
      argTitle: gg.param.attr.text || gg.param.name,
      paramIndex: 3,
    }),
  );
};
