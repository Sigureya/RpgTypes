import { compileAttributes } from "./attributes";
import { createMetaInfo } from "./parse/metaInfo";
import { parsePluginCommand } from "./parse/pluginCommand";
import { parsePluginParam, groupTokensByContext } from "./parse/semantic";
import { tokenize } from "./parse/toknize";
import type { ParsingContext, Token } from "./parse/types/token";
import type { StructParamPrimitive } from "./primitiveParams";

export interface PP {
  name: string;
  attr: StructParamPrimitive;
}

export const parsePlugin = (pluginAnnotations: string) => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = groupTokensByContext(tokens);

  return {
    commands: cc.commands.map(parsePluginCommand),
    meta: createMetaInfo(tokens),
    params: cc.params.map(xxx),
  };
};

const xxx = (context: ParsingContext): PP => {
  const paramTokens = parsePluginParam(context);
  const attr: StructParamPrimitive = compileAttributes(paramTokens.attributes);
  return {
    name: paramTokens.param,
    attr: attr,
  };
};
