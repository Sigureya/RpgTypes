import type { OptionItem, Token } from "./types/token";

interface State {
  result: OptionItem[];
  current: OptionItem | null;
}

export const compileOptionItems = (
  tokens: ReadonlyArray<Token>
): OptionItem[] => {
  const { current, result } = tokens.reduce<State>(
    (acc, token) => {
      if (acc.current && token.keyword === "value") {
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
      if (token.keyword === "option") {
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
