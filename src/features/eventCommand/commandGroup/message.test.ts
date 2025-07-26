import { describe, test, expect } from "vitest";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
  EventCommand,
} from "@RpgTypes/rmmz";
import {
  SHOW_MESSAGE_BODY,
  SHOW_MESSAGE,
  makeCommandShowMessage,
  makeCommandCommonEvent,
  makeCommandShowMessageBody,
} from "@RpgTypes/rmmz";
import type { EventCommandGroupBase } from "./core";
import { SimpleEventCommandGroup } from "./core";
import { createMessageGroup, extractMessageGroup } from "./message";

const mockCommands: EventCommand[] = [
  makeCommandCommonEvent({ eventId: 6 }),
  makeCommandShowMessage({
    facename: "face",
    speakerName: "speaker",
  }),
  { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
  { code: 401, parameters: ["bbb"], indent: 0 },
  { code: 401, parameters: ["ccc"], indent: 0 },
  makeCommandCommonEvent({ eventId: 10 }),
];

describe("extractMessageGroup - Validation Tests", () => {
  const expected: EventCommandGroupBase<
    Command_ShowMessageHeader,
    Command_ShowMessageBody
  > = {
    header: makeCommandShowMessage({
      facename: "face",
      speakerName: "speaker",
    }),
    bodies: [
      { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
      makeCommandShowMessageBody("bbb"),
      { code: 401, parameters: ["ccc"], indent: 0 },
    ] satisfies Command_ShowMessageBody[],
  };

  test("should extract a valid message group", () => {
    expect(extractMessageGroup(mockCommands, 1)).toEqual(expected);
  });

  const result = extractMessageGroup(mockCommands, 1);

  test("should extract the correct header", () => {
    expect(result.header).toEqual(expected.header);
  });

  test("should extract the correct bodies", () => {
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createMessageGroup - SimpleEventCommandGroup Creation", () => {
  const result = createMessageGroup(mockCommands, 1);
  const expectedBodyText = "aaa\nbbb\nccc" as const;

  describe("SimpleEventCommandGroup instance validation", () => {
    test("should create an instance of SimpleEventCommandGroup", () => {
      expect(result).toBeInstanceOf(SimpleEventCommandGroup);
    });

    test("should return correct body text", () => {
      expect(result.getBodyText()).toBe(expectedBodyText);
    });

    test("should return correct merged body", () => {
      const mergedBody: Command_ShowMessageBody = result.mergedBody();
      expect(mergedBody).toEqual({
        code: SHOW_MESSAGE_BODY,
        indent: 0,
        parameters: [expectedBodyText],
      } satisfies Command_ShowMessageBody);
    });
  });
  describe("", () => {
    const newCommands: EventCommand[] = result.normalizedCommands();
    test("should return normalized commands", () => {
      const expectedCommands: EventCommand[] = [
        makeCommandShowMessage({
          facename: "face",
          speakerName: "speaker",
        }),
        makeCommandShowMessageBody(expectedBodyText),
      ];
      expect(newCommands).toEqual(expectedCommands);
    });
    test("", () => {
      expect(newCommands[0]).not.toBe(result.header);
      expect(newCommands[0]).toEqual(result.header);
    });
  });
});

describe("makeCommands", () => {
  test("should create a valid Command_ShowMessage instance", () => {
    const command: Command_ShowMessageHeader = makeCommandShowMessage({});
    const expected: Command_ShowMessageHeader = {
      code: SHOW_MESSAGE,
      parameters: ["", 0, 0, 2, ""],
      indent: 0,
    };
    expect(command).toEqual(expected);
  });
});
