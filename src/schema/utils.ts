///<reference path="./data/eventCommand/index.ts" />
import type { EventCommandTable } from "./data";

export const createCommand = <T extends keyof EventCommandTable>(
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
