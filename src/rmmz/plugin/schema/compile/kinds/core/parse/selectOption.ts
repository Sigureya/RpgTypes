import { KEYWORD_OPTION, KEYWORD_VALUE } from "./keyword/constants";

export interface Token {
  keyword: string;
  value: string;
}

export interface OptionItem {
  option: string;
  value: string;
}

interface State {
  result: OptionItem[];
  current: OptionItem | null;
}

export const compileOptionItems = (
  tokens: ReadonlyArray<Token>
): OptionItem[] => {
  const { current, result } = tokens.reduce<State>(
    (acc, token) => {
      if (acc.current && token.keyword === KEYWORD_VALUE) {
        return {
          result: [
            ...acc.result,
            {
              option: acc.current.option,
              value: token.value,
            },
          ],
          current: null,
        };
      }
      if (token.keyword === KEYWORD_OPTION) {
        return {
          result: acc.result,
          current: {
            option: token.value,
            value: token.value,
          },
        };
      }
      return acc;
    },
    { result: [], current: null }
  );
  return current ? [...result, current] : result;
};
