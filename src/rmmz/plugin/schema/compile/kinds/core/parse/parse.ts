import { pluginParamContext } from "./context";
import { createMetaInfo } from "./metaInfo";
import { pluginCommandContext } from "./semantic";
import { sliceToken3 } from "./semantic2";
import { tokenize } from "./toknize";
import type { ParsingResult } from "./types/result";
import type { Token } from "./types/token";

// ...parsePlugin等はそのまま...
export const parsePlugin = (pluginAnnotations: string): ParsingResult => {
  const tokens: Token[] = tokenize(pluginAnnotations);
  const cc = sliceToken3(tokens);
  const commands = cc.commands.map(pluginCommandContext);
  const params = cc.params.map(pluginParamContext);

  return {
    commands,
    meta: createMetaInfo(tokens),
    params,
  };
};
