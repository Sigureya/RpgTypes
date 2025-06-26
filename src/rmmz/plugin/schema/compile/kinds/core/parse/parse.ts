import { createMetaInfo } from "./metaInfo";
import { extractArgs } from "./semantic";
import { tokenize } from "./toknize";
import type { ParsingResult } from "./types/result";
import type {
  Token,
  ParsingContext,
  ParamToken,
  PluginCommandTokens,
} from "./types/token";

// Token列をParsingContext[]に分割
const sliceToken = (tokens: Token[]): ParsingContext[] => {
  return tokens.reduce<ParsingContext[]>((acc, token) => {
    if (token.keyword === "param" || token.keyword === "command") {
      acc.push({ head: token, tokens: [] });
    } else if (acc.length > 0) {
      const last = acc[acc.length - 1];
      acc[acc.length - 1] = {
        head: last.head,
        tokens: [...last.tokens, token],
      };
    }
    return acc;
  }, []);
};

// パラメータブロックからParamTokenを生成
const pluginParamContext = (
  context: ParsingContext<{ keyword: "param"; value: string }>
): ParamToken => ({
  param: context.head.value,
  attributes: context.tokens,
});

// コマンドブロックからPluginCommandTokensを生成
const pluginCommandContext = (
  context: ParsingContext<{ keyword: "command"; value: string }>
): PluginCommandTokens => {
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

// ...parsePlugin等はそのまま...
export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const contexts = sliceToken(tokens);

  const params: ParamToken[] = contexts
    .filter(
      (ctx): ctx is ParsingContext<{ keyword: "param"; value: string }> =>
        ctx.head.keyword === "param"
    )
    .map(pluginParamContext);

  const commands: PluginCommandTokens[] = contexts
    .filter(
      (ctx): ctx is ParsingContext<{ keyword: "command"; value: string }> =>
        ctx.head.keyword === "command"
    )
    .map(pluginCommandContext);

  return {
    commands,
    meta: createMetaInfo(tokens),
    params,
  };
};
