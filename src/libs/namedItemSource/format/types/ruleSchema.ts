import type { JSONSchemaType } from "ajv";
import type { FormatRule } from "./rule/types";

export interface FormatRuleSchema<T> {
  schema: JSONSchemaType<T>;
  rule: FormatRule<T>;
}
