import { compileAttributes } from "./attributes";
import { parsePlugin as parse } from "./parse/parse";
import type {
  ParsedPlugin,
  PluginCommandTokens,
  PluginParamTokens,
} from "./parse/types";
import type { PluginCommandBody, PluginJSON } from "./pluginJSONTypes";
import type { PrimitiveParam } from "./primitiveParams";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export const parsePlugin = (text: string) => {
  return compilePlugin(parse(text));
};

const compilePlugin = (parsedPlugin: ParsedPlugin): PluginJSON => {
  return {
    target: "MZ",
    meta: parsedPlugin.meta,
    commands: reduceCommands(parsedPlugin.commands),
    params: reduceParams(parsedPlugin.params),
  };
};

const reduceParams = (
  params: ReadonlyArray<PluginParamTokens>
): { [key: string]: PrimitiveParam } => {
  return params.reduce<{ [key: string]: PrimitiveParam }>((acc, param) => {
    return {
      [param.name]: compileAttributes(param),
      ...acc,
    };
  }, {});
};

const reduceCommands = (
  tokens: ReadonlyArray<PluginCommandTokens>
): Record<string, PluginCommandBody> => {
  return tokens.reduce((acc, token) => {
    const body: PluginCommandBody = {
      desc: token.desc,
      text: token.text,
      args: reduceParams(token.args),
    };
    return {
      [token.command]: body,
      ...acc,
    };
  }, {});
};
