import type { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs/eventCommand";
import type {
  Command_PluginCommandMZ,
  PluginCommandParameter,
} from "@RpgTypes/rmmz";

/**
 * @deprecated Use TextPluginCommandParameter instead
 */
export type PluginCommandMzParameter = TextPluginCommandParameter;

export interface TextPluginCommandParameter extends PluginCommandParameter<string> {
  paramIndex: 3;
  value: string;
  code: typeof PLUGIN_COMMAND_MZ;
  pluginName: string;
  commandName: string;
  argName: string;
  argTitle: string;
  speaker?: undefined;
}

export interface PluginCommandExtractor {
  extractArgs(command: Command_PluginCommandMZ): TextPluginCommandParameter[];
}
