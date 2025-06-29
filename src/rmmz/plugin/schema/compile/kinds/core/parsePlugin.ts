import { compileAttributes } from "./attributes";
import type { PluginParamTokens } from "./parse/parseV2";
import { parsePlugin as parse } from "./parse/parseV2";
import type { StructParamPrimitive } from "./primitiveParams";
export interface PluginParam {
  name: string;
  attr: StructParamPrimitive;
}

export const parsePlugin = (text: string) => {
  const pp = parse(text);

  return {
    meta: pp.meta,
    params: pp.params.map(compileParam),
    commands: pp.commands.map((c) => ({
      command: c.command,
      text: c.text,
      desc: c.desc,
      args: c.args.map(compileParam),
    })),
  };
};
const compileParam = (param: PluginParamTokens): PluginParam => ({
  name: param.name,
  attr: compileAttributes(param.attr),
});
