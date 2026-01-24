import { describe, test, expect } from "vitest";
import type { MapEvent_Image } from "@RpgTypes/rmmz/rpg";
import Ajv from "ajv";
import { SCHEMA_MAP_EVENT_IMAGE } from "./image";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_MAP_EVENT_IMAGE);

const isMapEventImage = (data: unknown): data is MapEvent_Image => {
  return validate(data);
};

describe("RMMZ Map Event Image Schema Validation", () => {
  test("Valid MapEvent_Image passes schema validation", () => {
    const validData: MapEvent_Image = {
      characterIndex: 0,
      characterName: "Hero",
      direction: 2,
      pattern: 1,
      tileId: 5,
    };
    expect(validData).toSatisfy(isMapEventImage);
  });
});
