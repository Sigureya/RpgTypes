import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSelectSchema } from "./select";
import type { RmmzParamCore_Select } from "./types";

describe("RmmzParam_Select JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true });
  const schema = makeSelectSchema();
  const validate = ajv.compile(schema);
  describe("validates select parameter", () => {
    test("with string options", () => {
      const mock: RmmzParamCore_Select<string> = {
        type: "select",
        default: "option1",
        options: [
          { value: "a", option: "option1" },
          { value: "b", option: "option2" },
        ],
      };
      expect(mock).toSatisfy(validate);
    });

    test("with number options", () => {
      const mock: RmmzParamCore_Select<number> = {
        type: "select",
        default: 1,
        options: [
          { value: 1, option: "1" },
          { value: 2, option: "2" },
        ],
      };
      expect(mock).toSatisfy(validate);
    });
    test("with empty number options", () => {
      const mock: RmmzParamCore_Select<number> = {
        type: "select",
        default: 1,
        options: [],
      };
      expect(mock).toSatisfy(validate);
    });
    test("with empty string options", () => {
      const mock: RmmzParamCore_Select<string> = {
        type: "select",
        default: "text",
        options: [],
      };
      expect(mock).toSatisfy(validate);
    });
    describe("error case - property missing", () => {
      test(".options", () => {
        const mock: Omit<RmmzParamCore_Select<string>, "options"> = {
          type: "select",
          default: "text",
        };
        expect(mock).not.toSatisfy(validate);
      });
      test(".default", () => {
        const mock: Omit<RmmzParamCore_Select<string>, "default"> = {
          type: "select",
          options: [
            { value: "a", option: "option1" },
            { value: "b", option: "option2" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
      test(".type", () => {
        const mock: Omit<RmmzParamCore_Select<string>, "type"> = {
          default: "text",
          options: [
            { value: "a", option: "option1" },
            { value: "b", option: "option2" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
    });
    describe("invalid cases", () => {
      // このテストケースではstringとnumberが混在したパターンをテストする
      // これらのデータは全て不正である
      test("rejects mixed string and number option values (default is string)", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: "a",
          options: [
            { value: "a", option: "A" },
            { value: 1, option: "1" },
            { value: "b", option: "B" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
      test("rejects mixed string and number option values (default is number)", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: 1,
          options: [
            { value: 1, option: "1" },
            { value: "a", option: "A" },
            { value: 2, option: "2" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });

      test("rejects all number option values with string default", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: "string",
          options: [
            { value: 123, option: "number" },
            { value: 456, option: "number" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
      test("rejects all string option values with number default", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: 5,
          options: [{ value: "5", option: "number" }],
        };
        expect(mock).not.toSatisfy(validate);
      });
    });
  });
});
