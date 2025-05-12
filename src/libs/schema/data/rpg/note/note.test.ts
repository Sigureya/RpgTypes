import { describe, test, expect, vi } from "vitest";
import {
  createNoteEntity,
  makeRegex,
  readNote,
  replaceNote,
  readNoteObject,
} from "./note";

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

describe("makeRegex", () => {
  describe("Normal cases", () => {
    test("Generates a regular expression object", () => {
      const regex = makeRegex();
      expect(regex).toBeInstanceOf(RegExp);
    });
  });
});

describe("readNoteObject", () => {
  describe("Normal cases", () => {
    test("Parses the note string and retrieves key-value pairs", () => {
      const result = readNoteObject(
        { note: exampleNoteTokyo },
        (key, value) => [key, value]
      );
      expect(result).toEqual([
        ["code", "13"],
        ["name", "tokyo"],
      ]);
    });

    test("Performs custom processing using a mock function", () => {
      const mockFn = vi.fn((key: string, value: string) => {
        return { key, value };
      });
      const mockData = { note: exampleNoteTokyo };
      const result = readNoteObject(mockData, mockFn);
      expect(result).toEqual([
        { key: "code", value: "13" },
        { key: "name", value: "tokyo" },
      ]);

      expect(mockFn).toBeCalledTimes(2);
      expect(mockFn.mock.calls[0]).toEqual(["code", "13", mockData]);
      expect(mockFn.mock.calls[1]).toEqual(["name", "tokyo", mockData]);
    });

    test("Returns an empty array when an empty string is passed", () => {
      const mockFn = vi.fn((key: string, value: string) => {
        return { key, value };
      });
      const result = readNoteObject({ note: "" }, mockFn);
      expect(result).toEqual([]);
      expect(mockFn).not.toBeCalled();
    });

    test("Returns an empty array when there are no tags", () => {
      const result = readNoteObject({ note: "test" }, (key, value) => [
        key,
        value,
      ]);
      expect(result).toEqual([]);
    });
  });
});

describe("readNote", () => {
  describe("Normal cases", () => {
    test("Parses the note string and retrieves key-value pairs", () => {
      const result = readNote(exampleNoteTokyo);
      expect(result).toEqual([
        ["code", "13"],
        ["name", "tokyo"],
      ]);

      const result2 = readNote(exampleNoteSaitama);
      expect(result2).toEqual([
        ["code", "11"],
        ["name", "saitama"],
      ]);
    });

    test("Reads only valid parts when incomplete tags are mixed", () => {
      const result = readNote("<code:13><name:tok");
      expect(result).toEqual([["code", "13"]]);
    });

    test("Returns an empty array when an empty string is passed", () => {
      const result = readNote("");
      expect(result).toEqual([]);
    });

    test("Returns an empty array when there are no tags", () => {
      const result = readNote("test");
      expect(result).toEqual([]);
    });

    describe("Error cases", () => {
      test("Ignores incomplete tags in the string", () => {
        const result = readNote("<name");
        expect(result).toEqual([]);
      });
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
