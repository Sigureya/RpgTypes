import {
  KEYWORD_GAME_OBJECTS,
  KEYWORD_GAME_VALIABLES,
  KEYWORD_MANAGER,
  KEYWORD_MATH,
} from "./keyword";

export const isScript = (text: string): boolean => {
  return (
    ssss(text, KEYWORD_GAME_VALIABLES) ||
    ssss(text, KEYWORD_GAME_OBJECTS) ||
    ssss(text, KEYWORD_MANAGER) ||
    ssss(text, KEYWORD_MATH)
  );
};

const ssss = (text: string, kewwords: ReadonlyArray<string>) => {
  return kewwords.some((keyword) => text.includes(keyword));
};
