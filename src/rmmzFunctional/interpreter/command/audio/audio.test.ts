import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_FadeOutBGM,
  Command_FadeOutBGS,
  Command_PlayBGM,
  Command_PlayBGS,
  Command_PlayME,
  Command_PlaySE,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_AudioManager } from "@RpgTypes/rmmzRuntime";
import {
  commandFadeOutBgm,
  commandFadeOutBgs,
  commandPlayBgm,
  commandPlayBgs,
  commandPlayMe,
  commandPlaySe,
} from "./audio";

type MockAudio = MockedObject<Rmmz_AudioManager>;

const createAudio = (): MockAudio => ({
  playBgm: vi.fn(),
  playBgs: vi.fn(),
  playMe: vi.fn(),
  playSe: vi.fn(),
  fadeOutBgm: vi.fn(),
  fadeOutBgs: vi.fn(),
  fadeInBgm: vi.fn(),
  fadeInBgs: vi.fn(),
  stopBgm: vi.fn(),
  stopBgs: vi.fn(),
  stopSe: vi.fn(),
  playStaticSe: vi.fn(),
});

describe("audio command execution", () => {
  test("play bgm delegates to audio manager", () => {
    const audio = createAudio();
    const command: Command_PlayBGM = {
      code: 241,
      indent: 0,
      parameters: [{ name: "bgm1", volume: 90, pitch: 100, pan: 0 }],
    };

    commandPlayBgm(command, audio);

    expect(audio.playBgm).toHaveBeenCalledWith(command.parameters[0]);
  });

  test("play bgs delegates to audio manager", () => {
    const audio = createAudio();
    const command: Command_PlayBGS = {
      code: 245,
      indent: 0,
      parameters: [{ name: "bgs1", volume: 80, pitch: 100, pan: 0 }],
    };

    commandPlayBgs(command, audio);

    expect(audio.playBgs).toHaveBeenCalledWith(command.parameters[0]);
  });

  test("play me delegates to audio manager", () => {
    const audio = createAudio();
    const command: Command_PlayME = {
      code: 249,
      indent: 0,
      parameters: [{ name: "me1", volume: 85, pitch: 100, pan: 0 }],
    };

    commandPlayMe(command, audio);

    expect(audio.playMe).toHaveBeenCalledWith(command.parameters[0]);
  });

  test("play se delegates to audio manager", () => {
    const audio = createAudio();
    const command: Command_PlaySE = {
      code: 250,
      indent: 0,
      parameters: [{ name: "se1", volume: 70, pitch: 100, pan: 0 }],
    };

    commandPlaySe(command, audio);

    expect(audio.playSe).toHaveBeenCalledWith(command.parameters[0]);
  });

  test("fade out bgm delegates to audio manager", () => {
    const audio = createAudio();
    const command: Command_FadeOutBGM = {
      code: 242,
      indent: 0,
      parameters: [120],
    };

    commandFadeOutBgm(command, audio);

    expect(audio.fadeOutBgm).toHaveBeenCalledWith(120);
  });

  test("fade out bgs delegates to audio manager", () => {
    const audio = createAudio();
    const command: Command_FadeOutBGS = {
      code: 246,
      indent: 0,
      parameters: [180],
    };

    commandFadeOutBgs(command, audio);

    expect(audio.fadeOutBgs).toHaveBeenCalledWith(180);
  });
});
