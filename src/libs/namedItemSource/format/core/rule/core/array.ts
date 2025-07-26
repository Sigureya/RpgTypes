import type { PickByTypeKeys } from "src/libs/templates";
import type { FormatPlaceholder } from "./direct";

export interface FormatArrayIndexCompiled<T, SourceId>
  extends FormatPlaceholder<T, number> {
  dataKey: PickByTypeKeys<T, number>;
  placeHolder: `{${PickByTypeKeys<T, number>}}`;
  sourceId: SourceId;
}
