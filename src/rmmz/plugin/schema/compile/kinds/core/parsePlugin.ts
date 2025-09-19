import { compileAttributes } from "./attributes";
import { parsePlugin as parse } from "./parse/parse";
import type {
  ParsedPlugin,
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./parse/types";
import type {
  PluginCommandBody,
  PluginJSON,
  PluginStructBody,
} from "./pluginJSONTypes";
import type { PrimitiveParam } from "./primitiveParams";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export const parsePlugin = (text: string): PluginJSON => {
  return compilePlugin(parse(text));
};

const compilePlugin = (parsedPlugin: ParsedPlugin): PluginJSON => {
  return {
    target: "MZ",
    meta: parsedPlugin.meta,
    commands: reduceCommands(parsedPlugin.commands),
    params: reduceParams(parsedPlugin.params),
    structs: reduceStructs(parsedPlugin.structs),
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
  return Object.fromEntries(
    tokens.map((token): [string, PluginCommandBody] => [
      token.command,
      {
        desc: token.desc,
        text: token.text,
        args: reduceParams(token.args),
      },
    ])
  );
};

const reduceStructs = (
  structs: ReadonlyArray<StructParseState>
): Record<string, PluginStructBody> => {
  return Object.fromEntries(
    structs.map((struct): [string, PluginStructBody] => [
      struct.name,
      {
        params: reduceParams(struct.params),
      },
    ])
  );
};
