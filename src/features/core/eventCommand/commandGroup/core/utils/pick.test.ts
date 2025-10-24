import type { MockedFunction } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type {
  Command_CommonEvent,
  Command_ShowMessageBody,
  EventCommand,
  ExtractCommandByParam,
} from "@RpgTypes/rmmz";
import {
  makeCommandCommonEvent,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  type Command_ShowMessageHeader,
} from "@RpgTypes/rmmz";
import { pickCommands } from "./pick";

type Pair = ReturnType<
  typeof pickCommands<Command_ShowMessageHeader, Command_ShowMessageBody>
>;

const isCommandShowMessage = (command: EventCommand) => {
  return command.code === 101;
};
const isCommandShowMessageBody = (command: EventCommand) => {
  return command.code === 401;
};

const pickEx = (commands: ReadonlyArray<EventCommand>, index: number): Pair => {
  return pickCommands(
    commands,
    index,
    isCommandShowMessage,
    isCommandShowMessageBody
  );
};

const makeMockFunctions = () => ({
  head: vi.fn(isCommandShowMessage),
  body: vi.fn(isCommandShowMessageBody),
});

const testPickCommands = (
  description: string,
  mockFn: {
    head: MockedFunction<typeof isCommandShowMessage>;
    body: MockedFunction<typeof isCommandShowMessageBody>;
  },
  commands: ReadonlyArray<EventCommand>,
  index: number,
  expected: Pair
) => {
  test(description, () => {
    const result = pickCommands(
      commands,
      index,
      (a): a is EventCommand => mockFn.head(a),
      (b): b is ExtractCommandByParam<[string]> => mockFn.body(b)
    );
    expect(result.header).toEqual(expected.header);
    expect(result.bodies).toEqual(expected.bodies);
  });
};

describe("pickCommands  - should handle a single head and a single body", () => {
  const commands = [
    makeCommandShowMessage({}),
    makeCommandShowMessageBody("bbb"),
  ] as const satisfies ReadonlyArray<EventCommand>;
  describe("Invalid cases", () => {
    test("should throw an error when the head is invalid", () => {
      expect(() => pickEx(commands, 1)).toThrow();
    });
    test("should throw an error when index is negative", () => {
      expect(() => pickEx(commands, -1)).toThrow();
    });
    test("should throw an error when index is out of bounds", () => {
      expect(() => pickEx(commands, commands.length)).toThrow();
    });
  });
  describe("Valid cases", () => {
    const mockFn = makeMockFunctions();
    testPickCommands(
      "should pick a valid head with a single body",
      mockFn,
      commands,
      0,
      {
        header: makeCommandShowMessage({}),
        bodies: [makeCommandShowMessageBody("bbb")],
      }
    );
    test("should call head function once with the first command", () => {
      expect(mockFn.head).toHaveBeenCalledTimes(1);
      expect(mockFn.head).toBeCalledWith(commands[0]);
    });
    test("should call body function once with the second command", () => {
      expect(mockFn.body).toHaveBeenCalledTimes(1);
      expect(mockFn.body).toBeCalledWith(commands[1]);
    });
  });

  describe("Valid cases with multiple bodies", () => {
    const mockFn = makeMockFunctions();
    const commands = [
      makeCommandShowMessage({}),
      makeCommandShowMessageBody("bbb"),
      makeCommandShowMessageBody("ccc"),
      makeCommandCommonEvent({ eventId: 5 }),
      makeCommandShowMessageBody("ddd"),
      makeCommandCommonEvent({ eventId: 100 }),
    ] as const satisfies ReadonlyArray<EventCommand>;
    testPickCommands(
      "should pick a valid head with multiple bodies",
      mockFn,
      commands,
      0,
      {
        header: makeCommandShowMessage({}),
        bodies: [
          makeCommandShowMessageBody("bbb"),
          makeCommandShowMessageBody("ccc"),
        ],
      }
    );
    describe("Function call validation", () => {
      test("should call head function once with the first command", () => {
        expect(mockFn.head).toHaveBeenCalledTimes(1);
        expect(mockFn.head).toBeCalledWith(commands[0]);
      });

      test("should call body function three times with the correct commands", () => {
        expect(mockFn.body).toHaveBeenCalledTimes(3);
        expect(mockFn.body).toBeCalledWith(commands[1]);
        expect(mockFn.body).toBeCalledWith(commands[2]);
        expect(mockFn.body).toBeCalledWith(commands[3]);
      });
    });

    describe("should throw an error when starting index is not a valid head", () => {
      test("index 1", () => expect(() => pickEx(commands, 1)).toThrow());
      test("index 2", () => expect(() => pickEx(commands, 2)).toThrow());
      test("index 3", () => expect(() => pickEx(commands, 3)).toThrow());
    });
  });
});
describe("pickCommands - Complex Cases", () => {
  const commands = [
    makeCommandShowMessage({ speakerName: "alice" }),
    makeCommandShowMessageBody("bbb"),
    makeCommandCommonEvent({ eventId: 5 }),
    makeCommandShowMessage({ speakerName: "bob" }),
    makeCommandShowMessageBody("xxx"),
    makeCommandShowMessageBody("yyy"),
  ] as const satisfies ReadonlyArray<EventCommand>;

  describe("Valid case with a single body", () => {
    const mockFn = makeMockFunctions();
    testPickCommands(
      "should pick a valid head with a single body",
      mockFn,
      commands,
      0,
      {
        header: makeCommandShowMessage({ speakerName: "alice" }),
        bodies: [makeCommandShowMessageBody("bbb")],
      }
    );
  });

  describe("Valid case with multiple bodies", () => {
    const mockFn = makeMockFunctions();
    testPickCommands(
      "should pick a valid head with multiple bodies",
      mockFn,
      commands,
      3,
      {
        header: makeCommandShowMessage({ speakerName: "bob" }),
        bodies: [
          makeCommandShowMessageBody("xxx"),
          makeCommandShowMessageBody("yyy"),
        ],
      }
    );

    describe("Function call validation for multiple bodies", () => {
      test("should call head function once with the correct command", () => {
        expect(mockFn.head).toHaveBeenCalledTimes(1);
        expect(mockFn.head).toBeCalledWith(commands[3]);
      });

      test("should call body function twice with the correct commands", () => {
        expect(mockFn.body).toHaveBeenCalledTimes(2);
        expect(mockFn.body).toBeCalledWith(commands[4]);
        expect(mockFn.body).toBeCalledWith(commands[5]);
      });
    });
  });
});

