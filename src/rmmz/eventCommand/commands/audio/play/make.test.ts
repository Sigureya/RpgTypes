import { describe, test, expect } from "vitest";
import {
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  CHANGE_BATTLE_BGM,
  CHANGE_VICTORY_ME,
  CHANGE_DEFEAT_ME,
} from "@RpgTypes/libs/eventCommand";
import {
  makeCommandAudioAny,
  makeCommandChangeBattleBGM,
  makeCommandChangeDefeatME,
  makeCommandChangeVictoryME,
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlayME,
  makeCommandPlaySE,
} from "./make";

describe("makeCommandAudioAny", () => {
  test("should create a command with the correct code and parameters", () => {
    const audio = { name: "test", volume: 90, pitch: 100, pan: 0 };
    const command = makeCommandAudioAny(132, audio, 2);
    expect(command.code).toBe(132);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
    expect(command.indent).toBe(2);
  });
});

describe("makeCommandPlayBGM", () => {
  test("should create a Play BGM command", () => {
    const audio = { name: "bgm_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandPlayBGM(audio, 1);
    expect(command.code).toBe(PLAY_BGM);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});

describe("makeCommandPlayBGS", () => {
  test("should create a Play BGS command", () => {
    const audio = { name: "bgs_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandPlayBGS(audio, 1);
    expect(command.code).toBe(PLAY_BGS);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});

describe("makeCommandPlayME", () => {
  test("should create a Play ME command", () => {
    const audio = { name: "me_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandPlayME(audio, 1);
    expect(command.code).toBe(PLAY_ME);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});

describe("makeCommandPlaySE", () => {
  test("should create a Play SE command", () => {
    const audio = { name: "se_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandPlaySE(audio, 1);
    expect(command.code).toBe(PLAY_SE);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});

describe("makeCommandChangeBattleBGM", () => {
  test("should create a Change Battle BGM command", () => {
    const audio = { name: "battle_bgm_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandChangeBattleBGM(audio, 1);
    expect(command.code).toBe(CHANGE_BATTLE_BGM);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});

describe("makeCommandChangeVictoryME", () => {
  test("should create a Change Victory ME command", () => {
    const audio = { name: "victory_me_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandChangeVictoryME(audio, 1);
    expect(command.code).toBe(CHANGE_VICTORY_ME);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});

describe("makeCommandChangeDefeatME", () => {
  test("should create a Change Defeat ME command", () => {
    const audio = { name: "defeat_me_test", volume: 80, pitch: 100, pan: 0 };
    const command = makeCommandChangeDefeatME(audio, 1);
    expect(command.code).toBe(CHANGE_DEFEAT_ME);
    expect(command.parameters).toEqual([audio]);
    expect(command.parameters[0]).not.toBe(audio);
  });
});
