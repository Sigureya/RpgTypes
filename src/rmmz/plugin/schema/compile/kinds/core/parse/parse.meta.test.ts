import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";

describe("parsePlugin", () => {
  test("", () => {
    const result = parsePlugin("");
    expect(result.meta).toEqual({});
  });

  test("should parse plugin annotations correctly", () => {
    const text: string = [
      "@author John Doe",
      "@plugindesc This is a test plugin",
      "@url dummy-url",
    ].join("\n");
    const result = parsePlugin(text);
    expect(result.meta.author).toBe("John Doe");
    expect(result.meta.plugindesc).toBe("This is a test plugin");
    expect(result.meta.url).toBe("dummy-url");
  });
});
