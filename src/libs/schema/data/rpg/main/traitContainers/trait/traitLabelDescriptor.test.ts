import { describe, test, expect } from "vitest";
import { TraitLabelDescriptor } from "./traitLabelDescriptor";
import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";

const mockResolveName = (
  dataSource: Readonly<SourceIdentifier>,
  dataId: number
): string => {
  return `${dataSource.author}.${dataSource.module}.${dataSource.kind} ${dataId}`;
};
describe("TraitLabelClass", () => {
  test("should match trait code correctly", () => {
    const traitLabel = new TraitLabelDescriptor(1, "Test Label", "{value}");
    const trait = { code: 1, value: 10, dataId: 0 };
    expect(traitLabel.match(trait)).toBe(true);
  });

  test("should throw error on trait code mismatch", () => {
    const traitLabel = new TraitLabelDescriptor(1, "Test Label", "{value}");
    const trait = { code: 2, value: 10, dataId: 0 };
    expect(() => traitLabel.testTraitCode(trait)).toThrow();
  });

  test("should format text with value placeholder", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Value: {value}"
    );
    const trait = { code: 1, value: 10, dataId: 0 };
    const result = traitLabel.formatText(trait, mockResolveName);
    expect(result).toBe("Value: 10");
  });

  test("should format text with name and value placeholders", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Name: {name}, Value: {value}",
      { author: "author", module: "module", kind: "kind" }
    );
    const trait = { code: 1, value: 10, dataId: 42 };
    const result = traitLabel.formatText(trait, mockResolveName);
    expect(result).toBe("Name: author.module.kind 42, Value: 10");
  });

  test("should identify if format requires value", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Value: {value}"
    );
    expect(traitLabel.requiresValue()).toBe(true);
  });

  test("should identify if format requires name", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Name: {name}",
      {
        author: "author",
        module: "module",
        kind: "kind",
      }
    );
    expect(traitLabel.requiresName()).toBe(true);
  });

  test("should return invalid placeholders", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Invalid: {foo}"
    );
    expect(traitLabel.invalidPlaceHolder()).toEqual(["foo"]);
  });

  test("should validate format for data source", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Name: {name}",
      {
        author: "author",
        module: "module",
        kind: "kind",
      }
    );
    expect(traitLabel.isFormatValidForDataSource()).toBe(true);
  });

  test("should invalidate format if data source is missing name placeholder", () => {
    const traitLabel = new TraitLabelDescriptor(
      1,
      "Test Label",
      "Value: {value}",
      {
        author: "author",
        module: "module",
        kind: "kind",
      }
    );
    expect(traitLabel.isFormatValidForDataSource()).toBe(false);
  });
});
