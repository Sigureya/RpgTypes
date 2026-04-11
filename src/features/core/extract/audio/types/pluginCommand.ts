import type { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";
import type { AudioFolders, PluginCommandParameter } from "@RpgTypes/rmmz";
import type { ExtractedAudioBase } from "./base";

export interface AudioPluginCommandParameter
  extends PluginCommandParameter<string>, ExtractedAudioBase {
  paramIndex: 3;
  value: string;
  code: typeof PLUGIN_COMMAND_MZ;
  pluginName: string;
  commandName: string;
  argName: string;
  argTitle: string;
  directory: AudioFolders;
}
