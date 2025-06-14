import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSelectSchema } from "./select";
import type { RmmzParam_Select } from "./types";

describe("RmmzParam_Select Schema", () => {
  const ajv = new Ajv({ strict: false });
  const schema = makeSelectSchema();
  const validate = ajv.compile(schema);
  describe("valid cases", () => {
    test("should validate a valid select parameter with string options", () => {
      const mock: RmmzParam_Select<string> = {
        type: "select",
        default: "option1",
        options: [
          { value: "a", option: "option1" },
          { value: "b", option: "option2" },
        ],
        desc: "Select an option",
        text: "Option Text",
        parent: "Parent ID",
      };
      expect(mock).toSatisfy(validate);
    });

    test("should validate a valid select parameter with number options", () => {
      const mock: RmmzParam_Select<number> = {
        type: "select",
        default: 1,
        options: [
          { value: 1, option: "1" },
          { value: 2, option: "2" },
        ],
      };
      expect(mock).toSatisfy(validate);
    });

    test("should validate a valid select parameter with mixed options", () => {
      const mock: RmmzParam_Select<string | number> = {
        type: "select",
        default: "option1",
        options: [
          { value: 123, option: "number" },
          { value: "text", option: "string" },
        ],
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
