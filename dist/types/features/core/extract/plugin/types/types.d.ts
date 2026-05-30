import { ExtractedTextItem } from '../../../../../libs';
import { Command_PluginCommandMZ, PluginCommandParameter } from '../../../../../rmmz';
import { PluginCommandExtractErrorHandlers } from '@sigureya/rmmz-plugin-schema';
export interface PluginCommandExtractor {
    extractArgs(command: Command_PluginCommandMZ, errorHanldes: PluginCommandExtractErrorHandlers): PluginCommandParameter<string>[];
}
export type ExtractedPluginParamItem<UUID> = ExtractedTextItem<UUID, string, [
    rootName: string,
    kind: string,
    desc: string
]>;
