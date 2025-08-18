import { describe, test, expect, vi } from "vitest";
import { makeRegex, readNote, readNoteObject } from "./read";
import type { NoteReadResult } from "./types";
const exampleNoteTokyo = "<code:13><name:tokyo>";
const exampleNoteSaitama = "<code:11><name:saitama>";

describe("makeRegex", () => {
  describe("Normal cases", () => {
    const regex = makeRegex();
    test("Generates a regular expression object", () => {
      expect(regex).toBeInstanceOf(RegExp);
    });
    test("Matches the expected pattern", () => {
      expect("<key:value>").toMatch(regex);
      expect(exampleNoteTokyo).toMatch(regex);
      expect(exampleNoteSaitama).toMatch(regex);
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
    describe("Parses the note string and retrieves key-value pairs", () => {
      test("", () => {
        const result = readNote(exampleNoteTokyo);
        const expectedResult: NoteReadResult[] = [
          {
            key: "code",
            value: "13",
          },
          {
            key: "name",
            value: "tokyo",
          },
        ];
        expect(result).toEqual(expectedResult);
      });
      test("", () => {
        const result2 = readNote(exampleNoteSaitama);
        const expectedResult2: NoteReadResult[] = [
          { key: "code", value: "11" },
          { key: "name", value: "saitama" },
        ];
        expect(result2).toEqual(expectedResult2);
      });
    });

    test("Reads only valid parts when incomplete tags are mixed", () => {
      const result = readNote("<code:13><name:tok");
      const expectedResult: NoteReadResult[] = [
        {
          key: "code",
          value: "13",
        },
      ];
      expect(result).toEqual(expectedResult);
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
