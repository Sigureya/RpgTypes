import type { JSONValue } from "@RpgTypes/libs";
import type { PrimitiveParam } from "@RpgTypes/rmmz/plugin";

export interface PluginParamExtractedValue {
  name: string;
  value: JSONValue;
  param: PrimitiveParam;
}
