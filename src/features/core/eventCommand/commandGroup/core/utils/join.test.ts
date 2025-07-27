import { describe, test, expect } from "vitest";
import { textFromJoinedBodies } from "./join";
import type { TextCommandBody } from "./textCommandBody";

type PickedTextCommandBody = Pick<TextCommandBody, "parameters">;
describe("textFromJoinedBodies", () => {
  describe("Normal case", () => {
    test("should return the single string when the input contains one body", () => {
      const result: string = textFromJoinedBodies([
        { parameters: ["aaa"] },
      ] satisfies PickedTextCommandBody[]);
      expect(result).toBe("aaa");
    });

    test("should trim trailing whitespace from a single string", () => {
      const result: string = textFromJoinedBodies([{ parameters: ["aaa "] }]);
      expect(result).toBe("aaa");
    });

    test("should return the string as-is when it contains spaces", () => {
      const result: string = textFromJoinedBodies([
        { parameters: ["aaa bbb"] },
      ]);
      expect(result).toBe("aaa bbb");
    });

    test("should join multiple strings with a newline", () => {
      const result: string = textFromJoinedBodies([
        { parameters: ["aaa"] },
        { parameters: ["bbb"] },
      ]);
      expect(result).toBe("aaa\nbbb");
    });
  });

  describe("Empty or whitespace-only parameters", () => {
    test("should handle empty strings in parameters", () => {
      const result = textFromJoinedBodies([
        { parameters: [""] },
        { parameters: ["aaa"] },
      ]);
      expect(result).toBe("\naaa");
    });

    test("should handle parameters with whitespace only", () => {
      const result = textFromJoinedBodies([
        { parameters: ["   "] },
        { parameters: ["aaa"] },
      ]);
      expect(result).toBe("\naaa");
    });

    test("should handle parameters with newlines only", () => {
      const result = textFromJoinedBodies([
        { parameters: ["\n"] },
        { parameters: ["aaa"] },
      ]);
      expect(result).toBe("\naaa");
    });
  });

  describe("Trailing whitespace or tabs", () => {
    test("should trim trailing spaces", () => {
      const result = textFromJoinedBodies([{ parameters: ["aaa  "] }]);
      expect(result).toBe("aaa");
    });

    test("should trim trailing tabs", () => {
      const result = textFromJoinedBodies([{ parameters: ["aaa\t"] }]);
      expect(result).toBe("aaa");
    });

    test("should handle strings with embedded newlines", () => {
      const result = textFromJoinedBodies([{ parameters: ["aaa\nbbb"] }]);
      expect(result).toBe("aaa\nbbb");
    });
  });

  describe("Multiple bodies with mixed formatting", () => {
    test("should join multiple strings with mixed formatting", () => {
      const result = textFromJoinedBodies([
        { parameters: ["aaa"] },
        { parameters: ["bbb\n"] },
        { parameters: ["ccc  "] },
      ]);
      expect(result).toBe("aaa\nbbb\nccc");
    });

    test("should handle multiple lines in a single body", () => {
      const result = textFromJoinedBodies([
        { parameters: ["aaa\nbbb\n"] },
        { parameters: ["ccc  "] },
      ]);
      expect(result).toBe("aaa\nbbb\nccc");
    });
  });

  describe("Special characters and long strings", () => {
    test("should handle parameters with special characters", () => {
      const result = textFromJoinedBodies([
        { parameters: ["aaa\nbbb"] },
        { parameters: ["ccc"] },
      ] as PickedTextCommandBody[]);
      expect(result).toBe("aaa\nbbb\nccc");
    });

    test("should handle long strings correctly", () => {
      const longString = "a".repeat(1000);
      const result = textFromJoinedBodies([
        { parameters: [longString] },
        { parameters: ["bbb"] },
      ] as PickedTextCommandBody[]);
      expect(result).toBe(`${longString}\nbbb`);
    });
  });

  describe("Edge cases with empty or whitespace-only input", () => {
    test("should return an empty string when the input array is empty", () => {
      const result = textFromJoinedBodies([]);
      expect(result).toBe("");
    });

    test("should return an empty string when the input contains only newlines", () => {
      const result = textFromJoinedBodies([{ parameters: ["\n"] }]);
      expect(result).toBe("");
    });

    test("should return an empty string when the input contains only tabs", () => {
      const result = textFromJoinedBodies([{ parameters: ["\t"] }]);
      expect(result).toBe("");
    });

    test("should return an empty string when all parameters are empty strings", () => {
      const result = textFromJoinedBodies([
        { parameters: [""] },
        { parameters: [""] },
      ]);
      expect(result).toBe("");
    });

    test("should return an empty string when all parameters are empty or newlines", () => {
      const result = textFromJoinedBodies([
        { parameters: [""] },
        { parameters: ["\n\n"] },
        { parameters: [""] },
      ] as PickedTextCommandBody[]);
      expect(result).toBe("");
    });
  });
});
