export interface Command_PluginCommandMZ {
    code: 357;
    indent: number;
    parameters: ParamArray_PluginCommandMZ;
}
export type ParamArray_PluginCommandMZ = [
    pluginName: string,
    commandName: string,
    commandTitle: string,
    args: Record<string, string>
];
export interface ParamObject_PluginCommandMZ {
    pluginName: string;
    commandName: string;
    commandTitle: string;
    args: Record<string, string>;
}
export interface ParamObjectPartial_PluginCommandMZ {
    pluginName: string;
    commandName: string;
    commandTitle?: string;
    args?: Record<string, string>;
}
