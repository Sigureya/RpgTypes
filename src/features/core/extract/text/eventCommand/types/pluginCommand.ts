import type { PLUGIN_COMMAND_MZ } from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";

export interface PluginCommandMzParameter
  extends CommandParameter<string, typeof PLUGIN_COMMAND_MZ> {
  paramIndex: 3;
  value: string;
  code: typeof PLUGIN_COMMAND_MZ;
  pluginName: string;
  commandName: string;
  argName: string;
  argTitle: string;
  speaker?: undefined;
}
