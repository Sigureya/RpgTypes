import { describe, test, expect, vi } from "vitest";
import { createNoteEntity, replaceNote } from "./note";

const exampleNoteTokyo = "<code:13><name:tokyo>";
describe("createNoteEntity", () => {
  describe("Normal cases", () => {
    test("Generates a string with the specified key and value", () => {
      const result = createNoteEntity("key", "value");
      expect(result).toBe("<key:value>");
    });
  });
});

describe("replaceNote", () => {
  const mockDictionary = (key: string, value: string): string => {
    if (key === "name") {
      return value.toUpperCase();
    }
    // Return the value as is for other keys
    return value;
  };

  describe("Normal cases", () => {
    test("Replaces values using a dictionary function", () => {
      const result = replaceNote(exampleNoteTokyo, mockDictionary);
      expect(result).toBe("<code:13><name:TOKYO>");
    });

    test("Does not throw an error for an empty string", () => {
      const mockFn = vi.fn(() => "");
      const result = replaceNote("", mockFn);
      expect(result).toBe("");
      expect(mockFn).not.toBeCalled();
    });
  });
});
