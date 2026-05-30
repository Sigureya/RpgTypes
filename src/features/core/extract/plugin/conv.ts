import type { PluginCommandParameter } from "@RpgTypes/rmmz";
import type {
  PluginExtractedValue,
  PluginParamExtractionOutput,
  PluginStringValue,
} from "@sigureya/rmmz-plugin-schema";
import type { ExtractedPluginParamItem } from "./types/types";

export const convertPluginParams = <T>(
  list: PluginParamExtractionOutput,
  fn: (text: string) => T,
): ExtractedPluginParamItem<T>[] => {
  return list.params
    .filter((f) => typeof f.value === "string")
    .map((param) => convertPluginParamItem(list.pluginName, param, fn));
};

export const convertPluginParamItem = <T>(
  pluginName: string,
  value: PluginStringValue,
  fn: (text: string) => T,
): ExtractedPluginParamItem<T> => {
  return {
    filename: pluginName,
    id: 0,
    uuid: fn(value.value),
    baseText: value.value,
    kind: value.param.attr.text || value.param.name,
    dataKey: value.param.name,
    otherData: [
      value.rootName,
      value.param.attr.kind,
      value.param.attr.desc || "",
    ],
  };
};

export const buildPluginCommandArgInfo = (
  ss: {
    pluginName: string;
    commandName: string;
  },
  gg: PluginExtractedValue,
): PluginCommandParameter<string> => {
  return {
    code: 357,
    pluginName: ss.pluginName,
    commandName: ss.commandName,
    argName: gg.param.name,
    value: typeof gg.value === "string" ? gg.value : "",
    argTitle: gg.param.attr.text || gg.param.name,
    paramIndex: 3,
  };
};
