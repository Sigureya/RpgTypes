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
// args抽出ロジックを独立関数化

export const pluginCommandContext = (
  context: Context2
): PluginCommandTokens => {
  const desc = context.tokens.find((t) => t.keyword === "desc")?.value;
  const text = context.tokens.find((t) => t.keyword === "text")?.value;

  const args: ArgToken[] = extractArgs(context.tokens);

  return {
    command: context.head.value,
    args,
    ...(text ? { text } : {}),
    ...(desc ? { desc } : {}),
  };
};

const extractArgs = (tokens: ReadonlyArray<Token>): ArgToken[] => {
  type State = { args: ArgToken[]; current: ArgToken | null };
  const result = tokens.reduce<State>(extractArgsReducer, {
    args: [],
    current: null,
  });

  // 最後のargを追加
  if (result.current) {
    result.args.push(result.current);
  }
  return result.args;
};

const extractArgsReducer = (
  state: { args: ArgToken[]; current: ArgToken | null },
  t: Token
): { args: ArgToken[]; current: ArgToken | null } => {
  if (t.keyword === "arg") {
    if (state.current) {
      state.args.push(state.current);
    }
    return {
      args: state.args,
      current: { arg: t.value, token: [] },
    };
  }
  if (state.current) {
    // 現在のargにトークン追加
    state.current.token.push(t);
  }
  return state;
};
