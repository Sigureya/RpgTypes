import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeTroopData, makeTroopEventConditions } from "./makeEvent";
import { COMMENT_HEAD } from "./map";
import { SCHEMA_DATA_TROOP } from "./schema";
import type { Data_Troop } from "./troop";

const ajv = new Ajv({
  code: { source: false },
  strict: true,
  discriminator: true,
});

const troopSchema = ajv.compile(SCHEMA_DATA_TROOP);

const isDataTroop = (data: unknown): data is Data_Troop => {
  return troopSchema(data);
};

describe("", () => {
  test("", () => {
    const troop: Data_Troop = makeTroopData();
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
