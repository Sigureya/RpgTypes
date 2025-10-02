import { describe, expect, it } from "vitest";
import { parsePlugin } from "./parse";
import type { ParsedPlugin } from "./types";

describe("parsePlugin", () => {
  it("returns an empty meta object for empty input", () => {
    const result: ParsedPlugin = parsePlugin("");
    expect(result.meta).toEqual({});
  });

  it("writes each meta keyword to the corresponding meta field", () => {
    const text: string = [
      "/*:",
      "@author John Doe",
      "@plugindesc This is a test plugin",
      "@url dummy-url",
      "*/",
    ].join("\n");
    const result = parsePlugin(text);
    expect(result.meta.author).toBe("John Doe");
    expect(result.meta.plugindesc).toBe("This is a test plugin");
    expect(result.meta.url).toBe("dummy-url");
  });

  it("prioritizes the first value when the same meta keyword is specified multiple times", () => {
    const text: string = ["/*:", "@author alice", "@author bob", "*/"].join(
      "\n"
    );
    const result = parsePlugin(text);
    expect(result.meta.author).toBe("alice");
  });
});
