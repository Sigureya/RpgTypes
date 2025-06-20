import { test, expect, describe } from "vitest";
import type {
  NumberArg,
  StructAnnotation,
  StructAnnotation_WithType,
} from "./core";
import { maxDepth, flatStructs } from "./traverseStruct";

interface Person {
  name: string;
  age: number;
}

const mockParson: StructAnnotation_WithType<Person> = {
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
  default: {
    name: "John",
    age: 30,
  },
} as const;

interface Home {
  name: string;
  address: string;
  family: Person[];
}
const mockHome: StructAnnotation_WithType<Home> = {
  type: "struct",
  struct: {
    structName: "Home",
    params: {
      name: {
        type: "string",
        default: "Home",
      },
      address: {
        type: "string",
        default: "123",
      },
      family: {
        type: "struct_def[]",
        struct: mockParson.struct,
        default: [],
      },
    },
  },
};
interface City {
  name: string;
  home1: Home;
  home2: Home;
}
const mockCity: StructAnnotation<City> = {
  type: "struct",
  struct: {
    structName: "City",
    params: {
      name: {
        type: "string",
        default: "City",
      },
      home1: {
        type: "struct",
        struct: mockHome.struct,
        default: mockHome.default,
      },
      home2: {
        type: "struct",
        struct: mockHome.struct,
        default: mockHome.default,
      },
    },
  },
};

const mockNumber: NumberArg = {
  default: 123,
  type: "number",
};
describe("maxDepth", () => {
  test("number", () => {
    const result: number = maxDepth(mockNumber);
    expect(result).toBe(0);
  });
  test("struct-parson", () => {
    const result: number = maxDepth(mockParson);
    expect(result).toBe(1);
  });
  test("struct-home", () => {
    const result: number = maxDepth(mockHome);
    expect(result).toBe(2);
  });
  test("struct-city", () => {
    const result: number = maxDepth(mockCity);
    expect(result).toBe(3);
  });
});

describe("flatStruct", () => {
  test("number", () => {
    const result = flatStructs(mockNumber);
    expect(result.size).toBe(0);
  });
  test("struct-parson", () => {
    const result = flatStructs(mockParson);
    expect(result.size).toBe(1);
    expect(result).toContain(mockParson.struct);
  });
  test("struct-home", () => {
    const result = flatStructs(mockHome);
    expect(result).toContain(mockParson.struct);
    expect(result).toContain(mockHome.struct);
    expect(result.size).toBe(2);
  });
  test("struct-city", () => {
    const result = flatStructs(mockCity);
    expect(result.size).toBe(3);
    expect(result).toContain(mockParson.struct);
    expect(result).toContain(mockHome.struct);
    expect(result).toContain(mockCity.struct);
  });
});
