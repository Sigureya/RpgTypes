import { createMetaInfo } from "./metaInfo";
import { parseTokenBlocks } from "./semantic";
import { tokenize } from "./toknize";
import type { ParsingResult } from "./types/result";
import type { Token } from "./types/token";

// ...parsePlugin等はそのまま...
export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = parseTokenBlocks(tokens);

  return {
    commands: cc.commands,
    meta: createMetaInfo(tokens),
    params: cc.params,
  };
};
