import type * as $ from "./paramaters/codes";
import type { ValueOf } from "@utils/types";
import type { EventCommandTable } from "./types";
// エラー:ts(2536)が出た場合、EventCommandTableにコマンド引数の型を追記してください

export const createCommand = <T extends ValueOf<typeof $>>(
  code: T,
  parameters: EventCommandTable[T]["parameters"],
  indent = 0
) => ({
  code,
  indent,
  parameters,
});
