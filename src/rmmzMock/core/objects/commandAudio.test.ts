import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  EventCommand,
  Command_PlayBGM,
  Command_PlaySE,
  Command_PlayBGS,
  Command_PlayME,
  Command_StopSE,
  Command_FadeOutBGM,
  Command_FadeOutBGS,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandPlayME,
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlaySE,
  makeCommandFadeOutBGM,
  makeCommandFadeOutBGS,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_AudioManager } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

const makeMockedAudio = (): MockedObject<Rmmz_AudioManager> => ({
  playBgm: vi.fn(),
  stopBgm: vi.fn(),
  fadeOutBgm: vi.fn(),
  fadeInBgm: vi.fn(),
  playBgs: vi.fn(),
  stopBgs: vi.fn(),
  fadeOutBgs: vi.fn(),
  fadeInBgs: vi.fn(),
  playMe: vi.fn(),
  playSe: vi.fn(),
  playStaticSe: vi.fn(),
  stopSe: vi.fn(),
});

const makeMockedInterpreter = () => {
  const keys: (keyof Game_Interpreter)[] = [
    "command241",
    "command242",
    "command243",
    "command244",
    "command245",
    "command246",
    "command249",
    "command250",
    "command251",
  ];
  const inter = new Game_Interpreter();
  keys.forEach((k) => {
    vi.spyOn(inter, k);
  });
  return inter;
};

interface TestCase<T> {
  fn: keyof Rmmz_AudioManager;
  commandFn: keyof Game_Interpreter;
  command: T;
  makedCommand: T;
}

const runTestCase = <T extends EventCommand>(testCase: TestCase<T>) => {
  describe(`${testCase.commandFn}:${testCase.fn}`, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.makedCommand);
    });
    test("exec", () => {
      const map = makeMockMap();
      vi.stubGlobal("$gameMap", map);
      const audioManager = makeMockedAudio();
      vi.stubGlobal("AudioManager", audioManager);
      const interpreter = makeMockedInterpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      expect(interpreter[testCase.commandFn]).toHaveBeenCalledWith(
        testCase.command.parameters
      );
      expect(audioManager[testCase.fn]).toHaveBeenCalledWith(
        ...testCase.command.parameters
      );
    });
  });
};

const stopSe: TestCase<Command_StopSE> = {
  commandFn: "command251",
  fn: "stopSe",
  command: {
    code: 251,
    indent: 0,
    parameters: [],
  },
  makedCommand: {
    code: 251,
    indent: 0,
    parameters: [],
  },
};
const playBgm: TestCase<Command_PlayBGM> = {
  commandFn: "command241",
  fn: "playBgm",
  command: {
    code: 241,
    indent: 0,
    parameters: [{ name: "bgm", volume: 90, pitch: 100, pan: 0 }],
  },
  makedCommand: makeCommandPlayBGM({
    name: "bgm",
    volume: 90,
    pitch: 100,
    pan: 0,
  }),
};

const playSe: TestCase<Command_PlaySE> = {
  commandFn: "command250",
  fn: "playSe",
  command: {
    code: 250,
    indent: 0,
    parameters: [{ name: "se", volume: 44, pitch: 55, pan: 66 }],
  },
  makedCommand: makeCommandPlaySE({
    name: "se",
    volume: 44,
    pitch: 55,
    pan: 66,
  }),
};

const playBgs: TestCase<Command_PlayBGS> = {
  commandFn: "command245",
  fn: "playBgs",
  command: {
    code: 245,
    indent: 0,
    parameters: [{ name: "bgs", volume: 77, pitch: 88, pan: 99 }],
  },
  makedCommand: makeCommandPlayBGS({
    name: "bgs",
    volume: 77,
    pitch: 88,
    pan: 99,
  }),
};

const playMe: TestCase<Command_PlayME> = {
  commandFn: "command249",
  fn: "playMe",
  command: {
    code: 249,
    indent: 0,
    parameters: [{ name: "me", volume: 11, pitch: 22, pan: 33 }],
  },
  makedCommand: makeCommandPlayME({
    name: "me",
    volume: 11,
    pitch: 22,
    pan: 33,
  }),
};

const fadeOutBgm: TestCase<Command_FadeOutBGM> = {
  commandFn: "command242",
  fn: "fadeOutBgm",
  command: {
    code: 242,
    indent: 0,
    parameters: [120],
  },
  makedCommand: makeCommandFadeOutBGM({ duration: 120 }),
};

const fadeOutBgs: TestCase<Command_FadeOutBGS> = {
  commandFn: "command246",
  fn: "fadeOutBgs",
  command: {
    code: 246,
    indent: 0,
    parameters: [150],
  },
  makedCommand: makeCommandFadeOutBGS({ duration: 150 }),
};

[stopSe, playBgm, playSe, playBgs, playMe, fadeOutBgm, fadeOutBgs].forEach(
  (c) => runTestCase<EventCommand>(c)
);
