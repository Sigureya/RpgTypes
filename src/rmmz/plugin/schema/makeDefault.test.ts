import { test, expect, describe } from "vitest";
import type * as Types from "./core";
import type { DefaultValueType, StructAnnotation } from "./core";
import { makeDefaultStruct, makeDefaultValueJSONLike } from "./makeDefault";

interface Person {
  name: string;
  age: number;
}
interface Home {
  name: string;
  address: {
    street: string;
    city: string;
  };
  family: Person[];
}

const createMockPerson = (default_?: Person): StructAnnotation<Person> => ({
  type: "struct",
  struct: {
    structName: "Parson",
    params: {
      name: {
        type: "string",
        default: "John",
      },
      age: {
        type: "number",
        default: 30,
      },
    },
  },
  default: default_,
});

const createMockHome = (
  home: DefaultValueType<Home>
): StructAnnotation<Home> => ({
  type: "struct",
  struct: {
    structName: "Home",
    params: {
      name: {
        type: "string",
        default: home.name,
      },
      address: {
        type: "struct",
        struct: {
          structName: "Address",
          params: {
            street: {
              type: "string",
              default: "sss",
            },
            city: {
              type: "string",
              default: "ccc",
            },
          },
        },
        default: home.address,
      },
      family: {
        type: "struct_def[]",
        struct: createMockPerson().struct,
        default: home.family,
      },
    },
  },
});
const mockDictionary: Types.Dictionary = {
  cat: "CAT",
  John: "JOHN",
};

describe("makeDefaultStruct from partial", () => {
  const exceeded: Person = {
    name: "John",
    age: 30,
  };
  test("withParam", () => {
    const ant: Types.StructAnnotation_WithParams<Person> = {
      type: "struct",
      struct: {
        params: {
          name: {
            type: "string",
            default: "John",
          },
          age: {
            type: "number",
            default: 30,
          },
        },
      },
    };
    expect(ant.struct.structName).toBeUndefined();
    expect(ant.default).toBeUndefined();
    const json: string = makeDefaultValueJSONLike(ant);
    expect(JSON.parse(json)).toEqual(exceeded);
  });
  test("withDefault", () => {
    const ant: Types.StructAnnotation_WithDefault<Person> = {
      type: "struct",
      default: {
        name: "John",
        age: 30,
      },
    };
    expect(ant.struct).toBeUndefined();
    const json: string = makeDefaultValueJSONLike(ant);
    expect(JSON.parse(json)).toEqual(exceeded);
  });
});

describe("makeDefaultStruct", () => {
  test("parson", () => {
    const mockParson = createMockPerson();
    const parson: Person = makeDefaultStruct(mockParson);
    expect(mockParson.default).toBeUndefined();
    const expected: Person = { name: "John", age: 30 };
    expect(parson).toEqual(expected);
    const json = makeDefaultValueJSONLike(mockParson);
    expect(json).toBe('{"name":"John","age":30}');
  });
  test("parson manualy defaultValue", () => {
    const mock = createMockPerson({
      name: "aaa",
      age: 17,
    });
    const parson: Person = makeDefaultStruct(mock);
    const expected: Person = { name: "aaa", age: 17 };
    expect(mock.default).toEqual(expected);
    expect(parson).toEqual(expected);
  });

  describe("defaultStructValue Home", () => {
    const mockHome = createMockHome({
      name: "Home",
      family: [],
    });

    test("addres is undefined", () => {
      expect(mockHome.struct.params.address.default).toBeUndefined();
    });
    test("family is empty", () => {
      expect(mockHome.struct.params.family.struct.structName).toBe("Parson");
      expect(mockHome.struct.params.family.default).toEqual([]);
    });
    test("defaultStruct Home", () => {
      const home = makeDefaultStruct(mockHome);
      const expected: Home = {
        name: "Home",
        address: { street: "sss", city: "ccc" },
        family: [],
      };
      expect(home).toEqual(expected);
    });
  });
});
const runDefaultValueTests = <Text extends string>(
  caseName: string,
  ant: Types.AnnotationPrimitiveTypes,
  exceededText: Text,
  dictionary: Record<Text, string>
) => {
  test(caseName, () => {
    expect(makeDefaultValueJSONLike(ant)).toBe(exceededText);
  });
  test(`${caseName} with custom dictionary`, () => {
    expect(makeDefaultValueJSONLike(ant, dictionary)).toBe(exceededText);
  });
  test(`${caseName} with dictionary`, () => {
    expect(makeDefaultValueJSONLike(ant, mockDictionary)).toBe(exceededText);
  });
};
describe("makeDefaultValue Primitive types ", () => {
  describe("boolean", () => {
    const mockBoolean: Types.BooleanArg = {
      default: true,
      type: "boolean",
    };
    runDefaultValueTests("boolean", mockBoolean, "true", { true: "false" });
  });
  describe("boolean labeled", () => {
    const mockBoolean: Types.BooleanArg = {
      default: false,
      type: "boolean",
      on: "on",
      off: "off",
    };
    runDefaultValueTests("boolean2", mockBoolean, "false", { false: "true" });
  });
  describe("number", () => {
    const mockNumber: Types.NumberArg = {
      default: 123,
      type: "number",
    };
    runDefaultValueTests("number", mockNumber, "123", { "123": "999" });
  });
  describe("numberArray", () => {
    const mockNumberArray: Types.Primitive_NumbersArray = {
      default: [1, 2, 3],
      type: "number[]",
    };
    runDefaultValueTests("numberArray", mockNumberArray, `["1","2","3"]`, {
      '["1","2","3"]': "[9,8,7]",
    });
  });
  describe("string", () => {
    const mockString: Types.Primitive_Strings = {
      default: "cat",
      type: "string",
    };
    test("no dictionary", () => {
      const result: string = makeDefaultValueJSONLike(mockString);
      expect(result).toBe("cat");
    });
    test("with dictionary", () => {
      const result: string = makeDefaultValueJSONLike(
        mockString,
        mockDictionary
      );
      expect(result).toBe("CAT");
    });
  });
  describe("stringArray", () => {
    const mockStringArray: Types.Primitive_StringsArray = {
      default: ["a", "b", "cat"],
      type: "string[]",
    };
    test("no dictionary", () => {
      const json = makeDefaultValueJSONLike(mockStringArray);
      expect(json).toBe('["a","b","cat"]');
    });
    test("with dictionary", () => {
      const json = makeDefaultValueJSONLike(mockStringArray, mockDictionary);
      expect(json).toBe('["a","b","CAT"]');
    });
  });
});

describe("makeDefaultValue with Dictionary", () => {
  const dic: Types.Dictionary = {
    on: "enabled",
    off: "disabled",
  };
  describe("string", () => {
    test("string", () => {
      const mockString: Types.Primitive_Strings = {
        default: "test",
        type: "string",
      };
      const result: string = makeDefaultValueJSONLike(mockString, dic);
      expect(result).toBe("test");
    });
  });
});
