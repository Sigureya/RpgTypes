import type { ParsingContext, Token, HeadToken } from "./types/token";

export interface SliceResult {
  params: ParsingContext[];
  commands: ParsingContext[];
  current?: ParsingContext | null;
}

export const sliceToken3 = (tokens: Token[]): SliceResult => {
  const acc = tokens.reduce<SliceResult>(tokenReducer, {
    params: [],
    commands: [],
    current: null,
  });

  // ★ ここで最後のcurrentを追加
  if (acc.current) {
    if (isCommandToken(acc.current.head)) {
      acc.commands = [...acc.commands, acc.current];
    } else if (isParamToken(acc.current.head)) {
      acc.params = [...acc.params, acc.current];
    }
    acc.current = null;
  }

  return acc;
};

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

const tokenReducer = (acc: SliceResult, token: Token): SliceResult => {
  if (isParamToken(token)) {
    return updateCurrent(acc, token);
  }
  if (isCommandToken(token)) {
    return updateCurrent(acc, token);
  }
  if (acc.current) {
    return {
      commands: acc.commands,
      params: acc.params,
      current: {
        head: acc.current.head,
        tokens: [...acc.current.tokens, token],
      },
    };
  }
  return acc;
};

const updateCurrent = (
  acc: SliceResult,
  token: HeadToken<"command" | "param">
): SliceResult => {
  if (!acc.current) {
    return {
      commands: acc.commands,
      params: acc.params,
      current: {
        head: token,
        tokens: [],
      },
    };
  }
  if (isCommandToken(acc.current.head)) {
    return {
      commands: [...acc.commands, acc.current],
      params: acc.params,
      current: {
        head: token,
        tokens: [],
      },
    };
  }
  if (isParamToken(acc.current.head)) {
    return {
      commands: acc.commands,
      params: [...acc.params, acc.current],
      current: {
        head: token,
        tokens: [],
      },
    };
  }

  return acc;
};
