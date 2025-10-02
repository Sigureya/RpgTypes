import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import SCHEMA_RPG_PARAM_META_SCHEMA from "./x-rpg-param.schema";

interface X_MetaParam_Shared {
  kind: string;
  parent?: string | null;
}

const makeValidator = () => {
  const schema = SCHEMA_RPG_PARAM_META_SCHEMA;
  const ajv = new Ajv({
    discriminator: true,
    strict: true,
    code: { source: false },
  });
  return ajv.compile(schema);
};

describe("", () => {
  test("", () => {
    const validate = makeValidator();
    const xx: X_MetaParam_Shared = {
      kind: "string",
      parent: "parentId",
    };
    expect(xx).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const xx: X_MetaParam_Shared = {
      kind: "multiline_string",
      parent: "parentId",
    };
    expect(xx).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const xx: X_MetaParam_Shared = {
      kind: "unnknown",
      parent: "parentId",
    };
    expect(xx).not.toSatisfy(validate);
  });
});
