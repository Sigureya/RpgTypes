import { Command_PluginCommandMZ } from '../../../../../rmmz';
import { FilteredPluginSchema, PrimitiveStringParam } from '../../../../../rmmz/plugin/schema/compile';
import { ExtractedPluginCommandArgs } from './types';
export declare const extractPluginCommandArgs: (command: Command_PluginCommandMZ, pluginSchema: {
    get(s: string): undefined | FilteredPluginSchema<PrimitiveStringParam>;
}) => ExtractedPluginCommandArgs[];
