import { sliceToken, pluginCommandContext } from "./semantic";
import { tokenize } from "./toknize";
import type { ParsingContext, ParsingResult, Token } from "./types";

export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const contexts: ParsingContext[] = sliceToken(tokens);
  return {
    commands: contexts.map(pluginCommandContext),
  };
};
