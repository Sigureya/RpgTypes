import type { JSONSchemaType } from "ajv";
import type { MapEvent_PageCondition } from "./condition";
import SCHEMA_MAP_EVENT_PAGE_CONDITION from "./condition/schema";
import type { MoveRouteDataUnkwnown } from "./eventCommand/moveRoute";
import { SCHEMA_MOVEROUTE_DATA } from "./eventCommand/moveRoute/schema";
import SCHEMA_MAP_EVENT_IMAGE from "./image/schema";
import type { MapEvent_Image } from "./image/types";
import type { MapEventPage } from "./page";

const SCHEMA_MAP_EVENT_PAGE = {
  type: "object",
  required: [
    "image",
    "moveRoute",
    "conditions",
    "directionFix",
    "moveFrequency",
  ] satisfies (keyof MapEventPage)[],
  properties: {
    moveFrequency: { type: "integer" },
    directionFix: { type: "boolean" },
    conditions:
      SCHEMA_MAP_EVENT_PAGE_CONDITION satisfies JSONSchemaType<MapEvent_PageCondition>,

    image: SCHEMA_MAP_EVENT_IMAGE satisfies JSONSchemaType<MapEvent_Image>,
    moveRoute:
      SCHEMA_MOVEROUTE_DATA satisfies JSONSchemaType<MoveRouteDataUnkwnown>,
  },
} as const satisfies JSONSchemaType<Omit<MapEventPage, "list">>;

export default SCHEMA_MAP_EVENT_PAGE;
