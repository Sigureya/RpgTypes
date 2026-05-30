import { normarizeText } from "@RpgTypes/libs";
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
  hashFn: (text: string) => T,
): ExtractedPluginParamItem<T>[] => {
  return list.params
    .filter(isTextParam)
    .map((param) => convertPluginParamItem(list.pluginName, param, hashFn))
    .filter((item) => item !== undefined);
};

export const isTextParam = (
  param: PluginExtractedValue,
): param is PluginStringValue => {
  if (typeof param.value !== "string") {
    return false;
  }
  if (param.value.length === 0) {
    return false;
  }
  if (!isTextParamKind(param)) {
    return false;
  }
  if (/^[\d\s-\+\*/,.()=><]+$/.test(param.value)) {
    // 数式っぽい文字列はテキストではないとみなす
    return false;
  }
  // JS式の中に文字列が含まれてない
  if (!/["`']/.test(param.value)) {
    if (isScript(param.value)) {
      // JS式の要素が含まれているなら、テキストではない
      return false;
    }
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

const convertPluginParamItem = <T>(
  pluginName: string,
  value: PluginStringValue,
  hashFn: (text: string) => T,
): ExtractedPluginParamItem<T> | undefined => {
  const trimed = normarizeText(value.value);
  if (trimed.length === 0) {
    return undefined;
  }
  return {
    filename: pluginName,
    id: 0,
    uuid: hashFn(trimed),
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
