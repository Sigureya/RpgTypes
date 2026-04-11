import { PLUGIN_COMMAND_MZ } from '../../../../../libs';
import { AudioFolders, PluginCommandParameter } from '../../../../../rmmz';
import { ExtractedAudioBase } from './base';
export interface AudioPluginCommandParameter extends PluginCommandParameter<string>, ExtractedAudioBase {
    paramIndex: 3;
    value: string;
    code: typeof PLUGIN_COMMAND_MZ;
    pluginName: string;
    commandName: string;
    argName: string;
    argTitle: string;
    directory: AudioFolders;
}
