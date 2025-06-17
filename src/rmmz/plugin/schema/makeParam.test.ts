import { test, expect, describe } from "vitest";
import type {
  BooleanArg,
  FilePathAnnotation,
  NumberArg,
  NumberSelect,
  ParamTexts,
  StringSelect,
  StringArg,
  ToArrayAnnotation,
} from "./core";
import * as Make from "./makeAnnotation";
import { makeParam, uniqueAnnotations, joinAnntations } from "./makeParam";

describe("joinAnntations", () => {
  test("", () => {
    const paramTexts: ParamTexts = {
      name: "@param name",
      type: "@type string",
      default: "@default abc",
      base: [],
      other: [],
    };
    const result: string[] = joinAnntations(paramTexts);
    expect(result).toEqual(["", "@param name", "@type string", "@default abc"]);
  });
});

describe("makeParam", () => {
  describe("boolean", () => {
    test("generates a valid ParamTexts object for a boolean argument", () => {
      const ant: BooleanArg = {
        type: "boolean",
        default: true,
        on: "on01",
        off: "off02",
      };
      const result: ParamTexts = makeParam("bool", ant);
      expect(result.name).toBe("@param bool");
      expect(result.type).toBe("@type boolean");
      expect(result.default).toBe("@default true");
      expect(result.other).toEqual(["@on on01", "@off off02"]);
    });
  });
  describe("number", () => {
    test("generates a valid ParamTexts object for a number argument", () => {
      const ant: NumberArg = {
        type: "number",
        default: 5,
        min: 1,
        max: 10,
        digit: 2,
      };
      const result: ParamTexts = makeParam("num", ant);
      expect(result.name).toBe("@param num");
      expect(result.type).toBe("@type number");
      expect(result.default).toBe("@default 5");
      expect(result.other).toEqual(["@min 1", "@max 10", "@digit 2"]);
    });
  });
  describe("number array", () => {
    test("generates a valid ParamTexts object for a number array argument", () => {
      const ant: ToArrayAnnotation<NumberArg> = {
        type: "number[]",
        default: [1, 2, 3],
      };
      const result: ParamTexts = makeParam("numArray", ant);
      expect(result.name).toBe("@param numArray");
      expect(result.type).toBe("@type number[]");
      expect(result.default).toBe(`@default ["1","2","3"]`);
    });
  });
  describe("string", () => {
    test("generates a valid ParamTexts object for a string argument", () => {
      const ant: StringArg = {
        type: "string",
        default: "abc",
      };
      const result: ParamTexts = makeParam("str", ant);
      expect(result.name).toBe("@param str");
      expect(result.type).toBe("@type string");
      expect(result.default).toBe("@default abc");
    });
  });
});

describe("uniqueAnnotations", () => {
  describe("boolean", () => {
    const ant: BooleanArg = {
      type: "boolean",
      default: true,
      on: "on01",
      off: "off02",
    };
    const result = uniqueAnnotations(ant);

    test("generates correct boolean annotations", () => {
      expect(result).toEqual(["@on on01", "@off off02"]);
    });

    test("matches Make.booleanArgAnnotations output", () => {
      expect(result).toEqual(Make.booleanAnnotations(ant));
    });
    test("correctly generates annotations for an undefined boolean argument", () => {
      const ant: BooleanArg = {
        type: "boolean",
        default: true,
        on: undefined,
        off: undefined,
      };
      const result = uniqueAnnotations(ant);
      expect(result).toEqual([]);
      expect(result).toEqual(Make.booleanAnnotations(ant));
    });
  });

  describe("number", () => {
    const ant: NumberArg = {
      type: "number",
      default: 5,
      min: 1,
      max: 10,
      digit: 2,
    };
    const result = uniqueAnnotations(ant);

    test("generates correct number annotations", () => {
      expect(result).toEqual(["@min 1", "@max 10", "@digit 2"]);
    });

    test("matches Make.numberArgAnnotations output", () => {
      expect(result).toEqual(Make.numberAnnotations(ant));
    });
  });
  describe("number undefined", () => {
    const ant: NumberArg = {
      type: "number",
      default: 5,
      min: undefined,
      max: undefined,
      digit: undefined,
    };
    const result = uniqueAnnotations(ant);
    test("generates correct number annotations", () => {
      expect(result).toEqual([]);
    });
    test("matches Make.numberArgAnnotations output", () => {
      expect(result).toEqual(Make.numberAnnotations(ant));
    });
  });

  describe("string", () => {
    const ant: StringArg = {
      type: "string",
      default: "ggg",
    };
    const result = uniqueAnnotations(ant);

    test("generates an empty annotation array for string", () => {
      expect(result).toEqual([]);
    });

    test("matches Make.baseAnnotion output", () => {
      expect(result).toEqual(Make.baseAnnotions(ant));
    });
  });

  describe("file", () => {
    const ant: FilePathAnnotation = {
      type: "file",
      default: "ggg",
      dir: "img",
    };
    const result = uniqueAnnotations(ant);

    test("generates correct file annotations", () => {
      expect(result).toEqual(["@dir img"]);
    });

    test("matches Make.fileAnnotations output", () => {
      expect(result).toEqual(Make.fileAnnotations(ant));
    });
  });

  describe("select", () => {
    const ant = {
      type: "select",
      default: 345,
      options: [
        { option: "a", value: 1 },
        { option: "b", value: 2 },
      ],
    } as const satisfies NumberSelect;
    const result = uniqueAnnotations(ant);

    test("generates correct select annotations", () => {
      expect(result).toEqual([
        "@option a",
        "@value 1",
        "@option b",
        "@value 2",
      ]);
    });

    test("matches Make.selectAnnotations output", () => {
      expect(result).toEqual(Make.selectAnnotations(ant));
    });
  });
  describe("select empty", () => {
    const ant = {
      type: "select",
      default: 345,
      options: [],
    } as const satisfies NumberSelect;
    const result = uniqueAnnotations(ant);

    test("generates correct select annotations", () => {
      expect(result).toEqual([]);
    });

    test("matches Make.selectAnnotations output", () => {
      expect(result).toEqual(Make.selectAnnotations(ant));
    });
  });
});
