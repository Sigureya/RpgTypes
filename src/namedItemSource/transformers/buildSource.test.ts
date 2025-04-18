import type { CollapsOptionLabels, Options } from "@RpgTypes/schema";
import { type NamedItemSource } from "@RpgTypes/schema";
import { test, describe, expect } from "vitest";
import { buildCollapsSource } from "./buildSource";
import type { DomainLabel } from "@RpgTypes/schema";

const testItems = (soucre: NamedItemSource) => {
  soucre.items.forEach((item) => {
    describe(`itemValid:${item.name}`, () => {
      const keys: string[] = Object.keys(item);
      test("", () => expect(keys.length).toBe(2));
      test("name", () => expect(item.name).toBeTypeOf("string"));
      test("id", () => expect(item.id).toBeTypeOf("number"));
    });
  });
};

describe("", () => {
  const labels: DomainLabel<CollapsOptionLabels> = {
    domainName: "collaps",
    options: {
      bossCollaps: "bossCollaps",
      instantCollaps: "instantCollaps",
      noneCollaps: "instantCollaps",
    },
  };

  const result = buildCollapsSource(labels, {
    normal: "normal",
  });
  testItems(result);
});
