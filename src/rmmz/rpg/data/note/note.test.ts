import { describe, test, expect, vi } from "vitest";
import { createNoteEntity, replaceNote } from "./note";
import type { NoteReadResult } from "./types";

const exampleNoteTokyo = "<code:13><name:tokyo>";
const exampleNoteSaitama = "<code:11><name:saitama>";

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
      const result = replaceNote("", mockDictionary);
      expect(result).toBe("");
    });
  });

  // Uncomment and modify if needed
  // describe("Error cases", () => {
  //   test("Does not throw an error even if the dictionary function is invalid", () => {
  //     const result = replaceNote(exampleNoteTokyo, () => {
  //       throw new Error("Dictionary function error");
  //     });
  //     expect(result).toBe(exampleNoteTokyo);
  //   });
  // });
});
