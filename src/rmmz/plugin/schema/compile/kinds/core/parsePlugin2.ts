import { compileAttributes } from "./attributes";
import type {
  PluginCommandTokens,
  PluginParamTokens,
} from "./parse/types/types";
import type { PrimitiveParam } from "./primitiveParams";

const compileArgs = (params: ReadonlyArray<PluginParamTokens>) => {};

const cmdXX = (tokens: ReadonlyArray<PluginCommandTokens>) => {
  return tokens.map((token) => ({
    command: token.command,
    desc: token.desc,
    text: token.text,
    args: token.args,
  }));
};
