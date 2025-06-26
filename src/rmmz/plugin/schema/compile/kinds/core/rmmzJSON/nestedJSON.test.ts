import { describe, expect, test } from "vitest";
import { stringifyDeepJSON } from "./nestedJSONfromObject";
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

describe("stringifyDeepJSON", () => {
  describe("simple object", () => {
    const data: Person = {
      name: "bob",
      age: 30,
    };

    const json = JSON.stringify({
      name: "bob",
      age: "30",
    } satisfies XXJSONType<Person>);
    test("", () => {
      const result: string = stringifyDeepJSON(data);
      expect(result).toEqual(json);
    });
  });
  describe("nested object", () => {
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
    test("nested object", () => {
      const result = stringifyDeepJSON(nestedPerson);
      expect(result).toEqual(JSON.stringify(expected));
    });
  });
  describe("array", () => {
    const data: number[] = [1, 2, 3];
    const json: string = JSON.stringify(["1", "2", "3"]);
    test("number array", () => {
      const result = stringifyDeepJSON(data);
      expect(result).toEqual(json);
    });
  });
  describe("", () => {
    const baseData = [{ name: "bob", age: 30 }] as const satisfies Person[];
    const jsonLikeData = [
      { name: "bob", age: "30" } satisfies Record<keyof Person, string>,
    ];
    const expected = JSON.stringify(jsonLikeData.map((v) => JSON.stringify(v)));
    test("", () => {
      const result: string = stringifyDeepJSON(baseData);
      expect(result).toEqual(expected);
    });
  });
  describe("", () => {
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
    test("nested array", () => {
      const result = stringifyDeepJSON(family);
      expect(result).toEqual(expected2);
    });
  });
});
