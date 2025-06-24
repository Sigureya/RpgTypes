import type { Context2, Token } from "./types";
// トークン列をContext2[]に変換
export const sliceToken = (tokens: ReadonlyArray<Token>): Context2[] => {
  const groups = tokens.reduce<Context2[]>(
    (acc, token) => sliceTokenStep(acc, token),
    []
  );
  return groups;
};

const sliceTokenStep = (acc: Context2[], token: Token): Context2[] => {
  if (isHead(token)) {
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
