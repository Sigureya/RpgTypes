import { describe, test, expect, vi } from "vitest";
import type {
  Data_CommonEvent,
  Data_Troop,
  Data_Actor,
  Data_Map,
} from "@RpgTypes/rmmz";
import {
  makeMapDataFromSingleEvent,
  makeCommandChangeActorName,
  makeCommonEventData,
  makeCommandChangeActorNickName,
  makeTroopData,
  makeBattleEventPage,
  makeCommandChangeActorProfile,
  makeActorData,
} from "@RpgTypes/rmmz";
import {
  extractActorTexts,
  createActorTextDictionary,
} from "./extractActorText";

const MOCK_NAME = "name";
const MOCK_NICKNAME = "nickname";
const MOCK_PROFILE = "profile";
const MOCK_NAME_MAP = "name in map event";
const MOCK_NICKNAME_COMMON = "nickname in common event";
const MOCK_PROFILE_TROOP = "profile in troop event";

const mockMap: Data_Map = makeMapDataFromSingleEvent([
  makeCommandChangeActorName({ name: MOCK_NAME_MAP, actorId: 1 }),
]);

const mockCommonEvent: Data_CommonEvent = makeCommonEventData({
  list: [
    makeCommandChangeActorNickName({
      nickname: MOCK_NICKNAME_COMMON,
      actorId: 3,
    }),
  ],
});

const mockTroop: Data_Troop = makeTroopData({
  pages: [
    makeBattleEventPage({
      list: [
        makeCommandChangeActorProfile({
          profile: MOCK_PROFILE_TROOP,
          actorId: 4,
        }),
      ],
    }),
  ],
});

const mockActor: Data_Actor = makeActorData({
  name: MOCK_NAME,
  nickname: MOCK_NICKNAME,
  profile: MOCK_PROFILE,
});

describe("extractActorTexts", () => {
  test("should extract actor name, nickname, profile", () => {
    const result: Set<string> = extractActorTexts(
      [mockActor],
      [mockCommonEvent],
      [mockTroop],
      [mockMap],
    );
    const expected = new Set([
      MOCK_NAME,
      MOCK_NICKNAME,
      MOCK_PROFILE,
      MOCK_NAME_MAP,
      MOCK_NICKNAME_COMMON,
      MOCK_PROFILE_TROOP,
    ]);
    expect(result).toEqual(expected);
  });
});

describe("createActorTextDictionary", () => {
  test("should create dictionary with both original and translated texts", () => {
    const mockHashFn = (text: string): string => {
      return `hash_${text}`;
    };

    const mockTranslateFn = (text: string): string => {
      return `[JP] ${text}`;
    };

    const result = createActorTextDictionary(
      [mockActor],
      [mockCommonEvent],
      [mockTroop],
      [mockMap],
      {
        hashText: mockHashFn,
        newText: mockTranslateFn,
      },
    );

    // Extract expected texts
    const allTexts = new Set([
      MOCK_NAME,
      MOCK_NICKNAME,
      MOCK_PROFILE,
      MOCK_NAME_MAP,
      MOCK_NICKNAME_COMMON,
      MOCK_PROFILE_TROOP,
    ]);

    // Should have both original and translated entries
    expect(result).toHaveLength(allTexts.size * 2);

    // Check original texts are in the result
    allTexts.forEach((text) => {
      const originalEntry = result.find(
        (entry) => entry.value === mockHashFn(text) && entry.key === text,
      );
      expect(originalEntry).toBeDefined();
    });
  });

  test("should call hash and newText handlers correctly", () => {
    const mockHashFn = vi.fn((text: string): string => {
      return `hash_${text}`;
    });

    const mockTranslateFn = vi.fn((text: string): string => {
      return `translated_${text}`;
    });

    const allTexts = new Set([MOCK_NAME, MOCK_NICKNAME, MOCK_PROFILE]);

    createActorTextDictionary([mockActor], [], [], [], {
      hashText: mockHashFn,
      newText: mockTranslateFn,
    });

    // hashText should be called for each original and translated text
    expect(mockHashFn).toHaveBeenCalledTimes(allTexts.size);

    // newText should be called for each original text
    expect(mockTranslateFn).toHaveBeenCalledTimes(allTexts.size);

    // Verify all original texts were hashed
    allTexts.forEach((text) => {
      expect(mockHashFn).toHaveBeenCalledWith(text);
    });
  });

  test("should handle empty input arrays", () => {
    const mockHashFn = (text: string): string => `hash_${text}`;
    const mockTranslateFn = (text: string): string => `[JP] ${text}`;

    const result = createActorTextDictionary([], [], [], [], {
      hashText: mockHashFn,
      newText: mockTranslateFn,
    });

    expect(result).toEqual([]);
  });

  test("should preserve order: base texts before translated texts", () => {
    const mockHashFn = (text: string): string => `hash_${text}`;
    const mockTranslateFn = (text: string): string => `[JP] ${text}`;

    const result = createActorTextDictionary([mockActor], [], [], [], {
      hashText: mockHashFn,
      newText: mockTranslateFn,
    });

    // Split into base and translated sections
    const allTexts = [MOCK_NAME, MOCK_NICKNAME, MOCK_PROFILE];
    const baseTexts = result.slice(0, allTexts.length);
    const translatedTexts = result.slice(allTexts.length);

    // All base texts should come first
    baseTexts.forEach((entry) => {
      expect(entry.key).not.toMatch(/^\[JP\]/);
    });

    // All translated texts should come last
    translatedTexts.forEach((entry) => {
      expect(entry.key).toMatch(/^\[JP\]/);
    });
  });
  test("should not include entries for empty or whitespace-only texts and should not call handlers for them", () => {
    const mockHashFn = vi.fn((text: string): string => `hash_${text}`);
    const mockTranslateFn = vi.fn((text: string): string => `[JP] ${text}`);

    const mockActor = makeActorData({
      name: "",
      nickname: "  ",
      profile: "\n",
    });

    const result = createActorTextDictionary([mockActor], [], [], [], {
      hashText: mockHashFn,
      newText: mockTranslateFn,
    });
    expect(result).toEqual([]);
    expect(mockHashFn).not.toHaveBeenCalled();
    expect(mockTranslateFn).not.toHaveBeenCalled();
  });
});
