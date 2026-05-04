import { describe, test, expect } from "vitest";
import { isNoteBoolean, isNoteNumber } from "./note";

describe("isNoteBoolean", () => {
  test("true", () => {
    expect("true").toSatisfy(isNoteBoolean);
  });
  test("false", () => {
    expect("false").toSatisfy(isNoteBoolean);
  });
  test("TRUE", () => {
    expect("TRUE").toSatisfy(isNoteBoolean);
  });
  test("FALSE", () => {
    expect("FALSE").toSatisfy(isNoteBoolean);
  });

  test("not boolean", () => {
    expect("123").not.toSatisfy(isNoteBoolean);
  });
});

describe("isNoteNumber", () => {
  test("number", () => {
    expect("123.45").toSatisfy(isNoteNumber);
  });
  test("integer", () => {
    expect("123").toSatisfy(isNoteNumber);
  });
  test("negative number", () => {
    expect("-123.45").toSatisfy(isNoteNumber);
  });
  test("negative integer", () => {
    expect("-123").toSatisfy(isNoteNumber);
  });
  test("number with spaces", () => {
    expect("  123.45  ").toSatisfy(isNoteNumber);
  });
  test("number with leading and trailing spaces", () => {
    expect("123.45  ").toSatisfy(isNoteNumber);
  });
  test("number with leading spaces", () => {
    expect("  123.45").toSatisfy(isNoteNumber);
  });
  test("number with leading zeros", () => {
    expect("000123.45").toSatisfy(isNoteNumber);
  });
  test("not number", () => {
    expect("true").not.toSatisfy(isNoteNumber);
  });
});
