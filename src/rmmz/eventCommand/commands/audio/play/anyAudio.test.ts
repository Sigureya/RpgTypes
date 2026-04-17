import { describe, test, expect } from "vitest";
import type { AudioFolders } from "@RpgTypes/fileio4";
import {
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  CHANGE_BATTLE_BGM,
  CHANGE_VICTORY_ME,
  CHANGE_DEFEAT_ME,
} from "@RpgTypes/libs/eventCommand";
import { assetDirectoryName } from "./anyAudio";
import type { CommandUnion_AnyAudio } from "./types";

interface TestCase {
  name: string;
  code: CommandUnion_AnyAudio["code"];
  expected: AudioFolders;
}

const testCases: TestCase[] = [
  {
    name: "PLAY_BGM",
    code: PLAY_BGM,
    expected: "bgm",
  },
  {
    name: "PLAY_BGS",
    code: PLAY_BGS,
    expected: "bgs",
  },
  {
    name: "PLAY_ME",
    code: PLAY_ME,
    expected: "me",
  },
  {
    name: "PLAY_SE",
    code: PLAY_SE,
    expected: "se",
  },
  {
    name: "CHANGE_BATTLE_BGM",
    code: CHANGE_BATTLE_BGM,
    expected: "bgm",
  },
  {
    name: "CHANGE_VICTORY_ME",
    code: CHANGE_VICTORY_ME,
    expected: "me",
  },
  {
    name: "CHANGE_DEFEAT_ME",
    code: CHANGE_DEFEAT_ME,
    expected: "me",
  },
];

describe("assetDirectoryName", () => {
  testCases.forEach(({ name, code, expected }) => {
    test(`code: ${code} ${name} shold return ${expected}"`, () => {
      expect(assetDirectoryName(code)).toBe(expected);
    });
  });
});
