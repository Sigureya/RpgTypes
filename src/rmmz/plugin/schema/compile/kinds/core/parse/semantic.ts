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
  return sliceToken2<XToken>(tokens, isParamOrCommand);
};

// 暫定処置。
const sliceToken2 = <HeadToken extends Token>(
  tokens: ReadonlyArray<Token>,
  isHead: (token: Token) => token is HeadToken
): ParsingContext<HeadToken>[] => {
  return tokens.reduce<ParsingContext<HeadToken>[]>(
    (acc, token) => sliceTokenStep(acc, token, isHead),
    []
  );
};

/**
 * - sliceTokenのreducer関数。かなり複雑だったので分割してある。
 */
const sliceTokenStep = <HeadTokenType extends Token>(
  acc: ParsingContext<HeadTokenType>[],
  token: Token,
  headFn: (token: Token) => token is HeadTokenType
): ParsingContext<HeadTokenType>[] => {
  if (headFn(token)) {
    // 新しいグループを開始
    return acc.concat({ head: token, tokens: [] });
  }
  if (acc.length === 0) {
    // まだグループが無い場合は無視（または必要に応じて新規作成）
    return acc;
  }
  // 既存グループのtokensに非破壊的に追加
  const last = acc[acc.length - 1];
  const updatedLast: ParsingContext<HeadTokenType> = {
    head: last.head,
    tokens: last.tokens.concat(token),
  };
  return [...acc.slice(0, -1), updatedLast];
};

const isParamOrCommand = (token: Token): token is XToken =>
  token.keyword === "param" || token.keyword === "command";

export const pluginCommandContext = (
  context: ParsingContext<XToken>
): PluginCommandTokens => {
  const firstArgIndex = context.tokens.findIndex(
    (t) => t.keyword === KEYWORD_ARG
  );
  const headAttr = context.tokens.slice(
    0,
    firstArgIndex < 0 ? undefined : firstArgIndex
  );
  const desc = headAttr.find((t) => t.keyword === "desc")?.value;
  const text = headAttr.find((t) => t.keyword === "text")?.value;

  return {
    command: context.head.value,
    args: extractArgs(context.tokens.slice(firstArgIndex)),
    ...(text ? { text } : {}),
    ...(desc ? { desc } : {}),
  };
};

interface State {
  args: ArgToken[];
  current: ArgToken | null;
}

const extractArgs = (tokens: ReadonlyArray<Token>): ArgToken[] => {
  const result = tokens.reduce<State>(
    (state, token) => extractArgsReducer(state, token, KEYWORD_ARG),
    {
      args: [],
      current: null,
    }
  );

  return result.current ? [...result.args, result.current] : result.args;
};

const extractArgsReducer = (
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
