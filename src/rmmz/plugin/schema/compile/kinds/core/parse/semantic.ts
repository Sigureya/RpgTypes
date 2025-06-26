import { parsePluginCommand } from "./pluginCommand";
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
  const acc = reduceTokens(tokens);
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

const reduceTokens = (tokens: Token[]) => {
  return tokens.reduce<SlicingState>(
    (acc: SlicingState, token: Token): SlicingState => {
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
    },
    {
      params: [],
      commands: [],
      current: null,
    }
  );
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
