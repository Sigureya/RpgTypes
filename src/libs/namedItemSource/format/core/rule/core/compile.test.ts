import { describe, test, expect } from "vitest";
import { compileFormatPropeties } from "./compile";
import type { FormatProperties } from "./direct";

interface Person {
  name: string;
  age: number;
  address: string;
}
describe("compileFormatPropeties", () => {
  test("should compile string and number placeholders", () => {
    const props: FormatProperties<Person> = {
      numbers: ["age"],
      strings: ["name", "address"],
    };
    const result = compileFormatPropeties(props);
    expect(result.numbers).toEqual([{ dataKey: "age", placeHolder: "{age}" }]);
    expect(result.strings).toEqual([
      { dataKey: "name", placeHolder: "{name}" },
      { dataKey: "address", placeHolder: "{address}" },
    ]);
  });

  test("should handle empty properties", () => {
    const props: FormatProperties<Person> = {};
    const result = compileFormatPropeties(props);
    expect(result.numbers).toEqual([]);
    expect(result.strings).toEqual([]);
  });

  test("should handle only numbers", () => {
    const props: FormatProperties<Person> = {
      numbers: ["age"],
    };
    const result = compileFormatPropeties(props);
    expect(result.numbers).toEqual([{ dataKey: "age", placeHolder: "{age}" }]);
    expect(result.strings).toEqual([]);
  });

  test("should handle only strings", () => {
    const props: FormatProperties<Person> = {
      strings: ["name"],
    };
    const result = compileFormatPropeties(props);
    expect(result.numbers).toEqual([]);
    expect(result.strings).toEqual([
      { dataKey: "name", placeHolder: "{name}" },
    ]);
  });
});
