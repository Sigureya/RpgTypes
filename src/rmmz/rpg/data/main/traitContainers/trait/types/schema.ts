import type { JSONSchemaType } from "ajv";
import type { Trait } from "./trait";

const SCHEMA_TRAIT = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" },
  },
} as const satisfies JSONSchemaType<Trait>;

export default SCHEMA_TRAIT;
