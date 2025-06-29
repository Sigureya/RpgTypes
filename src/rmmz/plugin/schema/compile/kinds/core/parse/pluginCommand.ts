import { KEYWORD_ARG } from "./keyword/constants";
import type { PluginCommandTokens, ArgToken } from "./types/pluginCommand";
import type { ParsingContext, Token } from "./types/token";

export const parsePluginCommand = (
  context: ParsingContext
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
