import { describe, expect, test } from "vitest";
import type { System_Terms } from "@RpgTypes/rmmz/system";
import {
  makeParamNamesArray,
  makeTermsBasic,
  makeTermsCommandArray,
  makeTermsMessages,
} from "@RpgTypes/rmmz/system";
import { Ajv } from "ajv";
import { SCHEMA_SYSTEM_TERMS_CORE } from "./terms";

const validate = new Ajv().compile(SCHEMA_SYSTEM_TERMS_CORE);

describe("SCHEMA_SYSTEM_TERMS_CORE", () => {
  test("should validate correct data", () => {
    const data: System_Terms = {
      basic: makeTermsBasic({}),
      commands: makeTermsCommandArray({}),
      messages: makeTermsMessages({}),
      params: makeParamNamesArray({}),
    };
    expect(data).toSatisfy(validate);
  });
});
