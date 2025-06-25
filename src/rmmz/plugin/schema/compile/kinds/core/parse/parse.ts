import { createMetaInfo } from "./metaInfo";
import { sliceToken, pluginCommandContext } from "./semantic";
import { tokenize } from "./toknize";
import type { ParsingResult } from "./types/result";
import type { Token } from "./types/token";

export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const contexts = sliceToken(tokens);
  return {
    commands: contexts.map(pluginCommandContext),
    meta: createMetaInfo(tokens),
  };
};
