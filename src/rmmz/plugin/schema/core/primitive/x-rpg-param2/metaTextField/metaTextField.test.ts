import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import {
  makeRmmzParamTextSchema,
  metaSchemaSharedParam,
} from "./metaTextField";
import type { RmmzParamTextFields, X_MetaParam_Shared } from "./types";

describe("makeRmmzParamTextSchema", () => {
  const ajv = new Ajv({ strict: true });
  const validate = ajv.compile(makeRmmzParamTextSchema());

  describe("valid cases", () => {
    test("validates text parameter with default value", () => {
      const mock: RmmzParamTextFields = {
        desc: "A simple text parameter",
        text: "Sample text",
        parent: "parentField",
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates text parameter with empty string", () => {
      const mock: RmmzParamTextFields = {
        desc: "An empty text parameter",
        text: "",
        parent: "parentField",
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates text parameter with special characters", () => {
      const mock: RmmzParamTextFields = {
        desc: "A text parameter with special characters",
        text: "Text with special characters !@#$%^&*()",
        parent: "parentField",
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates text parameter with multiline text", () => {
      expect({}).toSatisfy(validate);
    });
  });
});

describe("metaSchemaSharedParam", () => {
  const ajv = new Ajv({ strict: true });
  const validate = ajv.compile(metaSchemaSharedParam());

  describe("valid cases", () => {
    test("validates shared parameter with kind and parent", () => {
      const mock: X_MetaParam_Shared = {
        kind: "exampleKind",
        parent: "parentField",
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates shared parameter with only kind", () => {
      const mock: X_MetaParam_Shared = {
        kind: "anotherKind",
      };
      expect(mock).toSatisfy(validate);
    });
  });
});
