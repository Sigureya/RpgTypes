import type { Token, ParsingContext, HeadToken } from "./types/token";

type XToken = HeadToken<"param" | "command">;

export const sliceToken = (tokens: ReadonlyArray<Token>) => {
  return sliceToken2(tokens);
};

// 暫定処置。
export const sliceToken2 = (tokens: ReadonlyArray<Token>) => {
  return tokens.reduce<ParsingContext[]>(
    (acc, token) => sliceTokenStep(acc, token),
    []
  );
};

/**
 * - sliceTokenのreducer関数。かなり複雑だったので分割してある。
 */
const sliceTokenStep = (
  acc: ParsingContext[],
  token: Token
  //  headFn: (token: Token) => token is HeadTokenType
) => {
  if (isCommandToken(token) || isParamToken(token)) {
    // 新しいグループを開始
    return acc.concat({ head: token, tokens: [] });
  }
  if (acc.length === 0) {
    // まだグループが無い場合は無視（または必要に応じて新規作成）
    return acc;
  }
  // 既存グループのtokensに非破壊的に追加
  const last = acc[acc.length - 1];
  const updatedLast: ParsingContext = {
    head: last.head,
    tokens: last.tokens.concat(token),
  };
  return [...acc.slice(0, -1), updatedLast];
};

const isCommandToken = (token: Token): token is HeadToken<"command"> =>
  token.keyword === "command";

const isParamToken = (token: Token): token is HeadToken<"param"> =>
  token.keyword === "param";

export const isParamOrCommand = (token: Token): token is XToken =>
  token.keyword === "param" || token.keyword === "command";
