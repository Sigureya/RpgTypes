import { describe, expect, test } from "vitest";
import { STOP_SE } from "@RpgTypes/libs/eventCommand";
import { makeCommandChangeActorName } from "./actor";
import type { CommandUnion_AnyAudio } from "./audio";
import {
  makeCommandChangeBattleBGM,
  makeCommandChangeDefeatME,
  makeCommandChangeVictoryME,
  makeCommandFadeOutBGM,
  makeCommandFadeOutBGS,
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlayME,
  makeCommandPlaySE,
  makeCommandResumeBGM,
  makeCommandSaveBGM,
} from "./audio";
import { isCommandAnyAudio } from "./isAnyAudio";
import type { EventCommand } from "./union";

interface TestCase {
  name: string;
  command: CommandUnion_AnyAudio;
}

interface TestCaseFalse {
  name: string;
  command: Exclude<EventCommand, CommandUnion_AnyAudio>;
}

const runTest = ({ name, command }: TestCase) => {
  test(name, () => {
    expect(command).toSatisfy(isCommandAnyAudio);
  });
};

const runTestFalse = ({ name, command }: TestCaseFalse) => {
  test(name, () => {
    expect(command).not.toSatisfy(isCommandAnyAudio);
  });
};

const testCases: TestCase[] = [
  {
    name: "play BGM",
    command: makeCommandPlayBGM({
      name: "bgm_test",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
  {
    name: "play BGS",
    command: makeCommandPlayBGS({
      name: "bgs_test",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
  {
    name: "play ME",
    command: makeCommandPlayME({
      name: "me_test",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
  {
    name: "play SE",
    command: makeCommandPlaySE({
      name: "se_test",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
  {
    name: "change battle BGM",
    command: makeCommandChangeBattleBGM({
      name: "battle_bgm",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
  {
    name: "change victory ME",
    command: makeCommandChangeVictoryME({
      name: "victory_me",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
  {
    name: "change defeat ME",
    command: makeCommandChangeDefeatME({
      name: "defeat_me",
      volume: 80,
      pitch: 100,
      pan: 0,
    }),
  },
];

const testCasesFalse: TestCaseFalse[] = [
  {
    name: "fade out BGM",
    command: makeCommandFadeOutBGM({ duration: 30 }),
  },
  {
    name: "save BGM",
    command: makeCommandSaveBGM(),
  },
  {
    name: "resume BGM",
    command: makeCommandResumeBGM(),
  },
  {
    name: "fade out BGS",
    command: makeCommandFadeOutBGS({ duration: 30 }),
  },
  {
    name: "stop SE",
    command: {
      code: STOP_SE,
      indent: 0,
      parameters: [],
    },
  },

  {
    name: "non-audio command",
    command: makeCommandChangeActorName({ actorId: 1, name: "Hero" }),
  },
];

describe("isCommandAnyAudio", () => {
  describe("true for audio commands", () => {
    testCases.forEach(runTest);
  });
  describe("false for non-audio commands", () => {
    testCasesFalse.forEach(runTestFalse);
  });
});
