import { test, expect, describe } from "vitest";
import type { ParamFilter } from "./paramFilter";
import { createParamFilter } from "./paramFilter";

describe("createParamFilter", () => {
  const eeFilter: ParamFilter<"boolean" | "number"> = {
    kinds: ["boolean", "number"],
    single: new Set(["boolean", "number"]),
    array: new Set(["boolean[]", "number[]"]),
  };
  test("creates a filter correctly", () => {
    const xxFilter: ParamFilter<"boolean" | "number"> = createParamFilter([
      "boolean",
      "number",
    ]);
    expect(xxFilter).toEqual(eeFilter);
  });
});
