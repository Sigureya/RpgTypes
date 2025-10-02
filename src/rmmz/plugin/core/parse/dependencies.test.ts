import { describe, test, expect } from "vitest";
import { addBasePlugin, addOrderBefore, addOrderAfter } from "./dependencies";
import type { PluginDependencies } from "./types/pluginDependencies";

describe("PluginDependencies helpers", () => {
  const baseDep: PluginDependencies = {
    base: ["A"],
    orderBefore: ["B"],
    orderAfter: ["C"],
  };

  test("addBasePlugin adds a base plugin", () => {
    const result = addBasePlugin(baseDep, "D");
    expect(result.base).toEqual(["A", "D"]);
    expect(result.orderBefore).toEqual(["B"]);
    expect(result.orderAfter).toEqual(["C"]);
  });

  test("addOrderBefore adds an orderBefore plugin", () => {
    const result = addOrderBefore(baseDep, "E");
    expect(result.base).toEqual(["A"]);
    expect(result.orderBefore).toEqual(["B", "E"]);
    expect(result.orderAfter).toEqual(["C"]);
  });

  test("addOrderAfter adds an orderAfter plugin", () => {
    const result = addOrderAfter(baseDep, "F");
    expect(result.base).toEqual(["A"]);
    expect(result.orderBefore).toEqual(["B"]);
    expect(result.orderAfter).toEqual(["C", "F"]);
  });

  test("addBasePlugin does not mutate original object", () => {
    const depCopy = { ...baseDep, base: [...baseDep.base] };
    addBasePlugin(depCopy, "G");
    expect(depCopy.base).toEqual(["A"]);
  });

  test("addOrderBefore does not mutate original object", () => {
    const depCopy = { ...baseDep, orderBefore: [...baseDep.orderBefore] };
    addOrderBefore(depCopy, "H");
    expect(depCopy.orderBefore).toEqual(["B"]);
  });

  test("addOrderAfter does not mutate original object", () => {
    const depCopy = { ...baseDep, orderAfter: [...baseDep.orderAfter] };
    addOrderAfter(depCopy, "I");
    expect(depCopy.orderAfter).toEqual(["C"]);
  });

  test("works with empty arrays", () => {
    const emptyDep: PluginDependencies = {
      base: [],
      orderBefore: [],
      orderAfter: [],
    };
    expect(addBasePlugin(emptyDep, "J").base).toEqual(["J"]);
    expect(addOrderBefore(emptyDep, "K").orderBefore).toEqual(["K"]);
    expect(addOrderAfter(emptyDep, "L").orderAfter).toEqual(["L"]);
  });
});
