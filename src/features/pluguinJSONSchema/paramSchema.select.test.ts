import { describe, test, expect } from "vitest";
import type { SelectParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import Ajv from "ajv";
import { makePluginParamSchema } from "./paramSchema";

describe("select", () => {
  const ajv = new Ajv({
    strict: false,
    discriminator: true,
    code: { source: false },
  });
  const schema = makePluginParamSchema();
  const validate = ajv.compile(schema);
  describe("accepts valid KindOfSelect values", () => {
    test("valid full set data", () => {
      const fullsetData: SelectParam = {
        kind: "select",
        default: "value1",
        desc: "This is a select parameter",
        text: "Select Parameter",
        parent: "parentId",
        options: [
          {
            value: "value1",
            option: "Option 1",
          },
          {
            value: "value2",
            option: "Option 2",
          },
        ],
      };
      expect(fullsetData).toSatisfy(validate);
    });
    test("valid minimal set data", () => {
      const minimalData: SelectParam = {
        kind: "select",
        default: "",
        options: [],
      };
      expect(minimalData).toSatisfy(validate);
    });
  });
  describe("rejects invalid KindOfSelect values", () => {
    test("missing kind", () => {
      const invalidData: Omit<SelectParam, "kind"> = {
        default: "value1",
        options: [],
      };
      expect(invalidData).not.toSatisfy(validate);
    });
    test("missing default", () => {
      const invalidData: Omit<SelectParam, "default"> = {
        kind: "select",
        options: [],
      };
      expect(invalidData).not.toSatisfy(validate);
    });
    test("invalid options structure", () => {
      const invalidData: Omit<SelectParam, "options"> = {
        kind: "select",
        default: "value1",
      };
      expect(invalidData).not.toSatisfy(validate);
    });
  });
});
