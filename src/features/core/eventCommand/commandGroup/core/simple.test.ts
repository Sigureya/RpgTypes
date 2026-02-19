import { describe, test, expect } from "vitest";
import { SHOW_MESSAGE_BODY } from "@RpgTypes/libs/eventCommand";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
} from "@RpgTypes/rmmz";
import type { Command_ShowMessageHeader } from "@RpgTypes/rmmz";
import type { Command_ShowMessageBody, EventCommand } from "@RpgTypes/rmmz";
import { SimpleEventCommandGroup } from "./simple";

const testSimpleEventCommandGroup = (
  bodyTexts: [string, ...string[]],
  expectedText: string,
  header: Command_ShowMessageHeader = makeCommandShowMessage({}),
) => {
  const group = new SimpleEventCommandGroup(
    SHOW_MESSAGE_BODY,
    header,
    bodyTexts.map((text) => makeCommandShowMessageBody(text)),
  );

  describe("SimpleEventCommandGroup - Body Text and Merged Body Validation", () => {
    const bodyText: string = group.getBodyText();
    test("should return the correct body text", () => {
      expect(bodyText).toEqual(expectedText);
    });
    test("", () => {
      expect(bodyText).not.toMatch(/^\s+$/);
    });

    const body: Command_ShowMessageBody = group.mergedBody();
    test("should create a merged body", () => {
      expect(body).toBeTruthy();
    });

    test("should create a merged body with the correct parameters", () => {
      expect(body).toEqual({
        code: SHOW_MESSAGE_BODY,
        parameters: [expectedText],
        indent: 0,
      } satisfies Command_ShowMessageBody);
    });

    test("should not include the merged body in the original bodies array", () => {
      expect(group.bodies).not.toContain(body);
    });
  });

  describe("SimpleEventCommandGroup - Normalized Commands Validation", () => {
    const result: EventCommand[] = group.normalizedCommands();
    test("", () => {
      expect(result).toHaveLength(2);
      expect(result.length).toBe(2);
    });

    test("should include a copy of the header in the normalized commands", () => {
      expect(result[0]).toEqual(header);
    });

    test("should not include the original header object in the normalized commands", () => {
      expect(result[0]).not.toBe(header);
    });
  });
};

describe("SimpleEventCommandGroup - General Cases", () => {
  testSimpleEventCommandGroup(["xxx  "], "xxx");
  testSimpleEventCommandGroup(["aaa", "bbb", "ccc"], "aaa\nbbb\nccc");
  testSimpleEventCommandGroup([" aaa", "bbb\n", "ccc  "], " aaa\nbbb\nccc");
});

describe("SimpleEventCommandGroup - Special Cases", () => {
  describe("Empty or whitespace-only bodies", () => {
    testSimpleEventCommandGroup(["   "], ""); // 空白のみ
    testSimpleEventCommandGroup(["\n"], ""); // 改行のみ
    testSimpleEventCommandGroup(["  ", "  "], ""); // 空白のみの複数ボディ
  });

  describe("Bodies with trailing whitespace or tabs", () => {
    testSimpleEventCommandGroup(["xxx  "], "xxx"); // 末尾に空白
    testSimpleEventCommandGroup(["xxx\t"], "xxx"); // 末尾にタブ
    testSimpleEventCommandGroup(["aaa\nbbb"], "aaa\nbbb"); // 改行を含む
  });

  describe("Multiple bodies with mixed formatting", () => {
    testSimpleEventCommandGroup(["aaa", "bbb", "ccc"], "aaa\nbbb\nccc"); // 複数ボディ
    testSimpleEventCommandGroup([" aaa", "bbb\n", "ccc  "], " aaa\nbbb\nccc"); // 前後に空白や改行
    testSimpleEventCommandGroup([" aaa\nbbb\n", "ccc  "], " aaa\nbbb\nccc"); // 複数行を含む
  });
});

describe("SimpleEventCommandGroup - Edge Cases", () => {
  describe("Empty bodies array", () => {
    const header: Command_ShowMessageHeader = makeCommandShowMessage({
      speakerName: "Header",
    });
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      header,
      [] as Command_ShowMessageBody[],
    );

    test("should create a merged body with empty parameters", () => {
      const body: Command_ShowMessageBody = group.mergedBody();
      expect(body).not.toBeUndefined();
      expect(body).toEqual({
        code: SHOW_MESSAGE_BODY,
        parameters: [""],
        indent: 0,
      } satisfies Command_ShowMessageBody);
    });

    test("should return an empty string for body text", () => {
      expect(group.getBodyText()).toBe("");
    });

    const normalizedCommands: EventCommand[] = group.normalizedCommands();

    test("should return only the header in normalized commands", () => {
      expect(normalizedCommands).toEqual([header]);
    });

    test("should not include the original header object in normalized commands", () => {
      expect(normalizedCommands).not.toContain(group.header);
    });
  });
});
