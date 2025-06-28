import {
  KEYWORD_AUTHOR,
  KEYWORD_TARGET,
  KEYWORD_PLUGINDESC,
} from "./constants/keyword";
import type { PluginMeta } from "./types/result";
import type { Token } from "./types/token";

export const createMetaInfo = (tokens: ReadonlyArray<Token>): PluginMeta => {
  return {
    ...find(tokens, KEYWORD_AUTHOR),
    ...find(tokens, KEYWORD_TARGET),
    ...find(tokens, KEYWORD_PLUGINDESC),
  };
};

const find = <K extends string>(
  tokens: ReadonlyArray<Token>,
  key: K
): {} | { [P in K]: string } => {
  const value = tokens.find((token) => token.keyword === key)?.value;
  return typeof value === "string"
    ? {
        [key]: value,
      }
    : {};
};
