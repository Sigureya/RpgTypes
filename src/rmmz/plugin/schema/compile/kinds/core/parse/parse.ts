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

interface CC {
  params: ParsingContext[];
  commands: ParsingContext[];
}

const keywordIs = <S extends string>(
  token: Token,
  keyword: S
): token is {
  keyword: S;
  value: string;
} => {
  return token.keyword === keyword;
};

const isCommandToken = (token: Token) => keywordIs(token, "command");
const isParamToken = (token: Token) => keywordIs(token, "param");

const sliceToken2 = (tokens: Token[]): CC => {
  const tt = sliceToken(tokens);
  return {
    params: tt.filter((t) => isParamToken(t.head)),
    commands: tt.filter((t) => isCommandToken(t.head)),
  };
};

// Token列をParsingContext[]に分割
const sliceToken = (tokens: Token[]): ParsingContext[] => {
  return tokens.reduce<ParsingContext[]>((acc, token) => {
    if (isParamToken(token) || isCommandToken(token)) {
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

// ...parsePlugin等はそのまま...
export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = sliceToken2(tokens);
  const commands = cc.commands.map(pluginCommandContext);
  const params = cc.params.map(pluginParamContext);

  return {
    commands,
    meta: createMetaInfo(tokens),
    params,
  };
};
