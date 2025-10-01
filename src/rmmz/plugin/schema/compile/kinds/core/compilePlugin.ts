import { compileAttributes } from "./attributes";
import { parsePlugin as parse } from "./parse/parse";
import type {
  ParsedPlugin,
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./parse/types/types";
import type {
  PluginCommandBody,
  PluginJSON,
  PluginStructBody,
} from "./pluginJSONTypes";
import type { PrimitiveParam } from "./primitiveParams";

export const compilePluginToObject = (text: string): PluginJSON => {
  return compilePluginToObjectCore(parse(text));
};

const compilePluginToObjectCore = (parsedPlugin: ParsedPlugin): PluginJSON => {
  return {
    target: "MZ",
    meta: parsedPlugin.meta,
    commands: reduceCommands(parsedPlugin.commands),
    params: reduceParams(parsedPlugin.params),
    structs: reduceStructs(parsedPlugin.structs),
  };
};

const reduceParams = (
  paramTokens: ReadonlyArray<PluginParamTokens>
): { [key: string]: PrimitiveParam } => {
  return Object.fromEntries(
    paramTokens.map((param): [string, PrimitiveParam] => [
      param.name,
      compileAttributes(param),
    ])
  );
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
