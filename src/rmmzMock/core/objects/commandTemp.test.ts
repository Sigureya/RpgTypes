import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ShowAnimation,
  Command_ShowBalloonIcon,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandShowAnimation,
  makeCommandShowBalloonIcon,
} from "@RpgTypes/rmmz/eventCommand";
import { SHOW_ANIMATION } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_InterpreterListener } from "@RpgTypes/rmmzRuntime/objects/core/temp/interpreterListener";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_CHARACTER = {
  name: "mock character",
};

const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

const createMockTemp = (): MockedObject<Rmmz_InterpreterListener> => ({
  requestBalloon: vi.fn(),
  requestAnimation: vi.fn(),
});

const createMockObjects = () => {
  return {
    map: makeMockMap(),
    temp: createMockTemp(),
  };
};

const stubGlobalObjects = (objects: ReturnType<typeof createMockObjects>) => {
  vi.stubGlobal("$gameMap", objects.map);
  vi.stubGlobal("$gameTemp", objects.temp);
};

describe("commandShowAnimation", () => {
  describe("should request animation for the character with waiting when waiting is true", () => {
    const mockAnimationId = 66;
    const command: Command_ShowAnimation = {
      code: SHOW_ANIMATION,
      indent: 0,
      parameters: [5, mockAnimationId, true],
    };
    describe("make", () => {
      test("should create Command_ShowAnimation with default parameters", () => {
        const result: Command_ShowAnimation = makeCommandShowAnimation({
          characterId: 5,
          animationId: mockAnimationId,
          waiting: true,
        });
        expect(result).toEqual(command);
      });
    });
    describe("exec", () => {
      test("should not request animation if character is null", () => {
        const mocks = createMockObjects();
        stubGlobalObjects(mocks);
        const interpreter = new Game_Interpreter();
        vi.spyOn(interpreter, "character").mockReturnValue(null);
        vi.spyOn(interpreter, "setWaitMode");
        interpreter.setup([command], 0);
        interpreter.executeCommand();
        expect(mocks.temp.requestAnimation).not.toHaveBeenCalled();
        expect(interpreter.setWaitMode).not.toHaveBeenCalled();
      });
      test("should request animation for the character without waiting", () => {
        const mocks = createMockObjects();
        stubGlobalObjects(mocks);
        const interpreter = new Game_Interpreter();
        vi.spyOn(interpreter, "character").mockReturnValue(MOCK_CHARACTER);
        vi.spyOn(interpreter, "setWaitMode");
        interpreter.setup([command], 0);
        interpreter.executeCommand();
        expect(mocks.temp.requestAnimation).toHaveBeenCalledWith(
          [MOCK_CHARACTER],
          mockAnimationId,
        );
        expect(interpreter.setWaitMode).toHaveBeenCalledOnce();
        expect(mocks.temp.requestBalloon).not.toHaveBeenCalled();
      });
    });
  });

  describe("should request animation for the character without waiting when waiting is false", () => {
    const mockAnimationId = 66;
    const command: Command_ShowAnimation = {
      code: SHOW_ANIMATION,
      indent: 0,
      parameters: [5, mockAnimationId, false],
    };
    describe("make", () => {
      test("should create Command_ShowAnimation with default parameters", () => {
        const result: Command_ShowAnimation = makeCommandShowAnimation({
          characterId: 5,
          animationId: mockAnimationId,
        });
        expect(result).toEqual(command);
      });
      test("should create Command_ShowAnimation with waiting parameter", () => {
        const result: Command_ShowAnimation = makeCommandShowAnimation({
          characterId: 5,
          animationId: mockAnimationId,
          waiting: false,
        });
        expect(result).toEqual(command);
      });
    });
    describe("exec", () => {
      test("should not request animation if character is null", () => {
        const mocks = createMockObjects();
        stubGlobalObjects(mocks);
        const interpreter = new Game_Interpreter();
        vi.spyOn(interpreter, "character").mockReturnValue(null);
        vi.spyOn(interpreter, "setWaitMode");
        interpreter.setup([command], 0);
        interpreter.executeCommand();
        expect(mocks.temp.requestAnimation).not.toHaveBeenCalled();
        expect(interpreter.setWaitMode).not.toHaveBeenCalled();
        expect(mocks.temp.requestBalloon).not.toHaveBeenCalled();
      });
      test("should request animation for the character without waiting", () => {
        const mocks = createMockObjects();
        stubGlobalObjects(mocks);
        const interpreter = new Game_Interpreter();
        vi.spyOn(interpreter, "character").mockReturnValue(MOCK_CHARACTER);
        vi.spyOn(interpreter, "setWaitMode");
        interpreter.setup([command], 0);
        interpreter.executeCommand();
        expect(mocks.temp.requestAnimation).toHaveBeenCalledWith(
          [MOCK_CHARACTER],
          mockAnimationId,
        );
        expect(interpreter.setWaitMode).not.toHaveBeenCalled();
        expect(mocks.temp.requestBalloon).not.toHaveBeenCalled();
      });
    });
  });
});

describe("commandBalloon", () => {
  const command: Command_ShowBalloonIcon = {
    code: 213,
    indent: 0,
    parameters: [3, 4, true],
  };
  test("make", () => {
    const result: Command_ShowBalloonIcon = makeCommandShowBalloonIcon({
      characterId: 3,
      balloonId: 4,
      waiting: true,
    });
    expect(result).toEqual(command);
  });
});
