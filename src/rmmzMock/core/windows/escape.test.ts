import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { Window_Base } from "./rmmz_windows";

interface FakeWindowBase {
  actorName(n: number): string;
  partyMemberName(n: number): string;
}

const createMockedThis = (): MockedObject<FakeWindowBase> => {
  return {
    actorName: vi.fn((n: number) => `actorName${n}`),
    partyMemberName: vi.fn((n: number) => `partyMemberName${n}`),
  };
};

const createTextManager = () => {
  return {
    currncyUnit: () => "currencyUnit",
  };
};

interface TestCase {
  input: string;
  expected: string;
}

const runTestCases = (testCases: TestCase) => {
  describe("", () => {
    test("Window_Base", () => {
      const textManager = createTextManager();
      vi.stubGlobal("TextManager", textManager);
      const self = createMockedThis();
      const result = Window_Base.prototype.convertEscapeCharacters.call(
        self,
        testCases.input,
      );
      expect(result).toBe(testCases.expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    input: "simple text",
    expected: "simple text",
  },
  {
    input: "\\N[1]",
    expected: "actorName1",
  },
];

testCases.forEach(runTestCases);
