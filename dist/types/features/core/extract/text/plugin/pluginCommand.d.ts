import { FilteredPluginSchema } from '../../../../plugin/pick/filtedTypes';
import { Command_PluginCommandMZ } from '../../../../../rmmz';
import { PrimitiveStringParam } from '../../../../../rmmz/plugin';
import { ExtractedPluginCommandArgs } from './types';
export declare const extractPluginCommandArgs: (command: Command_PluginCommandMZ, pluginSchema: {
    get(s: string): undefined | FilteredPluginSchema<PrimitiveStringParam>;
}) => ExtractedPluginCommandArgs[];
