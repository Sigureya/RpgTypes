import type { ContextUnion, Context_PluginParam } from "./parseContext";
import type { Token } from "./toknize/toknize";

export const semanticAnalysis = (tokens: Token[]): ContextUnion[] => {
  // Perform semantic analysis on the tokens
  // This is a placeholder implementation
  return [];
};

export const sliceToken = (tokens: ReadonlyArray<Token>): Token[][] => {
  return tokens.reduce<Token[][]>(sliceTokenReducer, []);
};

// @param, @command, @struct などの区切りでトークンを分割
// sliceToken用: reduceの1ステップを関数化
const sliceTokenReducer = (acc: Token[][], token: Token): Token[][] => {
  if (isHead(token) && acc.length > 0 && acc[acc.length - 1].length > 0) {
    // 新しいグループを開始
    return [...acc, [token]];
  }
  // 既存グループに追加
  if (acc.length === 0) {
    return [[token]];
  }
  const last = acc[acc.length - 1];
  return [...acc.slice(0, -1), [...last, token]];
};

const isHead = (token: Token) =>
  token.keyword === "param" ||
  token.keyword === "command" ||
  token.keyword === "struct";
