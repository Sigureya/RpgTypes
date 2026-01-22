import { describe, test, expect } from "vitest";
import type { Data_Vehicle } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_VEHICLE } from "./vehicle";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_SYSTEM_VEHICLE);

describe("SCHEMA_SYSTEM_VEHICLE", () => {
  test("valid vehicle data passes validation", () => {
    const data: Data_Vehicle = {
      characterIndex: 2,
      characterName: "Airship",
      bgm: {
        name: "AirshipTheme",
        volume: 80,
        pitch: 100,
        pan: 0,
      },
      startMapId: 1,
      startX: 10,
      startY: 20,
    };
    expect(data).toSatisfy(validate);
  });

  test("missing required property fails validation", () => {
    const data: Omit<Data_Vehicle, "characterName"> = {
      characterIndex: 2,
      // characterName is missing
      bgm: {
        name: "AirshipTheme",
        volume: 80,
        pitch: 100,
        pan: 0,
      },
      startMapId: 1,
      startX: 10,
      startY: 20,
    };
    expect(data).not.toSatisfy(validate);
  });

  test("invalid bgm property fails validation", () => {
    const data = {
      characterIndex: 2,
      characterName: "Airship",
      bgm: {
        name: "AirshipTheme",
        volume: 200, // invalid: over max
        pitch: 100,
        pan: 0,
      },
      startMapId: 1,
      startX: 10,
      startY: 20,
    };
    expect(data).not.toSatisfy(validate);
  });

  test("additional properties are not allowed", () => {
    const data = {
      characterIndex: 2,
      characterName: "Airship",
      bgm: {
        name: "AirshipTheme",
        volume: 80,
        pitch: 100,
        pan: 0,
      },
      startMapId: 1,
      startX: 10,
      startY: 20,
      extra: "not allowed",
    };
    expect(data).not.toSatisfy(validate);
  });

  test("startX and startY out of range fails validation", () => {
    const data = {
      characterIndex: 2,
      characterName: "Airship",
      bgm: {
        name: "AirshipTheme",
        volume: 80,
        pitch: 100,
        pan: 0,
      },
      startMapId: 1,
      startX: 6000, // invalid: over max
      startY: -1, // invalid: below min
    };
    expect(data).not.toSatisfy(validate);
  });
});
