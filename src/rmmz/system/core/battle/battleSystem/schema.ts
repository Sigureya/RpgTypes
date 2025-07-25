import type { JSONSchemaType } from "ajv";

const SCHEMA_SYSTEM_BATTLE_RULE = {
  type: "number",
  const: [0, 1, 2],
} as const satisfies JSONSchemaType<number>;

export default SCHEMA_SYSTEM_BATTLE_RULE;
