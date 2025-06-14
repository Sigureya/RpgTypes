import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { DataIndexArg } from "../numbers";
import { dataXXX, indexIndex, indexIndex2, dataArrayXXX } from "./makeSchema";

describe("", () => {
  const ajv = new Ajv({ strict: true });
  const schema = indexIndex();
  const variable = ajv.compile(schema);
  describe("normal case", () => {
    test("", () => {
      const mock: DataIndexArg<"actor"> = {
        type: "actor",
        default: 3,
        desc: "desc",
        text: "text",
        parent: "parent",
      };
      expect(mock).toSatisfy(variable);
    });
    test("", () => {
      const mock: DataIndexArg<"weapon"> = {
        type: "weapon",
        default: 15,
      };
      expect(mock).toSatisfy(variable);
    });
  });
  describe("error case", () => {
    test("", () => {
      const mock: DataIndexArg<"weapon"> = {
        type: "weapon",
        default: -1,
      };
      expect(mock).not.toSatisfy(variable);
    });
    test("", () => {
      const mock: DataIndexArg<"weapon"> = {
        type: "weapon",
        default: 3.14,
      };
      expect(mock).not.toSatisfy(variable);
    });
  });
});
