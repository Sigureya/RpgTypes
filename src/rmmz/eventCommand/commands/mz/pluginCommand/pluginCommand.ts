import type {
  Command_PluginCommandMZ,
  ParamArray_PluginCommandMZ,
  ParamObject_PluginCommandMZ,
  ParamObjectPartial_PluginCommandMZ,
} from "./types";

export const makeCommandPluginCommandMZ = (
  {
    args = {},
    commandName,
    commandTitle = "",
    pluginName,
  }: ParamObjectPartial_PluginCommandMZ,
  indent: number = 0
): Command_PluginCommandMZ => {
  return {
    code: 357,
    indent: indent,
    parameters: [pluginName, commandName, commandTitle, { ...args }],
  };
};

export const fromArrayPluginCommandMZ = (
  array: ParamArray_PluginCommandMZ
): ParamObject_PluginCommandMZ => {
  return {
    pluginName: array[0],
    commandName: array[1],
    commandTitle: array[2],
    args: { ...array[3] },
  };
};
