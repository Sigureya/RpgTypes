import { compileAttributes } from "./attributes";
import { parsePlugin as parse } from "./parse/parseV2";
import type { PluginParamTokens } from "./parse/types";
import type { PrimitiveParam } from "./primitiveParams";
export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
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
  attr: compileAttributes(param),
});
