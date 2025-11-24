import { Command_PluginCommandMZ } from '../../../../rmmz';
import { CommandArgExtractors, CommandExtractResult, CommandMapKey } from '@sigureya/rmmz-plugin-schema/features';
export declare const extractPluginCommandMzArgs: (command: Command_PluginCommandMZ, commandMap: ReadonlyMap<CommandMapKey, CommandArgExtractors>) => CommandExtractResult;
