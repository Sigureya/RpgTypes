import { KEYWORD_ARG } from "./constants/keyword";
import type {
  ParsingContext,
  Token,
  HeadToken,
  ParamToken,
  PluginCommandTokens,
  ArgToken,
} from "./types/token";

interface SlicingState {
  params: ParamToken[];
  commands: PluginCommandTokens[];
  current: ParsingContext | null;
}

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

export interface SliceResult {
  params: ParamToken[];
  commands: PluginCommandTokens[];
}

export const parsePluginParam = (context: ParsingContext): ParamToken => ({
  param: context.head.value,
  attributes: context.tokens,
});

export const parseTokenBlocks = (tokens: Token[]): SliceResult => {
  const acc = tokens.reduce<SlicingState>(tokenGroupingReducer, {
    params: [],
    commands: [],
    current: null,
  });
  if (!acc.current) {
    return {
      params: acc.params,
      commands: acc.commands,
    };
  }
  if (isCommandToken(acc.current.head)) {
    return {
      params: acc.params,
      commands: [...acc.commands, parsePluginCommand(acc.current)],
    };
  }
  if (isParamToken(acc.current.head)) {
    return {
      params: [...acc.params, parsePluginParam(acc.current)],
      commands: acc.commands,
    };
  }
  return acc;
};

const tokenGroupingReducer = (
  acc: SlicingState,
  token: Token
): SlicingState => {
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
  acc: SlicingState,
  token: HeadToken<"command" | "param">
): SlicingState => {
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
      commands: [...acc.commands, parsePluginCommand(acc.current)],
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
      params: [...acc.params, parsePluginParam(acc.current)],
      current: {
        head: token,
        tokens: [],
      },
    };
  }

  return acc;
};

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
