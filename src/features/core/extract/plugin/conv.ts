import type { PluginCommandParameter } from "@RpgTypes/rmmz";
import { isScript } from "@RpgTypes/rmmz";
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
    .filter(isTextParam)
    .map((param) => convertPluginParamItem(list.pluginName, param, fn))
    .filter((item) => item !== undefined);
};

const isTextParam = (f: PluginExtractedValue): f is PluginStringValue => {
  if (typeof f.value !== "string") {
    return false;
  }
  if (f.value.length === 0) {
    return false;
  }
  if (!isTextParamKind(f)) {
    return false;
  }
  // JS式の中に文字列が含まれてない
  if (!/["`']/.test(f.value)) {
    // JS式の要素が含まれているなら、テキストではない
    return !isScript(f.value);
  }

  return true;
};

const isTextParamKind = (f: PluginExtractedValue): boolean => {
  return (
    f.param.attr.kind === "string" ||
    f.param.attr.kind === "string[]" ||
    f.param.attr.kind === "multiline_string" ||
    f.param.attr.kind === "multiline_string[]" ||
    f.param.attr.kind === "combo" ||
    f.param.attr.kind === "any"
  );
};

export const convertPluginParamItem = <T>(
  pluginName: string,
  value: PluginStringValue,
  fn: (text: string) => T,
): ExtractedPluginParamItem<T> | undefined => {
  const trimed = value.value.trimEnd();
  if (trimed.length === 0) {
    return undefined;
  }
  if (/\-*/.test(trimed)) {
    return undefined;
  }
  return {
    filename: pluginName,
    id: 0,
    uuid: fn(trimed),
    baseText: trimed,
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
