import type { PickByTypeKeys } from "@RpgTypes/templates";
import type { FormatPlaceholder } from "./direct";

export interface FormatArrayIndex<T, SourceId>
  extends FormatPlaceholder<T, number> {
  dataKey: PickByTypeKeys<T, number>;
  placeHolder: `{${PickByTypeKeys<T, number>}}`;
  sourceId: SourceId;
}
