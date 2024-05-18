///<reference path="./data/eventCommand/index.ts" />
import type * as $ from "./data/eventCommand/codes";
import type { ValueOf } from "@utils/types";
import type { EventCommandTable } from "./types";

export const createCommand = <T extends ValueOf<typeof $>>(
  code: T,
  // エラー:ts(2536)が出た場合、EventCommandTableにコマンド引数の型を追記してください
  // 一番上のreferenceでリンクを貼ってあります

  parameters: EventCommandTable[T]["parameters"],
  indent = 0
) => ({
  code,
  indent,
  parameters,
});
