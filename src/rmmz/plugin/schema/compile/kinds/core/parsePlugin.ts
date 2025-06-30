import { compileAttributes } from "./attributes";
import { parsePlugin as parse } from "./parse/parse";
import type { PluginCommandTokens, PluginParamTokens } from "./parse/types";
import type { PluginCommandBody } from "./pluginEntriesEx";
import type { PrimitiveParam } from "./primitiveParams";
export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export interface PluginRmmz {}

export const parsePlugin = (text: string) => {
  const pp = parse(text);

  return {
    meta: pp.meta,
    params: pp.params.map(compileParam),
    commands: rrr(pp.commands),
  };
};

const compileParam = (param: PluginParamTokens): PluginParam => ({
  name: param.name,
  attr: compileAttributes(param),
});

const reduceParams = (
  params: ReadonlyArray<PluginParamTokens>
): { [key: string]: PrimitiveParam } => {
  return params.reduce<{ [key: string]: PrimitiveParam }>((acc, param) => {
    const compiled: PluginParam = compileParam(param);
    return {
      [compiled.name]: compiled.attr,
      ...acc,
    };
  }, {});
};

const rrr = (
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
