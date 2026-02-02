import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { ColorRGBA } from "@RpgTypes/libs";
import type {
  Command_FadeInScreen,
  Command_FadeOutScreen,
  Command_SetWeatherEffect,
  Command_TintScreen,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandFadeInScreen,
  makeCommandFadeOutScreen,
  makeCommandSetWeatherEffect,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Message, Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Screen } from "@RpgTypes/rmmzRuntime/objects/core/screeen";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

type FakeParty = Pick<Rmmz_Party, "inBattle">;
type FakeMessage = Pick<Rmmz_Message, "isBusy">;

type FakeScreen = Pick<Rmmz_Screen, (typeof SCREEN_KEYS)[number]>;

const SCREEN_KEYS = [
  "changeWeather",
  "startFlash",
  "startShake",
  "startTint",
  "startFadeOut",
  "startFadeIn",
] as const satisfies (keyof Rmmz_Screen & string)[];

const MOCK_FADE_SPEED = 123 as const;
const Color: ColorRGBA = [68, 68, 68, 128];

const createFakeMap = (): FakeMap => ({
  mapId: () => 1,
});

const createMockParty = (inBattle: boolean): MockedObject<FakeParty> => ({
  inBattle: vi.fn().mockReturnValue(inBattle),
});

const createMockMessage = (isBusy: boolean): MockedObject<FakeMessage> => ({
  isBusy: vi.fn().mockReturnValue(isBusy),
});

const createMockScreen = (): MockedObject<FakeScreen> => ({
  changeWeather: vi.fn(),
  startFlash: vi.fn(),
  startShake: vi.fn(),
  startTint: vi.fn(),
  startFadeOut: vi.fn(),
  startFadeIn: vi.fn(),
});

interface MockedObjects {
  map: FakeMap;
  party: MockedObject<FakeParty>;
  message: MockedObject<FakeMessage>;
  screen: MockedObject<FakeScreen>;
}

interface MockArgs {
  messageIsBusy: boolean;
  partyInBattle: boolean;
}

const createObjects = (args: MockArgs): MockedObjects => {
  const mockMap = createFakeMap();
  const mockScreen = createMockScreen();
  const mockParty = createMockParty(args.partyInBattle);
  const mockMessage = createMockMessage(args.messageIsBusy);
  return {
    map: mockMap,
    party: mockParty,
    message: mockMessage,
    screen: mockScreen,
  };
};

const stubGlobal = (objects: MockedObjects) => {
  vi.stubGlobal("$gameMap", objects.map);
  vi.stubGlobal("$gameParty", objects.party);
  vi.stubGlobal("$gameMessage", objects.message);
  vi.stubGlobal("$gameScreen", objects.screen);
};

const setupInterpreter = (command: EventCommand) => {
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);
  vi.spyOn(interpreter, "fadeSpeed").mockReturnValue(MOCK_FADE_SPEED);
  return interpreter;
};

describe("weather commands", () => {
  const command: Command_SetWeatherEffect = {
    code: 236,
    indent: 0,
    parameters: ["rain", 5, 10, true],
  };
  test("make", () => {
    const result = makeCommandSetWeatherEffect({
      type: "rain",
      power: 5,
      duration: 10,
      wait: true,
    });
    expect(result).toEqual(command);
  });
  describe("exec", () => {
    test("message not busy and not in battle", () => {
      const mocks = createObjects({
        partyInBattle: false,
        messageIsBusy: false,
      });
      stubGlobal(mocks);
      const interpreter = setupInterpreter(command);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).toHaveBeenCalledOnce();
      expect(mocks.message.isBusy).not.toHaveBeenCalled();
      expect(mocks.screen.changeWeather).toHaveBeenCalledWith("rain", 5, 10);
    });
    test("message busy and not in battle", () => {
      const mocks = createObjects({
        partyInBattle: true,
        messageIsBusy: false,
      });
      stubGlobal(mocks);
      const interpreter = setupInterpreter(command);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).toHaveBeenCalledOnce();
      expect(mocks.message.isBusy).not.toHaveBeenCalled();
      expect(mocks.screen.changeWeather).not.toHaveBeenCalled();
    });
  });
});

describe("fade in screen", () => {
  const command: Command_FadeInScreen = {
    code: 222,
    indent: 0,
    parameters: [],
  };
  test("make", () => {
    const result: Command_FadeInScreen = makeCommandFadeInScreen(0);
    expect(result).toEqual(command);
  });
  describe("exec", () => {
    test("message not busy", () => {
      const mocks = createObjects({
        partyInBattle: true,
        messageIsBusy: false,
      });
      stubGlobal(mocks);
      const interpreter = setupInterpreter(command);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).not.toHaveBeenCalled();
      expect(mocks.message.isBusy).toHaveBeenCalledOnce();
      expect(mocks.screen.startFadeIn).toHaveBeenCalledWith(MOCK_FADE_SPEED);
      expect(interpreter.fadeSpeed).toHaveBeenCalled();
    });
    test("message busy", () => {
      const mocks = createObjects({
        partyInBattle: true,
        messageIsBusy: true,
      });
      stubGlobal(mocks);
      const interpreter = setupInterpreter(command);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).not.toHaveBeenCalled();
      expect(mocks.message.isBusy).toHaveBeenCalledOnce();
      expect(mocks.screen.startFadeIn).not.toHaveBeenCalled();
      expect(interpreter.fadeSpeed).not.toHaveBeenCalled();
    });
  });
});

describe("fade out screen", () => {
  const command: Command_FadeOutScreen = {
    code: 221,
    indent: 4,
    parameters: [],
  };
  test("make", () => {
    const reulst: Command_FadeOutScreen = makeCommandFadeOutScreen(4);
    expect(reulst).toEqual(command);
  });
  describe("exec", () => {
    test("message not busy", () => {
      const mocks = createObjects({
        partyInBattle: true,
        messageIsBusy: false,
      });
      stubGlobal(mocks);
      const interpreter = setupInterpreter(command);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).not.toHaveBeenCalled();
      expect(mocks.message.isBusy).toHaveBeenCalledOnce();
      expect(mocks.screen.startFadeOut).toHaveBeenCalledWith(MOCK_FADE_SPEED);
      expect(interpreter.fadeSpeed).toHaveBeenCalled();
    });
    test("message busy", () => {
      const mocks = createObjects({
        partyInBattle: true,
        messageIsBusy: true,
      });
      stubGlobal(mocks);
      const interpreter = setupInterpreter(command);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).not.toHaveBeenCalled();
      expect(mocks.message.isBusy).toHaveBeenCalledOnce();
      expect(mocks.screen.startFadeOut).not.toHaveBeenCalled();
      expect(interpreter.fadeSpeed).not.toHaveBeenCalled();
    });
  });
});

describe("screen tint", () => {
  const command: Command_TintScreen = {
    code: 223,
    indent: 0,
    parameters: [Color, 60, true],
  };
});
