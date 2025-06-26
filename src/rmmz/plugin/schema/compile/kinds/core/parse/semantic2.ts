import { pluginCommandContext } from "./semantic";
import type {
  ParsingContext,
  Token,
  HeadToken,
  ParamToken,
  PluginCommandTokens,
} from "./types/token";

interface SlicingState {
  params: ParamToken[];
  commands: PluginCommandTokens[];
  current: ParsingContext | null;
}

export interface SliceResult {
  params: ParamToken[];
  commands: PluginCommandTokens[];
}
const pluginParamContext = (context: ParsingContext): ParamToken => ({
  param: context.head.value,
  attributes: context.tokens,
});

export const sliceToken3 = (tokens: Token[]): SliceResult => {
  const acc = tokens.reduce<SlicingState>(tokenReducer, {
    params: [],
    commands: [],
    current: null,
  });

  // ★ ここで最後のcurrentを追加
  if (acc.current) {
    if (isCommandToken(acc.current.head)) {
      acc.commands = [...acc.commands, pluginCommandContext(acc.current)];
    } else if (isParamToken(acc.current.head)) {
      acc.params = [...acc.params, pluginParamContext(acc.current)];
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

const tokenReducer = (acc: SlicingState, token: Token): SlicingState => {
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
      commands: [...acc.commands, pluginCommandContext(acc.current)],
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
      params: [...acc.params, pluginParamContext(acc.current)],
      current: {
        head: token,
        tokens: [],
      },
    };
  }

  return acc;
};
