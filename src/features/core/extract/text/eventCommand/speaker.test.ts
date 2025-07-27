import { describe, expect, test } from "vitest";
import type { Command_ShowMessageHeader, ControlChar } from "@RpgTypes/rmmz";
import { getControlChars, makeCommandShowMessage } from "@RpgTypes/rmmz";
import { pickSpeakerName, speakerNameIsHHH } from "./speaker";

describe.skip("", () => {
  describe("", () => {
    test("", () => expect(speakerNameIsHHH("abc")).toBe(true));
    test("", () => expect(speakerNameIsHHH("\\C[67]abc")).toBe(true));
  });
  describe("", () => {
    test("", () => expect(speakerNameIsHHH("\\N[3]")).toBe(false));
    test("", () => expect(speakerNameIsHHH("\\C[67]\\N[3]")).toBe(false));
  });
  describe("", () => {
    test("", () => expect(speakerNameIsHHH("\\V[67]")).toBe(false));
    test("", () => expect(speakerNameIsHHH("\\C[67]\\V[32]")).toBe(false));
  });
});
describe("", () => {
  describe("", () => {
    test("", () => {
      const command: Command_ShowMessageHeader = makeCommandShowMessage({
        speakerName: "abc",
      });
      expect(pickSpeakerName(command)).toEqual("abc");
    });
    test("", () => {
      const command: Command_ShowMessageHeader = makeCommandShowMessage({
        speakerName: "xyz   ",
      });
      expect(pickSpeakerName(command)).toEqual("xyz");
    });
  });
});

describe("", () => {
  describe("", () => {
    test("", () => expect(getControlChars("")).toEqual([]));
    test("", () => expect(getControlChars("abc")).toEqual([]));
    test("", () => expect(getControlChars("c[6]")).toEqual([]));
  });
  describe("", () => {
    test("", () => {
      expect(getControlChars("\\C[67]")).toEqual([
        { char: "C", id: 67 } satisfies ControlChar,
      ]);
    });
    test("", () => {
      expect(getControlChars("\\N[3]")).toEqual([
        { char: "N", id: 3 } satisfies ControlChar,
      ]);
    });
    test("", () => {
      expect(getControlChars("\\V[32]")).toEqual([
        { char: "V", id: 32 } satisfies ControlChar,
      ]);
    });
  });
});
