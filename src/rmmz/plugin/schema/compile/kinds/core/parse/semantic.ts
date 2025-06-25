import { KEYWORD_ARG } from "./keyword";
import type {
  PluginCommandTokens,
  Token,
  ArgToken,
  ParsingContext,
} from "./types/token";

export const sliceToken = (tokens: ReadonlyArray<Token>): ParsingContext[] => {
  const groups = tokens.reduce<ParsingContext[]>(
    (acc, token) => sliceTokenStep(acc, token, isHead),
    []
  );
  return groups;
};

const sliceTokenStep = (
  acc: ParsingContext[],
  token: Token,
  headFn: (token: Token) => boolean
): ParsingContext[] => {
  if (headFn(token)) {
    return [...acc, { head: token, tokens: [] }];
  }
  if (acc.length > 0) {
    acc[acc.length - 1].tokens.push(token);
  }
  return acc;
};

const isHead = (token: Token) =>
  token.keyword === "param" || token.keyword === "command";
export const pluginCommandContext = (
  context: ParsingContext
): PluginCommandTokens => {
  const desc = context.tokens.find((t) => t.keyword === "desc")?.value;
  const text = context.tokens.find((t) => t.keyword === "text")?.value;

  return {
    command: context.head.value,
    args: extractArgs(context.tokens),
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

  // 最後のargを追加
  if (result.current) {
    result.args.push(result.current);
  }
  return result.args;
};

const extractArgsReducer = (
  state: State,
  token: Token,
  paramKeyword: string
): State => {
  if (token.keyword === paramKeyword) {
    if (state.current) {
      state.args.push(state.current);
    }
    return {
      args: state.args,
      current: { arg: token.value, token: [] },
    };
  }
  if (state.current) {
    // 現在のargにトークン追加
    state.current.token.push(token);
  }
  return state;
};
