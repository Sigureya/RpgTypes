import { describe, test, expect } from "vitest";

import type { CompiledFormatBundle } from "./bundle";
import type {
  Data_NamedItem,
  FormatCompiled,
  FormatErrorLabels,
  FormatLabelResolved,
  FormatResult,
  FormatRule,
  FormatRuleCompiled,
  NamedItemSource,
  SourceIdentifier,
  SourceKeyConcept,
} from "./core";
import { compileFormatBundle } from "./applyFormat";

interface ItemEffects {
  code: number;
  dataId: number;
  value1: number;
  value2: number;
}

const mockElements: NamedItemSource = {
  source: { author: "rmmz", module: "system", kind: "elements" },
  label: "elements",
  items: [
    { id: 1, name: "fire" },
    { id: 2, name: "ice" },
    { id: 3, name: "thunder" },
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

const bundle = compileFormatBundle(
  mockRule,
  [
    {
      label: "elements",
      pattern: "{name} ee",
      targetKey: 0,
      dataSource: mockElements.source,
    },
  ],
  [mockState, mockElements],
  mockErrorLabeles
);

test("", () => {
  expect(bundle.errors).toEqual([]);
});
