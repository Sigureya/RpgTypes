import type { JSONSchemaType } from "ajv";
import type { Data_MapInfo } from "./mapInfo";

const SCHEMA_DATA_MAP_INFO = {
  type: "object",
  required: [
    "name",
    "id",
    "expanded",
    "order",
    "parentId",
    "scrollX",
    "scrollY",
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    expanded: { type: "boolean" },
    order: { type: "integer" },
    parentId: { type: "integer" },
    scrollX: { type: "number" },
    scrollY: { type: "number" },
  },
} as const satisfies JSONSchemaType<Data_MapInfo>;

export default SCHEMA_DATA_MAP_INFO;
