import { describe, test, expect } from "vitest";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
} from "@RpgTypes/rmmz/rpg";
import {
  makeCommandChangeActorName,
  makeCommandChangeActorNickName,
  makeCommandChangeActorProfile,
} from "./make";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  ParamObject_ChangeActorName,
  ParamObject_ChangeActorNickName,
  ParamObject_ChangeActorProfile,
} from "./types";
import type { Command_ChangeActorProfile } from "./types";

describe("makeCommandChangeActorName", () => {
  test("should create a command to change actor name", () => {
    const param: ParamObject_ChangeActorName = { actorId: 1, name: "New Name" };
    const expected: Command_ChangeActorName = {
      code: CHANGE_NAME,
      parameters: [1, "New Name"],
      indent: 2,
    };
    const result: Command_ChangeActorName = makeCommandChangeActorName(
      param,
      2,
    );
    expect(result).toEqual(expected);
  });
});

describe("makeCommandChangeActorNickName", () => {
  test("should create a command to change actor nickname", () => {
    const param: ParamObject_ChangeActorNickName = {
      actorId: 7,
      nickname: "New Nickname",
    };
    const expected: Command_ChangeActorNickName = {
      code: CHANGE_NICKNAME,
      parameters: [7, "New Nickname"],
      indent: 3,
    };
    const result = makeCommandChangeActorNickName(param, 3);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandChangeActorProfile", () => {
  test("should create a command to change actor profile", () => {
    const param: ParamObject_ChangeActorProfile = {
      actorId: 5,
      profile: "New Profile Text",
    };
    const expected: Command_ChangeActorProfile = {
      code: CHANGE_PROFILE,
      parameters: [5, "New Profile Text"],
      indent: 1,
    };
    const result = makeCommandChangeActorProfile(param, 1);
    expect(result).toEqual(expected);
  });
});
