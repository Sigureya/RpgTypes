import { describe, test, expect } from "vitest";
import { isValid, joinSourceKey } from "./make";
import type { SourceIdentifier } from "./types";

describe("isValid", () => {
  test("", () => {
    expect(
      isValid({ author: "bob", module: "mock", sourceKey: "sounds" })
    ).toBe(true);
  });

  test("", () => {
    expect(
      isValid({ author: "Bob", module: "Mock", sourceKey: "Sounds" })
    ).toBe(true);
  });

  test("", () => {
    expect(isValid({ author: "", module: "", sourceKey: "" })).toBe(false);
  });
});

describe("joinSourceKey", () => {
  test("", () => {
    const src: SourceIdentifier = {
      author: "bob",
      module: "mock",
      sourceKey: "sounds",
    };
    const key = joinSourceKey(src);
    expect(key).toContain(src.author);
    expect(key).toContain(src.module);
    expect(key).toContain(src.sourceKey);
  });
});
