import type { JSONSchemaType } from "ajv";
import type { Damage } from "./damage";
export const SCHEMA_DAMAGE = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" },
  },
} as const satisfies JSONSchemaType<Damage>;
