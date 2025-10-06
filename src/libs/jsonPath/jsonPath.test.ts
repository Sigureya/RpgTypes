import { describe, expect, test } from "vitest";
import { JSONPathJS } from "jsonpath-js";

type User = { name: string };

describe("jsonPath", () => {
  const queryString = "$.users[*].name";
  test("basic", () => {
    const query = new JSONPathJS(queryString);
    const result = query.find({
      users: [{ name: "John Doe" }, { name: "Jane Doe" }] satisfies User[],
    });
    const expected: string[] = ["John Doe", "Jane Doe"];
    expect(result).toEqual(expected);
  });
  test("paths", () => {
    const query = new JSONPathJS(queryString);
    const result = query.paths({
      users: [{ name: "John Doe" }, { name: "Jane Doe" }] satisfies User[],
    });
    const expected = [
      { value: "John Doe", path: "$['users'][0]['name']" },
      { value: "Jane Doe", path: "$['users'][1]['name']" },
    ];
    expect(result).toEqual(expected);
  });
  test("pathSegments", () => {
    const query = new JSONPathJS(queryString);
    const result = query.pathSegments({
      users: [{ name: "John Doe" }, { name: "Jane Doe" }] satisfies User[],
    });
    const expected = [
      {
        value: "John Doe",
        segments: ["users", 0, "name"],
      },
      {
        value: "Jane Doe",
        segments: ["users", 1, "name"],
      },
    ];
    expect(result).toEqual(expected);
  });
});
