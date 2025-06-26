import { KEYWORD_ARG } from "./constants/keyword";
import type { ArgToken, Token } from "./types/token";

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
