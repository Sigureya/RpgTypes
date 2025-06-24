import { describe, test, expect } from "vitest";
import { splitByContext } from "./toknize";
describe("splitByContext", () => {
  test("splitByContext", () => {
    const mockCommandTexts1: string[] = [
      `@command newPerson`,
      `@arg  name`,
      `@type string`,
      `@default bob`,
      `@arg age`,
      `@type number`,
      `@default 42`,
    ];

    const mockCommandTexts2: string[] = [
      `@command GetData`,
      `@arg  id`,
      `@type  number`,
    ];
    const mockParamTextsA: string[] = [
      `@param paramA`,
      `@type  number`,
      `@default 123`,
    ];

    const result: string[] = splitByContext(
      [...mockCommandTexts1, ...mockCommandTexts2, ...mockParamTextsA].join(
        "\n"
      )
    );
    expect(result[0]).toEqual(mockCommandTexts1.join("\n"));
    expect(result[1]).toEqual(mockCommandTexts2.join("\n"));
    expect(result[2]).toEqual(mockParamTextsA.join("\n"));
  });
});
