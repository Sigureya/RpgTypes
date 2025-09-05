import { Command_PluginCommandMZ, ParamArray_PluginCommandMZ, ParamObject_PluginCommandMZ, ParamObjectPartial_PluginCommandMZ } from './types';
export declare const makeCommandPluginCommandMZ: ({ args, commandName, commandTitle, pluginName, }: ParamObjectPartial_PluginCommandMZ, indent?: number) => Command_PluginCommandMZ;
export declare const fromArrayPluginCommandMZ: (array: ParamArray_PluginCommandMZ) => ParamObject_PluginCommandMZ;
