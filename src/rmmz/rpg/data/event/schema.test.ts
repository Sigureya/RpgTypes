import { describe, test, expect } from "vitest";
import { COMMENT_HEAD } from "@RpgTypes/libs/eventCommand";
import Ajv from "ajv";
import { makeTroopData, makeTroopEventConditions } from "./makeEvent";
import SCHEMA_DATA_TROOP from "./schema";
import type { Data_TroopUnknonw } from "./troop";

const ajv = new Ajv({
  strict: true,
  discriminator: true,
});

const troopSchema = ajv.compile(SCHEMA_DATA_TROOP);

const isDataTroop = (data: unknown): data is Data_TroopUnknonw => {
  return troopSchema(data);
};

describe("", () => {
  test("", () => {
    const troop: Data_TroopUnknonw = makeTroopData();
    expect(troop).toSatisfy(isDataTroop);
  });
  test("", () => {
    const troop = makeTroopData({
      pages: [
        {
          span: 0,
          conditions: makeTroopEventConditions(),
          list: [{ code: COMMENT_HEAD, parameters: ["test"], indent: 0 }],
        },
      ],
    });
    expect(troop).toSatisfy(isDataTroop);
  });
});
