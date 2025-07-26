import { describe, test, expect } from "vitest";
import type {
  Command_ChangeBattleBGM,
  Command_ChangeDefeatME,
  Command_ChangeVictoryME,
  Command_PlayBGM,
  Command_PlayBGS,
  Command_PlayME,
  Command_PlaySE,
} from "src/rmmz/eventCommand";
import {
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlayME,
  makeCommandPlaySE,
  makeCommandChangeBattleBGM,
  makeCommandChangeVictoryME,
  makeCommandChangeDefeatME,
} from "src/rmmz/eventCommand";
import type { AudioFileParams } from "src/utils";
const validate = require("./playAudioValidate.cjs");
const isCommandAudio = (x: unknown): boolean => {
  return validate(x);
};

describe("isCommandAudio", () => {
  const MockAudio: AudioFileParams = {
    name: "test",
    volume: 100,
    pitch: 100,
    pan: 0,
  };
  test("Play BGM", () => {
    const command: Command_PlayBGM = makeCommandPlayBGM(MockAudio);

    expect(isCommandAudio(command)).toBe(true);
  });
  test("Play BGS", () => {
    const command: Command_PlayBGS = makeCommandPlayBGS(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
  test("Play ME", () => {
    const command: Command_PlayME = makeCommandPlayME(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
  test("Play SE", () => {
    const command: Command_PlaySE = makeCommandPlaySE(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
  test("Change Battle BGM", () => {
    const cmd: Command_ChangeBattleBGM = makeCommandChangeBattleBGM(MockAudio);
    expect(isCommandAudio(cmd)).toBe(true);
  });
  test("Change Victory ME", () => {
    const cmd: Command_ChangeVictoryME = makeCommandChangeVictoryME(MockAudio);
    expect(isCommandAudio(cmd)).toBe(true);
  });
  test("Change Defeat ME", () => {
    const cmd: Command_ChangeDefeatME = makeCommandChangeDefeatME(MockAudio);
    expect(isCommandAudio(cmd)).toBe(true);
  });
});
