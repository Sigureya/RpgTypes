import { KEYWORD_ARG } from "./constants/keyword";
import type {
  PluginCommandTokens,
  Token,
  ArgToken,
  ParsingContext,
  HeadToken,
} from "./types/token";

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
export const sliceTokenStep = (
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

interface State {
  args: ArgToken[];
  current: ArgToken | null;
}

export const extractArgs = (tokens: ReadonlyArray<Token>): ArgToken[] => {
  const result = tokens.reduce<State>(
    (state, token) => extractArgsReducer(state, token, KEYWORD_ARG),
    {
      args: [],
      current: null,
    }
  );

  return result.current ? [...result.args, result.current] : result.args;
};

export const extractArgsReducer = (
  state: State,
  token: Token,
  paramKeyword: string
): State => {
  if (token.keyword === paramKeyword) {
    return {
      args: state.current ? [...state.args, state.current] : state.args,
      current: { arg: token.value, attributes: [] },
    };
  }
  if (state.current) {
    return {
      args: state.args,
      current: {
        arg: state.current.arg,
        attributes: state.current.attributes.concat(token),
      },
    };
  }

  return state;
};
