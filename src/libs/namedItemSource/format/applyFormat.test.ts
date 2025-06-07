import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";

import type {
  FormatErrorLabels,
  FormatLabelResolved,
  FormatResult,
  FormatRule,
  NamedItemSource,
  SourceIdentifier,
} from "./core";
import { compileFormatBundle, formatWithCompiledBundle, isValidFormatBundle } from "./applyFormat";
import type { FormatLookupKeys } from "./core/accessor";
import type { CompiledFormatBundle } from "./bundle";

interface ItemEffects {
  code: number;
  dataId: number;
  value1: number;
  value2: number;
}

const ELEMENT = {
  fire: 1,
  ice: 2,
  thunder: 3,
};

const mockElements: NamedItemSource = {
  source: { author: "rmmz", module: "system", kind: "elements" },
  label: "elements",
  items: [
    { id: ELEMENT.fire, name: "fire" },
    { id: ELEMENT.ice, name: "ice" },
    { id: ELEMENT.thunder, name: "thunder" },
  ],
};

const mockState: NamedItemSource = {
  source: { author: "rmmz", module: "data", kind: "state" },
  label: "state",
  items: [
    { id: 4, name: "poison" },
    { id: 5, name: "burn" },
    { id: 6, name: "freeze" },
  ],
};

const mockRule: FormatRule<ItemEffects, SourceIdentifier> = {
  placeHolders: ["value1", "value2"],
  itemMapper: {
    dataIdKey: "dataId",
    kindKey: "code",
    placeHolder: "name",
    map: [
      { kindId: 4, sourceId: { ...mockElements.source } },
      { kindId: 5, sourceId: { ...mockState.source } },
    ],
  },
};

const mockErrorLabeles = {
  extraPlaceHolder: "Extra placeholder error",
  longPlaceHolder: "Placeholder is too long",
  missingName: "Missing name error",
  missingSourceId: "Missing source ID error",
  formatVeryLong: "Format is too long",
} as const satisfies FormatErrorLabels;

const CODE_ELEMENT = 1;
const CODE_STATE = 2;
const CODE_RECOVERY = 3;

const mockElementsLable = {
  label: "element damage",
  pattern: "{name} rate {value1}% + {value2}",
  targetKey: CODE_ELEMENT,
  dataSource: { ...mockElements.source },
} as const satisfies FormatLabelResolved<number>;

const mockStateLable = {
  label: "state",
  pattern: "{name} {value1}%",
  targetKey: CODE_STATE,
  dataSource: { ...mockState.source },
} as const satisfies FormatLabelResolved<number>;

const mockRecoveryLable = {
  label: "recovery",
  pattern: "{value1}% + {value2}point",
  targetKey: CODE_RECOVERY,
} as const satisfies FormatLabelResolved<number>;

interface TestCase {
  caseName: string;
  data: ItemEffects;
  expected: FormatResult;
  fn: (data: ItemEffects, mock: MockedObject<FormatLookupKeys<ItemEffects, number>>) => void;
}

const testFormatWithCompiledBundle = (
  bundle: CompiledFormatBundle<ItemEffects, number, SourceIdentifier>,
  { caseName, data, expected, fn }: TestCase
) => {
  const mockedLookup = {
    extractMapKey: vi.fn((d: ItemEffects) => d.code),
    extractDataId: vi.fn((d: ItemEffects) => d.dataId),
    unknownKey: vi.fn((code) => `Unknown Cofr: ${code}`),
  } satisfies MockedObject<FormatLookupKeys<ItemEffects, number>>;

  const result: FormatResult = formatWithCompiledBundle(data, bundle, mockedLookup);
  describe(caseName, () => {
    test("should return expected result", () => {
      expect(result).toEqual(expected);
    });
    test("should call lookup methods", () => {
      fn(data, mockedLookup);
    });
  });
};

const runTestCases = (
  caseName: string,
  bundle: CompiledFormatBundle<ItemEffects, number, SourceIdentifier>,
  testCases: TestCase[]
) => {
  describe(caseName, () => {
    testCases.forEach((testCase) => {
      testFormatWithCompiledBundle(bundle, testCase);
    });
  });
};
describe("", () => {
  const bundle = compileFormatBundle<ItemEffects, number>(
    mockRule,
    [mockStateLable, mockElementsLable, mockRecoveryLable],
    [mockState, mockElements],
    mockErrorLabeles
  );
  describe("isValidFormatBundle", () => {
    test("", () => {
      expect(bundle.errors).toEqual([]);
    });
    test("bundle should be valid", () => {
      expect(bundle).toSatisfy(isValidFormatBundle);
    });
  });
  runTestCases("normal case", bundle, [
    {
      caseName: "elements format",
      data: { code: CODE_ELEMENT, dataId: ELEMENT.fire, value1: 10, value2: 20 },
      expected: { label: mockElementsLable.label, text: "fire rate 10% + 20" },
      fn: (data, lookup) => {
        expect(lookup.extractMapKey).toHaveBeenCalledWith(data);
        expect(lookup.extractDataId).toHaveBeenCalledWith(data);
        expect(lookup.unknownKey).not.toHaveBeenCalled();
      },
    },
  ]);
});
