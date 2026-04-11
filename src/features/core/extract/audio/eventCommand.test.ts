import { describe, expect, test, vi } from "vitest";
import type { AudioFileParams } from "@RpgTypes/libs";
import { PLAY_BGM, PLAY_BGS, PLAY_SE, PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";
import {
  makeCommandFadeOutBGM,
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlaySE,
  makeCommandPluginCommandMZ,
  makeCommandSetupChoice,
} from "@RpgTypes/rmmz/eventCommand";
import { extractAudioCommands } from "./eventCommand";
import type {
  AudioCommandParameter,
  AudioPluginCommandParameter,
} from "./types";

describe("extractAudioCommands", () => {
  test("extracts audio command parameters", () => {
    const bgm: AudioFileParams = {
      name: "town",
      volume: 90,
      pitch: 110,
      pan: -10,
    };
    const se: AudioFileParams = {
      name: "coin",
      volume: 80,
      pitch: 120,
      pan: 0,
    };

    const expected: AudioCommandParameter[] = [
      {
        code: PLAY_BGM,
        paramIndex: 0,
        value: bgm,
        directory: "bgm",
      },
      {
        code: PLAY_SE,
        paramIndex: 0,
        value: se,
        directory: "se",
      },
    ];

    const result = extractAudioCommands([
      makeCommandPlayBGM(bgm),
      makeCommandPlaySE(se),
    ]);

    expect(result).toEqual(expected);
  });

  test("ignores non-target commands", () => {
    const audio: AudioFileParams = {
      name: "forest",
      volume: 70,
      pitch: 100,
      pan: 20,
    };
    const audioCommand = makeCommandPlayBGS(audio);
    const fn = vi.fn();
    const expected: AudioCommandParameter[] = [
      {
        code: PLAY_BGS,
        paramIndex: 0,
        value: audio,
        directory: "bgs",
      },
    ];
    const result = extractAudioCommands(
      [
        makeCommandSetupChoice({ choices: ["yes", "no"] }),
        makeCommandFadeOutBGM({ duration: 60 }),
        audioCommand,
      ],
      fn,
    );
    expect(result).toEqual(expected);
    expect(fn).not.toHaveBeenCalled();
  });

  test("plugin command is ignored by default evaluator", () => {
    const command = makeCommandPluginCommandMZ({
      pluginName: "AudioPlugin",
      commandName: "Play",
      args: { file: "Battle1" },
    });

    const result = extractAudioCommands([command]);
    expect(result).toEqual([]);
  });
  describe("", () => {
    const audio: AudioFileParams = {
      name: "field",
      volume: 80,
      pitch: 100,
      pan: 0,
    };
    const command = makeCommandPluginCommandMZ({
      pluginName: "AudioPlugin",
      commandName: "Play",
      commandTitle: "play audio",
      args: { file: "Battle1" },
    });
    const bgs = makeCommandPlayBGS(audio);
    const pluginResult: AudioPluginCommandParameter[] = [
      {
        code: PLUGIN_COMMAND_MZ,
        paramIndex: 3,
        value: "Battle1",
        pluginName: "AudioPlugin",
        commandName: "Play",
        argName: "file",
        argTitle: "File",
        directory: "bgm",
      },
    ];
    test("", () => {
      const evaluator = vi.fn(() => pluginResult);
      extractAudioCommands([bgs, command], evaluator);
      expect(evaluator).toHaveBeenCalledOnce();
      expect(evaluator).toHaveBeenCalledWith(command);
    });
    test("uses plugin command evaluator and preserves order", () => {
      const expected: typeof result = [
        {
          code: bgs.code,
          paramIndex: 0,
          value: audio,
          directory: "bgs",
        },
        ...pluginResult,
      ];

      const result = extractAudioCommands([bgs, command], () => pluginResult);
      expect(result).toEqual(expected);
    });
  });
});
