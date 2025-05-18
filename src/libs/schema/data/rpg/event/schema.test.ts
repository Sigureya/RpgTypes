import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { SCHEMA_DATA_TROOP } from "./schema";
import type { Data_Troop } from "./troop";
import { makeTroopData, makeTroopEventConditions } from "./makeEvent";
import { COMMENT_HEAD } from "./map";

const ajv = new Ajv();

const troopSchema = ajv.compile(SCHEMA_DATA_TROOP);

const isDataTroop = (data: unknown): data is Data_Troop => {
  return troopSchema(data);
};

describe("", () => {
  test("", () => {
    const troop: Data_Troop = makeTroopData();
    expect(isDataTroop(troop)).toBe(true);
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
    expect(isDataTroop(troop)).toBe(true);
  });
});
