import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_ImageManager } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Message } from "@RpgTypes/rmmzRuntime/objects/core/message";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

const makeMockedInterpreter = () => {
  const keys: (keyof Game_Interpreter)[] = [
    "command101",
    "nextEventCode",
    "loadImage",
  ];
  const inter = new Game_Interpreter();
  keys.forEach((k) => {
    vi.spyOn(inter, k);
  });
  return inter;
};

type FakeMessage = Pick<
  Rmmz_Message,
  | "isBusy"
  | "add"
  | "setFaceImage"
  | "setBackground"
  | "setPositionType"
  | "setChoices"
  | "setChoiceBackground"
  | "setChoicePositionType"
  | "setNumberInput"
  | "setSpeakerName"
>;

const makeMockMessage2 = (): FakeMessage => ({
  isBusy: vi.fn(() => false),
  add: vi.fn(),
  setFaceImage: vi.fn(),
  setBackground: vi.fn(),
  setPositionType: vi.fn(),
  setChoices: vi.fn(),
  setChoiceBackground: vi.fn(),
  setChoicePositionType: vi.fn(),
  setNumberInput: vi.fn(),
  setSpeakerName: vi.fn(),
});
type MockedImageManager = MockedObject<Pick<Rmmz_ImageManager, "loadFace">>;

const makeMockImageManager = (): MockedImageManager => ({
  loadFace: vi.fn((filename: string) => ({})),
});

interface Mocks {
  message: FakeMessage;
  imageManager: MockedImageManager;
}

const makeMocks = (): Mocks => {
  return {
    message: makeMockMessage2(),
    imageManager: makeMockImageManager(),
  };
};

interface TestCase {
  mm: Command_ShowMessageHeader;
  hedder: Command_ShowMessageHeader;
  body: Command_ShowMessageBody[];
}

const messageToHaveBeenCalled = (
  command: Command_ShowMessageHeader,
  mockedMessage: FakeMessage
) => {
  expect(mockedMessage.isBusy).toHaveBeenCalled();
  expect(mockedMessage.setFaceImage).toHaveBeenCalledWith(
    command.parameters[0],
    command.parameters[1]
  );
  expect(mockedMessage.setBackground).toHaveBeenCalledWith(
    command.parameters[2]
  );
  expect(mockedMessage.setPositionType).toHaveBeenCalledWith(
    command.parameters[3]
  );
  expect(mockedMessage.setSpeakerName).toHaveBeenCalledWith(
    command.parameters[4]
  );
};

const runTestCase = (testCase: TestCase) => {
  describe("", () => {
    test("make command", () => {
      expect(testCase.mm).toEqual(testCase.hedder);
    });
    test("exec", () => {
      const { message, imageManager } = makeMocks();
      const map = makeMockMap();
      vi.stubGlobal("$gameMap", map);
      vi.stubGlobal("$gameMessage", message);
      vi.stubGlobal("ImageManager", imageManager);

      const interpreter = makeMockedInterpreter();
      interpreter.setup([testCase.hedder, ...testCase.body], 0);
      expect(interpreter.loadImage).toHaveBeenCalledTimes(1);
      expect(imageManager.loadFace).toHaveBeenCalledWith(
        testCase.hedder.parameters[0]
      );

      const result = interpreter.executeCommand();
      expect(result).toBe(true);
      messageToHaveBeenCalled(testCase.hedder, message);
      expect(interpreter.command101).toHaveBeenCalledWith(
        testCase.hedder.parameters
      );

      testCase.body.forEach((cmd) => {
        expect(message.add).toHaveBeenCalledWith(cmd.parameters[0]);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    mm: makeCommandShowMessage({
      speakerName: "speaker",
      facename: "face",
      faceIndex: 0,
      background: 0,
      positionType: 1,
    }),
    hedder: {
      code: 101,
      indent: 0,
      parameters: ["face", 0, 0, 1, "speaker"],
    },
    body: [{ code: 401, indent: 0, parameters: ["text1"] }],
  },
];

testCases.forEach((tc) => runTestCase(tc));
