import type { JSONSchemaType } from "ajv";

const SCHEMA_SYSTEM_OTHER_TERMS = {
  type: "object",
  properties: {
    gameTitle: { type: "string" },
    currencyUnit: { type: "string" },
  },
  required: ["gameTitle", "currencyUnit"],
  additionalProperties: false,
} as const satisfies JSONSchemaType<{
  gameTitle: string;
  currencyUnit: string;
}>;

export default SCHEMA_SYSTEM_OTHER_TERMS;
