import type { JSONSchemaType } from "ajv";
import type { FormatRule } from "./rule";

export interface FormatRuleSchema<T> {
  schema: JSONSchemaType<T>;
  rule: FormatRule<T>;
}
