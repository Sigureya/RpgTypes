import { describe, test, expect } from "vitest";
import type { ParseState } from "./internalTypes";
import {
  handleBase,
  handleOption,
  handleOrderAfter,
  handleOrderBefore,
  handleValue,
} from "./state";

// 初期状態生成ヘルパー
const createInitialState = (): ParseState => ({
  meta: {},
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
});

// handleBaseのテスト
describe("handleBase", () => {
  test("should add base plugin to dependencies", () => {
    const state = createInitialState();
    const next = handleBase(state, "BasePlugin");
    expect(next.dependencies.base).toContain("BasePlugin");
    expect(next.dependencies.orderBefore).toEqual([]);
    expect(next.dependencies.orderAfter).toEqual([]);
  });
});

// handleOrderAfterのテスト
describe("handleOrderAfter", () => {
  test("should add orderAfter plugin to dependencies", () => {
    const state = createInitialState();
    const next: ParseState = handleOrderAfter(state, "AfterPlugin");
    expect(next.dependencies.orderAfter).toContain("AfterPlugin");
    expect(next.dependencies.base).toEqual([]);
    expect(next.dependencies.orderBefore).toEqual([]);
  });
});

// handleOrderBeforeのテスト
describe("handleOrderBefore", () => {
  test("should add orderBefore plugin to dependencies", () => {
    const state = createInitialState();
    const next: ParseState = handleOrderBefore(state, "BeforePlugin");
    expect(next.dependencies.orderBefore).toContain("BeforePlugin");
    expect(next.dependencies.base).toEqual([]);
    expect(next.dependencies.orderAfter).toEqual([]);
  });
});

// handleOptionのテスト
describe("handleOption", () => {
  test("should add option when currentParam is set", () => {
    const state: ParseState = {
      ...createInitialState(),
      currentParam: { name: "param", attr: {} },
      currentOption: { items: [] },
    };
    const expected: ParseState = {
      ...createInitialState(),
      currentParam: { name: "param", attr: {} },
      currentOption: { items: [], currentOption: "option1" },
    };
    const next: ParseState = handleOption(state, "option1");
    expect(next).not.toBe(state);
    expect(next).toEqual(expected);
  });
  test("", () => {
    const state: ParseState = {
      ...createInitialState(),
      currentParam: { name: "param", attr: {} },
      currentOption: { items: [], currentOption: "option1" },
    };
    const expected: ParseState = {
      ...createInitialState(),
      currentParam: { name: "param", attr: {} },
      currentOption: {
        items: [{ option: "option1", value: "value1" }],
      },
    };
    const next = handleValue(state, "value1");
    expect(next).not.toBe(state);
    expect(next).toEqual(expected);
  });

  test("should not add option when currentParam is null", () => {
    const state: ParseState = {
      ...createInitialState(),
      currentParam: null,
      currentOption: { items: [] },
    };
    const next: ParseState = handleOption(state, "option1");
    expect(next.currentOption?.items.length).toBe(0);
  });
});

// handleValueのテスト
describe("handleValue", () => {
  test.skip("should add value when currentOption is set", () => {
    const state: ParseState = {
      ...createInitialState(),
      currentOption: { items: [{ option: "opt", value: "old" }] },
    };
    const next = handleValue(state, "newValue");
    expect(next.currentOption?.items.some((i) => i.value === "newValue")).toBe(
      true
    );
  });

  test("should not add value when currentOption is null", () => {
    const state: ParseState = {
      ...createInitialState(),
      currentOption: null,
    };
    const next = handleValue(state, "newValue");
    expect(next.currentOption).toBeNull();
  });
});
