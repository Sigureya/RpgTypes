import { test, expect, describe } from "vitest";
import { stringlfyArray, stringlfyObject } from "./stringlfyStruct";

interface Person {
  name: string;
  age: number;
  bool: boolean;
}

interface Family {
  person: Person;
}

interface HasList<T> {
  list: T[];
}

describe("stringlfyObject", () => {
  const person: Person = {
    name: "John",
    age: 30,
    bool: true,
  };

  test("stringify a struct with list", () => {
    const list: number[] = [113, 8, 5, 5, 6];
    const json = stringlfyArray(list);
    const result = JSON.parse(json);
    expect(result).toEqual(["113", "8", "5", "5", "6"]);
  });

  test("stringify a struct with list", () => {
    const hasList: HasList<number> = {
      list: [185, 251, 257, 261],
    };
    const json = stringlfyObject(hasList);
    const result = JSON.parse(json);
    expect(result.list).toBeTypeOf("string");
    expect(JSON.parse(result.list)).toEqual(["185", "251", "257", "261"]);
  });
  test("stringify a struct", () => {
    const json = stringlfyObject(person);
    const result = JSON.parse(json);
    expect(result).toEqual({ name: "John", age: "30", bool: "true" });
  });
});
