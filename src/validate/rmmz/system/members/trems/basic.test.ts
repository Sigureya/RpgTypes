import { describe, test, expect } from "vitest";
import type { Terms_BasicArray, Terms_Basic } from "@RpgTypes/rmmz";
import { makeTermsBasic, makeTermsBasicFromArray } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY } from "./basic";

const ajv = new Ajv({ strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY);

describe("SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC", () => {
  test("should be a valid JSON schema function", () => {
    expect(validate).toBeTypeOf("function");
  });
  test("makeTermsBasic returns valid Terms_BasicArray with default values", () => {
    const validTermsBasicArray: Terms_BasicArray = makeTermsBasic({});
    expect(validTermsBasicArray).toSatisfy(validate);
  });
  test("invalid: array length is 9 (too short)", () => {
    const array = Array.from({ length: 9 }, () => "");
    expect(array).not.toSatisfy(validate);
  });
  test("valid: array length is 10 (just right)", () => {
    const array = Array.from({ length: 10 }, () => "");
    expect(array).toSatisfy(validate);
  });
  test("invalid: array length is 11 (too long)", () => {
    const array = Array.from({ length: 11 }, () => "");
    expect(array).not.toSatisfy(validate);
  });
});

const testTermsBasicProperty = (key: keyof Terms_Basic, text: string) => {
  const terms: Partial<Terms_Basic> = {
    [key]: text,
  };
  const termsArray: Terms_BasicArray = makeTermsBasic(terms);
  const termsObject: Terms_Basic = makeTermsBasicFromArray(termsArray);
  test(`makeTermsBasicFromArray reconstructs ${key} = ${text}`, () => {
    expect(termsObject[key]).toBe(text);
  });
  test(`makeTermsBasic returns valid Terms_BasicArray when only ${key} is set`, () =>
    expect(termsArray).toSatisfy(validate));
};

describe("makeTermsBasic individual property assignment", () => {
  testTermsBasicProperty("level", "Level");
  testTermsBasicProperty("levelA", "Level");
  testTermsBasicProperty("hp", "HP");
  testTermsBasicProperty("hpA", "HP");
  testTermsBasicProperty("mp", "MP");
  testTermsBasicProperty("mpA", "MP");
  testTermsBasicProperty("tp", "TP");
  testTermsBasicProperty("tpA", "TP");
  testTermsBasicProperty("experience", "EXP");
  testTermsBasicProperty("exp", "EXP");
});

describe("makeTermsBasic with all properties set", () => {
  const termsArray: Terms_BasicArray = makeTermsBasic({
    level: "A0",
    levelA: "M1",
    hp: "J2",
    hpA: "R3",
    mp: "P4",
    mpA: "U5",
    tp: "Z6",
    tpA: "F7",
    experience: "G8",
    exp: "S9",
  });
  test("makeTermsBasic returns valid Terms_BasicArray when all properties are set", () => {
    expect(termsArray).toSatisfy(validate);
  });
  test("termsArray[0] is level", () => expect(termsArray[0]).toBe("A0"));
  test("termsArray[1] is levelA", () => expect(termsArray[1]).toBe("M1"));
  test("termsArray[2] is hp", () => expect(termsArray[2]).toBe("J2"));
  test("termsArray[3] is hpA", () => expect(termsArray[3]).toBe("R3"));
  test("termsArray[4] is mp", () => expect(termsArray[4]).toBe("P4"));
  test("termsArray[5] is mpA", () => expect(termsArray[5]).toBe("U5"));
  test("termsArray[6] is tp", () => expect(termsArray[6]).toBe("Z6"));
  test("termsArray[7] is tpA", () => expect(termsArray[7]).toBe("F7"));
  test("termsArray[8] is experience", () => expect(termsArray[8]).toBe("G8"));
  test("termsArray[9] is exp", () => expect(termsArray[9]).toBe("S9"));
});
