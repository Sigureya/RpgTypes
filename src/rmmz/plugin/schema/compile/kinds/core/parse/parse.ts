import { extractArgs } from "./extratArgs";
import { createMetaInfo } from "./metaInfo";
import { sliceToken3 } from "./semantic2";
import { tokenize } from "./toknize";
import type { ParsingResult } from "./types/result";
import type {
  Token,
  ParsingContext,
  ParamToken,
  PluginCommandTokens,
} from "./types/token";

// ...parsePlugin等はそのまま...
export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = sliceToken3(tokens);
  const commands = cc.commands.map(pluginCommandContext);
  const params = cc.params.map(pluginParamContext);

  return {
    commands,
    meta: createMetaInfo(tokens),
    params,
  };
};

// パラメータブロックからParamTokenを生成
const pluginParamContext = (context: ParsingContext): ParamToken => ({
  param: context.head.value,
  attributes: context.tokens,
});

// コマンドブロックからPluginCommandTokensを生成
const pluginCommandContext = (context: ParsingContext): PluginCommandTokens => {
  const tokens = context.tokens;
  const args = extractArgs(tokens);

  // コマンド属性（desc, text）は最初のargまで
  const firstArgIdx = tokens.findIndex((t) => t.keyword === "arg");
  const headAttrs = firstArgIdx === -1 ? tokens : tokens.slice(0, firstArgIdx);
  const desc = headAttrs.find((t) => t.keyword === "desc")?.value;
  const text = headAttrs.find((t) => t.keyword === "text")?.value;

  return {
    command: context.head.value,
    ...(text ? { text } : {}),
    ...(desc ? { desc } : {}),
    args,
  };
};
