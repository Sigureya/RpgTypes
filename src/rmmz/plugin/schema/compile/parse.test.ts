import { describe, test, expect } from "vitest";
import type {
  KindOfBoolean,
  KindOfNumber,
  KindOfNumberArray,
  KindOfString,
  KindOfRpgDataId,
  KindOfRpgDataIdArray,
  KindOfSelect,
  StructParamPrimitive,
  KindOfCombo,
  KindOfStructRef,
} from "./kinds";
import type { PluginParam } from "./parse";
import { parsePluginParam } from "./parse";

const mock = {
  boolean: `@param bool
    @type boolean
    @text autoBattle
    @default false
    @on enabled
    @off disabled` as const,
  number: `@param num
    @min 0
    @max 1000
    @digit 3
    @type number
    @default 123` as const,
  "number[]": `@param numArray
    @type number[]
    @default [1, 2, 3]
    @min 0  
    @max 1000` as const,
  string: `* @param str
   * @type string
   * @desc This is a string parameter
   * @default Hello
 ` as const,
  weapon: `
  @param weapon
    @type weapon
    @default 0
    @desc This is a weapon parameter` as const,
  "skill[]": `@param skills
    @type skill[]
    @default []
    @desc This is a skills parameter` as const,
  select: `   @param selectOfMode
    @text Select Mode
    @desc Select the mode you want to use
    @type select
    @default modeA
    @option modeA
    @value A
    @option modeB
    @value B`,
  combo: `@param comboParam
    @type combo
  @default option1
  @option option1
    @option option2` as const,
  struct: `@param structPerson
    @type struct<Person>` as const,
} as const satisfies Partial<Record<StructParamPrimitive["kind"], string>>;

describe("compile syntax", () => {
  test("boolean", () => {
    const expected: PluginParam = {
      param: "bool",
      data: {
        kind: "boolean",
        default: false,
        desc: "autoBattle",
        on: "enabled",
        off: "disabled",
      } satisfies KindOfBoolean,
    };
    expect(parsePluginParam(mock.boolean)).toEqual(expected);
  });
  test("number", () => {
    const expected: PluginParam = {
      param: "num",
      data: {
        kind: "number",
        default: 123,
        min: 0,
        max: 1000,
      } satisfies KindOfNumber,
    };
    expect(parsePluginParam(mock.number)).toEqual(expected);
  });
  test("number array", () => {
    const expected: PluginParam = {
      param: "numArray",
      data: {
        kind: "number[]",
        default: [1, 2, 3],
      } satisfies KindOfNumberArray,
    };
    expect(parsePluginParam(mock["number[]"])).toEqual(expected);
  });
  test("string", () => {
    const expected: PluginParam = {
      param: "str",
      data: {
        kind: "string",
        default: "Hello",
        desc: "This is a string parameter",
      } satisfies KindOfString,
    };
    expect(parsePluginParam(mock.string)).toEqual(expected);
  });
  test("rpg data id", () => {
    const expected: PluginParam = {
      param: "weapon",
      data: {
        kind: "weapon",
        default: 0,
        desc: "This is a weapon parameter",
      } satisfies KindOfRpgDataId,
    };
    expect(parsePluginParam(mock.weapon)).toEqual(expected);
  });
  test("rpg data id array", () => {
    const expected: PluginParam = {
      param: "skills",
      data: {
        kind: "skill[]",
        default: [],
        desc: "This is a skills parameter",
      } satisfies KindOfRpgDataIdArray,
    };
    expect(parsePluginParam(mock["skill[]"])).toEqual(expected);
  });
  test("select", () => {
    const expected: PluginParam = {
      param: "selectOfMode",
      data: {
        kind: "select",
        default: "A",
        desc: "Select the mode you want to use",
        options: [
          { value: "A", option: "modeA" },
          { value: "B", option: "modeB" },
        ],
      } satisfies KindOfSelect,
    };
    expect(parsePluginParam(mock.select)).toEqual(expected);
  });
  test("combo", () => {
    const expected: PluginParam = {
      param: "comboParam",
      data: {
        kind: "combo",
        default: "option1",
        options: ["option1", "option2"],
      } satisfies KindOfCombo,
    };
    expect(parsePluginParam(mock.combo)).toEqual(expected);
  });
  test("struct", () => {
    const expected: PluginParam = {
      param: "structPerson",
      data: {
        kind: "struct",
        struct: "Person",
      } satisfies KindOfStructRef,
    };
    expect(parsePluginParam(mock.struct)).toEqual(expected);
  });
});
