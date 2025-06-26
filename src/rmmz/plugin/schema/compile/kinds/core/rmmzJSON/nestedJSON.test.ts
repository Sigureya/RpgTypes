import { describe, expect, test } from "vitest";
import { parseDeepJSON } from "./parseDeepJSON";
import { stringifyDeepJSON } from "./stringifyDeepJSON";
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
    test("parseDeepJSON", () => {
      const parsed = parseDeepJSON(json);
      expect(parsed).toEqual(data);
    });
  });
  describe("nested object", () => {
    const data: NestedPerson = {
      person: {
        name: "bob",
        age: 30,
      },
      address: {
        city: "New York",
        country: "USA",
      },
    };
    const expected: string = JSON.stringify({
      person: JSON.stringify({
        name: "bob",
        age: "30",
      } satisfies XXJSONType<Person>),
      address: JSON.stringify({
        city: "New York",
        country: "USA",
      } satisfies XXJSONType<Address>),
    } satisfies Record<keyof NestedPerson, string>);
    test("nested object", () => {
      const result = stringifyDeepJSON(data);
      expect(result).toEqual(expected);
    });
    test("parseDeepJSON", () => {
      const parsed = parseDeepJSON(expected);
      expect(parsed).toEqual(data);
    });
  });
  describe("array", () => {
    const data: number[] = [1, 2, 3];
    const json: string = JSON.stringify(["1", "2", "3"]);
    test("number array", () => {
      const result = stringifyDeepJSON(data);
      expect(result).toEqual(json);
    });
    test("parseDeepJSON", () => {
      const parsed = parseDeepJSON(json);
      expect(parsed).toEqual(data);
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
    test("parseDeepJSON", () => {
      const parsed = parseDeepJSON(expected);
      expect(parsed).toEqual(baseData);
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
    test("parseDeepJSON", () => {
      const parsed = parseDeepJSON(expected2);
      expect(parsed).toEqual(family);
    });
  });
});