describe("pickCommands - Edge cases", () => {
  describe("Empty array handling", () => {
    const mockFn = makeMockFunctions();
    test("should throw an error when the array is empty", () => {
      expect(() =>
        pickCommands(
          [],
          0,
          (a): a is EventCommand => mockFn.head(a),
          (b): b is Command_ShowMessageBody => mockFn.body(b)
        )
      ).toThrow();
    });
    test("should not call body function when the array is empty", () => {
      expect(mockFn.body).toHaveBeenCalledTimes(0);
    });
    test("should call head function once when the array is empty", () => {
      expect(mockFn.head).toHaveBeenCalledTimes(1);
    });
  });
  describe("Empty body handling", () => {
    const mockFn = makeMockFunctions();
    const commands = [
      makeCommandShowMessage({}),
      makeCommandCommonEvent({ eventId: 5 }),
    ] as const satisfies ReadonlyArray<EventCommand>;
    testPickCommands(
      "should pick a valid head with no bodies",
      mockFn,
      commands,
      0,
      {
        header: makeCommandShowMessage({}),
        bodies: [],
      }
    );
  });
});

describe("isCommand** functions", () => {
  test("isCommandShowMessage should correctly identify valid and invalid heads", () => {
    const command: Command_ShowMessageHeader = makeCommandShowMessage({});
    expect(command).toSatisfy(isCommandShowMessage);
  });

  test("isCommandShowMessageBody should correctly identify valid and invalid bodies", () => {
    const command: Command_ShowMessageBody = makeCommandShowMessageBody("aaa");
    expect(command).toSatisfy(isCommandShowMessageBody);
  });

  test("isCommandShowMessage and isCommandShowMessageBody should reject unrelated commands", () => {
    const command: Command_CommonEvent = makeCommandCommonEvent({
      eventId: 5,
    });
    expect(command).not.toSatisfy(isCommandShowMessage);
    expect(command).not.toSatisfy(isCommandShowMessageBody);
  });
});
