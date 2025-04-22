import { test, describe, expect } from "vitest";
import type {
  CollapsOptionLabels,
  ExtraParamLabels,
  RegularParamLabels,
  PartyAbilityOptionLabels,
} from "./types";
import type { DomainLabel } from "@RpgTypes/templates";

import {
  buildCollapsSource,
  buildExtraParamSource,
  buildPartyAbilitySource,
  buildRegularParamSource,
  buildSpecialParamSource,
} from "./buildSource";

import {
  LABELS_COLLAPS,
  LABELS_PARAM_REGULAR,
  LABELS_PARAM_SPECIAL,
  LABELS_PARTY_ABILITY,
  LABELS_EXTRA_PARAM,
} from "./default";

import type { NamedItemSource } from "@RpgTypes/schema";
import { MODULE_TRAIT } from "@RpgTypes/namedItemSource";

// Renamed test helper function for clarity
const validateNamedItemSourceStructure = (source: NamedItemSource) => {
  source.items.forEach((item) => {
    describe(`Validate item structure: ${item.name}`, () => {
      const keys: string[] = Object.keys(item);
      test("Item should have exactly 2 keys", () =>
        expect(keys.length).toBe(2));
      test("Item name should be a string", () =>
        expect(item.name).toBeTypeOf("string"));
      test("Item id should be a number", () =>
        expect(item.id).toBeTypeOf("number"));
    });
  });
};

// Renamed test helper function for clarity
const validateLabelsMapping = <T extends {}>(
  source: NamedItemSource,
  labels: DomainLabel<T>
) => {
  const values = Object.values<string>(labels.options);
  test("", () =>
    expect(new Set(source.items.map<string>((item) => item.name))).toEqual(
      new Set(values)
    ));
};

describe("Test buildCollapsSource function", () => {
  const labels: DomainLabel<CollapsOptionLabels> = LABELS_COLLAPS;

  const result = buildCollapsSource(labels, {
    normal: "normal",
  });
  validateNamedItemSourceStructure(result);
  test("Source module should be MODULE_TRAIT", () =>
    expect(result.source.module).toBe(MODULE_TRAIT));
});

describe("Test buildRegularParamSource function", () => {
  const labels: DomainLabel<RegularParamLabels> = LABELS_PARAM_REGULAR;
  const result = buildRegularParamSource(labels);
  validateNamedItemSourceStructure(result);
  validateLabelsMapping(result, labels);
  test("Source module should be MODULE_TRAIT", () =>
    expect(result.source.module).toBe(MODULE_TRAIT));
});

describe("Test buildExtraParamSource function", () => {
  const label: DomainLabel<ExtraParamLabels> = LABELS_EXTRA_PARAM;
  const result = buildExtraParamSource(label);
  validateNamedItemSourceStructure(result);
  validateLabelsMapping(result, label);
});

describe("Test buildSpecialParamSource function", () => {
  const label = LABELS_PARAM_SPECIAL;
  const result = buildSpecialParamSource(label);
  validateNamedItemSourceStructure(result);
  validateLabelsMapping(result, label);
});

describe("Test buildPartyAbilitySource function", () => {
  const label: DomainLabel<PartyAbilityOptionLabels> = LABELS_PARTY_ABILITY;
  const result = buildPartyAbilitySource(label);
  validateNamedItemSourceStructure(result);
  validateLabelsMapping(result, label);
});

// describe("Test buildSpecialFlagSource function", () => {
//   const label: DomainLabel<SpecialFlagOptions> = MockSpecialFlagLabels;
//   const result = builds(label);
//   validateNamedItemSourceStructure(result);
//   validateLabelsMapping(result, label);
// });
