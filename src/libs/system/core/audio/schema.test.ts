import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_AUDIOFILES } from "./schema";
import type { System_AudioFiles } from "./types";
const ajv = new Ajv();

const mockAudioFIles: System_AudioFiles = {
  battleBgm: { name: "battle.mp3", volume: 80, pitch: 100, pan: 0 },
  victoryMe: { name: "victory.mp3", volume: 90, pitch: 100, pan: 0 },
  gameoverMe: { name: "gameover.mp3", volume: 70, pitch: 100, pan: 0 },
  titleBgm: { name: "title.mp3", volume: 100, pitch: 100, pan: 0 },
  defeatMe: { name: "defeat.mp3", volume: 60, pitch: 100, pan: 0 },
};

describe("SCHEMA_SYSTEM_AUDIOFILES", () => {
  const validate = ajv.compile(SCHEMA_SYSTEM_AUDIOFILES);
  test("should validate a valid audio files object", () => {
    const valid = validate(mockAudioFIles);
    expect(valid).toBe(true);
  });
});
