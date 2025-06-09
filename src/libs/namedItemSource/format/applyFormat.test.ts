import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import { compileFormatBundle, formatWithCompiledBundle, isValidFormatBundle } from "./applyFormat";
import type { CompiledFormatBundle } from "./bundle";
import type {
  FormatErrorLabels,
  FormatLabelResolved,
  FormatResult,
  FormatRule,
  NamedItemSource,
} from "./core";
import { resolveUnknownLabel } from "./core";
import type { FormatLookupKeys } from "./core/accessor";

interface ItemEffects {
  code: number;
  dataId: number;
  value1: number;
  value2: number;
}
interface DataDefinetion {
  code: number;
  table: Record<string, number>;
}

const ELEMENT = {
  code: 1,
  table: {
    fire: 1,
    ice: 2,
    thunder: 3,
  },
} as const satisfies DataDefinetion;

const STATE = {
  code: 2,
  table: {
    poison: 4,
    burn: 5,
    freeze: 6,
  },
} as const satisfies DataDefinetion;

const RECOVER = {
  code: 3,
  table: {},
} as const satisfies DataDefinetion;

const mockElements: NamedItemSource = {
  source: { author: "rmmz", module: "system", kind: "elements" },
  label: "elements",
  items: [
    { id: ELEMENT.table.fire, name: "fire" },
    { id: ELEMENT.table.ice, name: "ice" },
    { id: ELEMENT.table.thunder, name: "thunder" },
  ],
};

const mockState: NamedItemSource = {
  source: { author: "rmmz", module: "data", kind: "state" },
  label: "state",
  items: [
    { id: STATE.table.poison, name: "poison" },
    { id: STATE.table.burn, name: "burn" },
    { id: STATE.table.freeze, name: "freeze" },
  ],
};

const mockErrorLabeles = {
  extraPlaceHolder: "Extra placeholder error",
  longPlaceHolder: "Placeholder is too long",
  missingName: "Missing name error",
  missingSourceId: "Missing source ID error",
  formatVeryLong: "Format is too long",
} as const satisfies FormatErrorLabels;

const mockElementsLable = {
  label: "element damage",
  pattern: "{name} rate {value1}% + {value2}",
  kindId: ELEMENT.code,
  dataSource: { ...mockElements.source },
} as const satisfies FormatLabelResolved<number>;

const mockStateLable = {
  label: "state",
  pattern: "{name} {value1}%",
  kindId: STATE.code,
  dataSource: { ...mockState.source },
} as const satisfies FormatLabelResolved<number>;

const mockRecoveryLable = {
  label: "recovery",
  pattern: "{value1}% + {value2}point",
  kindId: RECOVER.code,
} as const satisfies FormatLabelResolved<number>;

const mockRule: FormatRule<ItemEffects> = {
  placeHolder: {
    numbers: ["value1", "value2"],
  },
  fallbackFormat: { text: "fallback format" },
  itemMapper: {
    dataIdKey: "dataId",
    kindKey: "code",
    placeHolder: "name",
  },
};

interface TestCase {
  caseName: string;
  data: ItemEffects;
  expected: FormatResult;
  fn: (arg: {
    data: ItemEffects;
    lookup: MockedObject<FormatLookupKeys<ItemEffects, number>>;
  }) => void;
}

const testFormatWithCompiledBundle = (
  bundle: CompiledFormatBundle<ItemEffects, number>,
  { caseName, data, expected, fn }: TestCase
) => {
  const mockedLookup = {
    extractMapKey: vi.fn((d: ItemEffects) => d.code),
    extractDataId: vi.fn((d: ItemEffects) => d.dataId),
    unknownKey: vi.fn((code) => code.toString()),
  } satisfies MockedObject<FormatLookupKeys<ItemEffects, number>>;

  const result: FormatResult = formatWithCompiledBundle(data, bundle, mockedLookup);
  describe(caseName, () => {
    test("should return expected result", () => {
      expect(result).toEqual(expected);
    });
    test("should call extractDataId", () => {
      expect(mockedLookup.extractMapKey).toHaveBeenCalledWith(data);
    });
    test("should call lookup methods", () => {
      fn({ data, lookup: mockedLookup });
    });
  });
};

const runTestCases = (
  caseName: string,
  bundle: CompiledFormatBundle<ItemEffects, number>,
  testCases: TestCase[]
) => {
  describe(caseName, () => {
    testCases.forEach((testCase) => {
      testFormatWithCompiledBundle(bundle, testCase);
    });
  });
};

describe("formatWithCompiledBundle integration", () => {
  const bundle = compileFormatBundle<ItemEffects, number>(
    mockRule,
    [mockStateLable, mockElementsLable, mockRecoveryLable],
    [mockState, mockElements],
    mockErrorLabeles
  );
  describe("isValidFormatBundle", () => {
    test("should return true for valid bundle", () => {
      expect(bundle.errors).toEqual([]);
    });
    test("bundle should be valid", () => {
      expect(bundle).toSatisfy(isValidFormatBundle);
    });
  });
  runTestCases("formatting patterns", bundle, [
    {
      caseName: "elements format",
      data: { code: ELEMENT.code, dataId: ELEMENT.table.fire, value1: 10, value2: 20 },
      expected: { label: mockElementsLable.label, text: "fire rate 10% + 20" },
      fn: ({ data, lookup }) => {
        expect(lookup.extractDataId).toHaveBeenCalledWith(data);
        expect(lookup.unknownKey).not.toHaveBeenCalled();
      },
    },
    {
      caseName: "state format poison",
      data: { code: STATE.code, dataId: STATE.table.poison, value1: 30, value2: 0 },
      expected: { label: mockStateLable.label, text: "poison 30%" },
      fn: ({ data, lookup }) => {
        expect(lookup.extractDataId).toHaveBeenCalledWith(data);
        expect(lookup.unknownKey).not.toHaveBeenCalled();
      },
    },
    {
      caseName: "state format burn",
      data: { code: STATE.code, dataId: STATE.table.burn, value1: 40, value2: 123 },
      expected: { label: mockStateLable.label, text: "burn 40%" },
      fn: ({ data, lookup }) => {
        expect(lookup.extractDataId).toHaveBeenCalledWith(data);
        expect(lookup.unknownKey).not.toHaveBeenCalled();
      },
    },
    {
      caseName: "recovery format",
      data: { code: RECOVER.code, dataId: 0, value1: 50, value2: 10 },
      expected: { label: mockRecoveryLable.label, text: "50% + 10point" },
      fn: ({ lookup }) => {
        expect(lookup.extractDataId).not.toHaveBeenCalled();
        expect(lookup.unknownKey).not.toHaveBeenCalled();
      },
    },
    {
      caseName: "unknown key",
      data: { code: 999, dataId: 0, value1: 50, value2: 10 },
      expected: {
        label: resolveUnknownLabel(bundle.compiledRule, "999"),
        text: bundle.compiledRule.fallbackFormat.text,
      },
      fn: ({ lookup, data }) => {
        expect(lookup.extractMapKey).toHaveBeenCalledWith(data);
        expect(lookup.unknownKey).toHaveBeenCalledWith(data.code);
      },
    },
  ]);
});
