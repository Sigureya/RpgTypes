import type { Context2, PluginCommandTokens, Token, ArgToken } from "./types";
// トークン列をContext2[]に変換
export const sliceToken = (tokens: ReadonlyArray<Token>): Context2[] => {
  const groups = tokens.reduce<Context2[]>(
    (acc, token) => sliceTokenStep(acc, token, isHead),
    []
  );
  return groups;
};

const sliceTokenStep = (
  acc: Context2[],
  token: Token,
  headFn: (token: Token) => boolean
): Context2[] => {
  if (headFn(token)) {
    return [...acc, { head: token, tokens: [] }];
  }
  if (acc.length > 0) {
    acc[acc.length - 1].tokens.push(token);
  }
  return acc;
};

const isHead = (token: Token) =>
  token.keyword === "param" ||
  token.keyword === "command" ||
  token.keyword === "struct";

export const pluginCommandContext = (
  context: Context2
): PluginCommandTokens => {
  const desc = context.tokens.find((t) => t.keyword === "desc")?.value;
  const text = context.tokens.find((t) => t.keyword === "text")?.value;

  // argsを抽出
  const args: ArgToken[] = [];
  let i = 0;
  while (i < context.tokens.length) {
    const t = context.tokens[i];
    if (t.keyword === "arg") {
      const argName = t.value;
      // 次の"arg"または終端までをこのargのtokenとする
      const tokenGroup: Token[] = [];
      let j = i + 1;
      while (j < context.tokens.length && context.tokens[j].keyword !== "arg") {
        tokenGroup.push(context.tokens[j]);
        j++;
      }
      args.push({
        arg: argName,
        token: tokenGroup,
      });
      i = j;
    } else {
      i++;
    }
  }

  return {
    command: context.head.value,
    args,
    ...(text ? { text } : {}),
    ...(desc ? { desc } : {}),
  };
};
