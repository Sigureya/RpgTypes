import type { PrimitiveParam } from "@RpgTypes/rmmz/plugin";
import type { JSONValue } from "./jsonTypes";

export interface PluginParamExtractedValue {
  name: string;
  value: JSONValue;
  param: PrimitiveParam;
}
