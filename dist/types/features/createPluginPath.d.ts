import { RawGameEventData } from '../fileio';
import { Command_PluginCommandMZ } from '../rmmz';
import { AnyStringParam, PluginReplacePathData, PluginSchema } from '@sigureya/rmmz-plugin-schema';
import { PluginCommandMapKey, AnyParamTextPredicate } from './pluginMap';
type PluginTextSource = Pick<PluginSchema, "pluginName" | "schema">;
export interface PluginCommandPathDictionaryEntry {
    key: PluginCommandMapKey;
    pluginName: string;
    commandName: string;
    argsPath: string[][];
    commands: Command_PluginCommandMZ[];
}
export interface PluginPathBuildResult {
    params: PluginReplacePathData[];
    commandPaths: PluginCommandPathDictionaryEntry[];
    groupedCommands: ReadonlyMap<PluginCommandMapKey, Command_PluginCommandMZ[]>;
}
export declare const buildPluginParamPathDictionaries: (plugins: ReadonlyArray<PluginTextSource>, anyParamFn?: AnyParamTextPredicate) => PluginReplacePathData[];
export declare const buildPluginCommandPathDictionaries: (events: RawGameEventData, plugins: ReadonlyArray<PluginTextSource>, anyParamFn?: AnyParamTextPredicate) => PluginCommandPathDictionaryEntry[];
export declare const collectAndGroupPluginCommands: (events: RawGameEventData) => ReadonlyMap<PluginCommandMapKey, Command_PluginCommandMZ[]>;
export declare const buildPluginPathDictionaries: (events: RawGameEventData, plugins: ReadonlyArray<PluginTextSource>, anyParamFn?: (param: AnyStringParam, name: string) => boolean) => PluginPathBuildResult;
export {};
