import { compileAttributes } from "./attributes";
import { createMetaInfo } from "./parse/metaInfo";
import { parsePluginCommand } from "./parse/pluginCommand";
import { groupTokensByContext } from "./parse/semantic";
import { tokenize } from "./parse/toknize";
import type { PluginCommandTokens } from "./parse/types/pluginCommand";
import type { ParsingContext, Token } from "./parse/types/token";
import type { StructParamPrimitive } from "./primitiveParams";

export interface PluginParam {
  name: string;
  attr: StructParamPrimitive;
}

export interface PluginCommand {
  command: string;
  desc?: string;
  text?: string;
  args: PluginParam[];
}

export const parsePlugin = (pluginAnnotations: string) => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = groupTokensByContext(tokens);

  return {
    commands: cc.commands.map(buildCommand),
    meta: createMetaInfo(tokens),
    params: cc.params.map(buildParam),
  };
};

const buildParam = (context: ParsingContext): PluginParam => {
  return {
    name: context.head.value,
    attr: compileAttributes(context.tokens),
  };
};

const buildCommand = (context: ParsingContext): PluginCommand => {
  const commandTokens = parsePluginCommand(context);
  return {
    ...withTexts(commandTokens),
    command: commandTokens.command,
    args: commandTokens.args.map<PluginParam>((arg) => ({
      name: arg.arg,
      attr: compileAttributes(arg.attributes),
    })),
  };
};

const withTexts = (command: PluginCommandTokens) => {
  return {
    ...(typeof command.desc === "string" ? { desc: command.desc } : {}),
    ...(typeof command.text === "string" ? { text: command.text } : {}),
  };
};
