import type { AudioFileParams } from "@RpgTypes/utils";
import { describe, test, expect } from "vitest";
import type {
  Command2_PlayBGM,
  Command2_PlayBGS,
  Command2_PlayME,
  Command2_PlaySE,
  Command2_ChangeBattleBGM,
  Command2_ChangeVictoryME,
  Command2_ChangeDefeatME,
} from "./commands";
import {
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlayME,
  makeCommandPlaySE,
  makeCommandChangeBattleBGM,
  makeCommandChangeDefeatME,
  makeCommandChangeVictoryME,
} from "./commands/audio/make";
import { isCommandAudio } from "./validate";
import {
  isCommandChangeBattleBgm,
  isCommandChangeDefeatMe,
  isCommandChangeVictoryMe,
  isCommandPlayBgm,
  isCommandPlayBgs,
  isCommandPlayMe,
  isCommandPlaySe,
} from "./validateAudio";

describe("isCommandAudio", () => {
  const MockAudio: AudioFileParams = {
    name: "test",
    volume: 100,
    pitch: 100,
    pan: 0,
  };
  test("Play BGM", () => {
    const command: Command2_PlayBGM = makeCommandPlayBGM(MockAudio);

    expect(isCommandAudio(command)).toBe(true);
    expect(isCommandPlayBgm(command)).toBe(true);
  });
  test("Play BGS", () => {
    const command: Command2_PlayBGS = makeCommandPlayBGS(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
    expect(isCommandPlayBgs(command)).toBe(true);
  });
  test("Play ME", () => {
    const command: Command2_PlayME = makeCommandPlayME(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
    expect(isCommandPlayMe(command)).toBe(true);
  });
  test("Play SE", () => {
    const command: Command2_PlaySE = makeCommandPlaySE(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
    expect(isCommandPlaySe(command)).toBe(true);
  });
  test("Change Battle BGM", () => {
    const cmd: Command2_ChangeBattleBGM = makeCommandChangeBattleBGM(MockAudio);
    expect(isCommandAudio(cmd)).toBe(true);
    expect(isCommandChangeBattleBgm(cmd)).toBe(true);
  });
  test("Change Victory ME", () => {
    const cmd: Command2_ChangeVictoryME = makeCommandChangeVictoryME(MockAudio);
    expect(isCommandAudio(cmd)).toBe(true);
    expect(isCommandChangeVictoryMe(cmd)).toBe(true);
  });
  test("Change Defeat ME", () => {
    const cmd: Command2_ChangeDefeatME = makeCommandChangeDefeatME(MockAudio);
    expect(isCommandAudio(cmd)).toBe(true);
    expect(isCommandChangeDefeatMe(cmd)).toBe(true);
  });
});
