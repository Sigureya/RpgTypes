import { test, expect, describe } from "vitest";
import type { FormatCompiled } from "src/namedItemSource";
interface TestCaseItem {
  caseName: string;
  expected: FormatCompiled;
  code: number;
}
interface TestCaseGroup {
  groupName: string;
  errorMessage: `${string}`;
  cases: TestCaseItem[];
}
