import { describe, test, expect } from "vitest";
import { isValid, joinSourceKey } from "./make";
import type { SourceIdentifier } from "./types";

describe("isValid", () => {
  test("", () => {
    expect(isValid({ author: "bob", module: "mock", kind: "sounds" })).toBe(
      true
    );
  });

  test("", () => {
    expect(isValid({ author: "Bob", module: "Mock", kind: "Sounds" })).toBe(
      true
    );
  });

  test("", () => {
    expect(isValid({ author: "", module: "", kind: "" })).toBe(false);
  });
});

describe("joinSourceKey", () => {
  test("", () => {
    const src: SourceIdentifier = {
      author: "bob",
      module: "mock",
      kind: "sounds",
    };
    const key = joinSourceKey(src);
    expect(key).toContain(src.author);
    expect(key).toContain(src.module);
    expect(key).toContain(src.kind);
  });
});
