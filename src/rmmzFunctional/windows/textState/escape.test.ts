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
  usedValiableIds: number[];
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

const resolveVariable = (value: number): string | number => {
  return value * 2;
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
    return "";
  }
  if (ctrl === "P") {
    if (value === 1) {
      return "Bob";
    }
    if (value === 2) {
      return "Alice";
    }
    return "";
  }
};

const runTestCase = (testCases: TestCase) => {
  describe(`input:${testCases.input}`, () => {
    test("calls", () => {
      const fn = vi.fn((ctrl, value) => `@${ctrl}:${value}`);
      const result = convertEscapeCharacters(
        testCases.input,
        resolveVariable,
        fn,
      );
      testCases.calls.forEach((call) => {
        const msg = `${call.ctrl}(${call.value}) should be called`;
        expect(fn, msg).toHaveBeenCalledWith(call.ctrl, call.value);
      });
      expect(result).toBe(testCases.expected2);
    });
    test("calls v", () => {
      const vfn = vi.fn(resolveVariable);
      convertEscapeCharacters(testCases.input, vfn, () => "");
      testCases.usedValiableIds.forEach((id) => {
        const msg = `V(${id}) should be called`;
        expect(vfn, msg).toHaveBeenCalledWith(id);
      });
      const set = new Set(vfn.mock.calls.flat());
      const expectedSet = new Set(testCases.usedValiableIds);
      expect(set).toEqual(expectedSet);
    });

    test("should convert escape characters correctly", () => {
      const result = convertEscapeCharacters(
        testCases.input,
        resolveVariable,
        newTextFn,
      );
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
    usedValiableIds: [],
  },
  {
    input: "\\\\",
    expected: "\\",
    calls: [],
    usedValiableIds: [],
    expected2: "\\",
  },
  {
    input: "Text Position \\X[20]",
    calls: [{ ctrl: "X", value: 20 }],
    expected: "Text Position \\X[20]",
    expected2: "Text Position @X:20",
    usedValiableIds: [],
  },
  {
    input: "My name is \\N[1]",
    expected: "My name is Alice",
    expected2: "My name is @N:1",
    calls: [{ ctrl: "N", value: 1 }],
    usedValiableIds: [],
  },
  {
    input: "My name is \\n[2]",
    expected: "My name is Bob",
    expected2: "My name is @N:2",
    usedValiableIds: [],
    calls: [{ ctrl: "N", value: 2 }],
  },
  {
    input: "My name is \\n[3].",
    expected: "My name is .",
    expected2: "My name is @N:3.",
    usedValiableIds: [],
    calls: [{ ctrl: "N", value: 3 }],
  },
  {
    input: "Member name is \\P[1]",
    expected: "Member name is Bob",
    expected2: "Member name is @P:1",
    calls: [{ ctrl: "P", value: 1 }],
    usedValiableIds: [],
  },
  {
    input: "Member name is \\p[2]",
    expected: "Member name is Alice",
    expected2: "Member name is @P:2",
    calls: [{ ctrl: "P", value: 2 }],
    usedValiableIds: [],
  },
  {
    input: "Member name is \\p[3]",
    expected: "Member name is ",
    expected2: "Member name is @P:3",
    calls: [{ ctrl: "P", value: 3 }],
    usedValiableIds: [],
  },
  {
    input: "price is \\V[124] gold",
    expected: "price is 248 gold",
    expected2: "price is 248 gold",
    calls: [],
    usedValiableIds: [124],
  },
  {
    input: "price is \\v[321] gold",
    expected: "price is 642 gold",
    expected2: "price is 642 gold",
    calls: [],
    usedValiableIds: [321],
  },
  {
    input: "pos : X:\\V[1], Y:\\V[2]",
    expected: "pos : X:2, Y:4",
    expected2: "pos : X:2, Y:4",
    calls: [],
    usedValiableIds: [1, 2],
  },
  {
    input: "My name is \\N[\\V[1]]",
    expected: "My name is Bob",
    expected2: "My name is @N:2",
    calls: [{ ctrl: "N", value: 2 }],
    usedValiableIds: [1],
  },
  {
    input: "\\v[\\v[1]]",
    calls: [],
    usedValiableIds: [1, 2],
    expected: "4",
    expected2: "4",
  },
  {
    input: "\\v[\\v[\\v[1]]]",
    calls: [],
    expected: "\\v[4]",
    expected2: "\\v[4]",
    usedValiableIds: [1, 2],
  },
  {
    input: "\\P[1] is \\N[2]",
    expected: "Bob is Bob",
    expected2: "@P:1 is @N:2",
    calls: [
      { ctrl: "N", value: 2 },
      { ctrl: "P", value: 1 },
    ],
    usedValiableIds: [],
  },
  {
    input: "\\P[1] is \\N[\\V[1]]",
    expected: "Bob is Bob",
    expected2: "@P:1 is @N:2",
    calls: [
      { ctrl: "N", value: 2 },
      { ctrl: "P", value: 1 },
    ],
    usedValiableIds: [1],
  },
];

describe("convertEscapeCharactersMzStyle", () => {
  testCases.forEach(runTestCase);
});
