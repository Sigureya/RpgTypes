import { describe, test, expect } from "vitest";
import type {
  Data_Map,
  EventCommand,
  Data_CommonEvent,
  Data_Troop,
  Data_Actor,
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
import { extractActorTexts } from "./extractActorText";

const MOCK_NAME = "name";
const MOCK_NICKNAME = "nickname";
const MOCK_PROFILE = "profile";
const MOCK_NAME_MAP = "name in map event";
const MOCK_NICKNAME_COMMON = "nickname in common event";
const MOCK_PROFILE_TROOP = "profile in troop event";

const mockMap: Data_Map<EventCommand> = makeMapDataFromSingleEvent([
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
      [mockMap],
      [mockCommonEvent],
      [mockTroop],
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
