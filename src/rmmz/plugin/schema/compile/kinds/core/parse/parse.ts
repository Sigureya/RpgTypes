import { createMetaInfo } from "./metaInfo";
import { parsePluginCommand } from "./pluginCommand";
import { parsePluginParam, groupTokensByContext } from "./semantic";
import { tokenize } from "./toknize";
import type { ParsingResult } from "./types/result";
import type { Token } from "./types/token";

// ...parsePlugin等はそのまま...
export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = groupTokensByContext(tokens);

  return {
    commands: cc.commands.map(parsePluginCommand),
    meta: createMetaInfo(tokens),
    params: cc.params.map(parsePluginParam),
  };
};
