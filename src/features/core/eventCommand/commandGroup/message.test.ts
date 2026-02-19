import { describe, test, expect } from "vitest";
import { SHOW_MESSAGE_BODY, SHOW_MESSAGE } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
  EventCommand,
} from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandCommonEvent,
  makeCommandShowMessageBody,
} from "@RpgTypes/rmmz";
import type { EventCommandGroupBase } from "./core";
import { SimpleEventCommandGroup } from "./core";
import { createMessageGroup, extractMessageGroup } from "./message";

const mockCommands = [
  makeCommandCommonEvent({ eventId: 6 }),
  makeCommandShowMessage({
    facename: "face",
    speakerName: "speaker",
  }),
  { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
  { code: 401, parameters: ["bbb"], indent: 0 },
  { code: 401, parameters: ["ccc"], indent: 0 },
  makeCommandCommonEvent({ eventId: 10 }),
] as const satisfies ReadonlyArray<EventCommand>;

describe("extractMessageGroup", () => {
  test("should extract a valid message group with a header and multiple bodies", () => {
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

    const result = extractMessageGroup(mockCommands, 1);

    expect(result).toEqual(expected);
    expect(result.header).toEqual(expected.header);
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createMessageGroup", () => {
  test("should create a valid SimpleEventCommandGroup instance", () => {
    const result = createMessageGroup(mockCommands, 1);
    const expectedBodyText = "aaa\nbbb\nccc" as const;

    expect(result).toBeInstanceOf(SimpleEventCommandGroup);
    expect(result.getBodyText()).toBe(expectedBodyText);

    const mergedBody: Command_ShowMessageBody = result.mergedBody();
    expect(mergedBody).toEqual({
      code: SHOW_MESSAGE_BODY,
      indent: 0,
      parameters: [expectedBodyText],
    } satisfies Command_ShowMessageBody);

    const newCommands: EventCommand[] = result.normalizedCommands();
    const expectedCommands: EventCommand[] = [
      makeCommandShowMessage({
        facename: "face",
        speakerName: "speaker",
      }),
      makeCommandShowMessageBody(expectedBodyText),
    ];

    expect(newCommands).toEqual(expectedCommands);
    expect(newCommands[0]).not.toBe(result.header);
    expect(newCommands[0]).toEqual(result.header);
  });
});

describe("makeCommandShowMessage", () => {
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
