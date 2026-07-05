import { test, expect, describe, vi } from "vitest";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_Members,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import {
  convertEscapeCharacters,
  convertEscapeCharactersMzStyle,
} from "./escape";

interface TestCase {
  input: string;
  expected: string;
  expected2: string;
  calls: {
    ctrl: string;
    value: number;
  }[];
}

const mockActors: Rmmz_ActorsReadonly<{ name: () => string }> = {
  actor: (actorId: number) => {
    if (actorId === 1) {
      return { name: () => "Alice" };
    }
    if (actorId === 2) {
      return { name: () => "Bob" };
    }
    return null;
  },
};

const mockVariables: Rmmz_Variables = {
  value: (variableId: number) => {
    return variableId * 2;
  },
  clear: () => {},
  setValue: () => {},
  onChange: () => {},
};

const mockParty: Rmmz_Members<{ name: () => string }> = {
  members: () => [{ name: () => "Bob" }, { name: () => "Alice" }],
};

const newTextFn = (ctrl: string, value: number): string | undefined => {
  if (ctrl === "V") {
    return `${value * 2}`;
  }
  if (ctrl === "N") {
    if (value === 1) {
      return "Alice";
    }
    if (value === 2) {
      return "Bob";
    }
  }
};
const runTestCase = (testCases: TestCase) => {
  describe(testCases.input, () => {
    test("calls", () => {
      const fn = vi.fn((ctrl, value) => `@${ctrl}:${value}`);
      const result = convertEscapeCharacters(testCases.input, fn);
      testCases.calls.forEach((call) => {
        const msg = `${call.ctrl}(${call.value}) should be called`;
        expect(fn, msg).toHaveBeenCalledWith(call.ctrl, call.value);
      });
      expect(result).toBe(testCases.expected2);
    });
    test("should convert escape characters correctly", () => {
      const result = convertEscapeCharacters(testCases.input, newTextFn);
      expect(result).toBe(testCases.expected);
    });
    test("mz style", () => {
      const result: string = convertEscapeCharactersMzStyle(
        testCases.input,
        mockActors,
        mockParty,
        mockVariables,
      );
      expect(result).toBe(testCases.expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    input: "hello",
    expected: "hello",
    expected2: "hello",
    calls: [],
  },
  {
    input: "My name is \\N[1]",
    expected: "My name is Alice",
    expected2: "My name is @N:1",

    calls: [{ ctrl: "N", value: 1 }],
  },
  {
    input: "price is \\V[124] gold",
    expected: "price is 248 gold",
    expected2: "price is @V:124 gold",
    calls: [{ ctrl: "V", value: 124 }],
  },
  {
    input: "price is \\v[321] gold",
    expected: "price is 642 gold",
    expected2: "price is @V:321 gold",
    calls: [{ ctrl: "V", value: 321 }],
  },
];

describe("convertEscapeCharactersMzStyle", () => {
  testCases.forEach(runTestCase);
});
