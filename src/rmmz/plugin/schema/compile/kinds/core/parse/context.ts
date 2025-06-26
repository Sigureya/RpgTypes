import { extractArgs } from "./extratArgs";
import type { ParsingContext, PluginCommandTokens } from "./types/token";

// コマンドブロックからPluginCommandTokensを生成
export const pluginCommandContext = (
  context: ParsingContext
): PluginCommandTokens => {
  const tokens = context.tokens;
  const args = extractArgs(tokens);

  // コマンド属性（desc, text）は最初のargまで
  const firstArgIdx = tokens.findIndex((t) => t.keyword === "arg");
  const headAttrs = firstArgIdx === -1 ? tokens : tokens.slice(0, firstArgIdx);
  const desc = headAttrs.find((t) => t.keyword === "desc")?.value;
  const text = headAttrs.find((t) => t.keyword === "text")?.value;

  return {
    command: context.head.value,
    ...(text ? { text } : {}),
    ...(desc ? { desc } : {}),
    args,
  };
};
