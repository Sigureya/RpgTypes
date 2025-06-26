import { describe, expect, test } from "vitest";
import { fnEx } from "./nestedJSON";
interface Person {
  name: string;
  age: number;
}

type XXJSONType<T> = Record<keyof T, string>;

interface NestedPerson {
  person: Person;
  address: Address;
}

interface Address {
  city: string;
  country: string;
}

interface Family {
  members: Person[];
}

describe("", () => {
  test("", () => {
    const person: Person = {
      name: "bob",
      age: 30,
    };

    const expected = JSON.stringify({
      name: "bob",
      age: "30",
    } satisfies XXJSONType<Person>);
    const result: string = fnEx(person);
    expect(result).toEqual(expected);
  });
  test("nested object", () => {
    const nestedPerson = {
      person: {
        name: "bob",
        age: "30",
      } satisfies XXJSONType<Person>,
      address: {
        city: "New York",
        country: "USA",
      },
    };

    const expected: Record<keyof NestedPerson, string> = {
      person: JSON.stringify(nestedPerson.person),
      address: JSON.stringify(nestedPerson.address),
    };
    const result = fnEx(nestedPerson);
    expect(result).toEqual(JSON.stringify(expected));
  });
  describe("", () => {
    test("", () => {
      const numArray: number[] = [1, 2, 3];
      const expected: string = JSON.stringify(["1", "2", "3"]);
      const result = fnEx(numArray);
      expect(result).toEqual(expected);
    });
  });
});
describe("fnEx", () => {
  test("", () => {
    const baseData = [{ name: "bob", age: 30 }] as const satisfies Person[];
    const jsonLikeData = [
      { name: "bob", age: "30" } satisfies Record<keyof Person, string>,
    ];
    const expected = JSON.stringify(jsonLikeData.map((v) => JSON.stringify(v)));
    const result: string = fnEx(baseData);
    expect(result).toEqual(expected);
  });
  test("nested array", () => {
    const family: Family = {
      members: [
        { name: "bob", age: 30 },
        { name: "alice", age: 28 },
      ],
    };
    const expected2: string = JSON.stringify({
      members: JSON.stringify(
        [
          { name: "bob", age: "30" } satisfies Record<keyof Person, string>,
          { name: "alice", age: "28" } satisfies Record<keyof Person, string>,
        ].map((v) => JSON.stringify(v))
      ),
    });

    const result = fnEx(family);
    expect(result).toEqual(expected2);
  });
});
