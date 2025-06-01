import { describe, test, expect } from "vitest";
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
import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_PROFILE } from "src/rpg";

describe("makeCommandChangeActorName", () => {
  test("should create a command to change actor name", () => {
    const param: ParamObject_ChangeActorName = { actorId: 1, name: "New Name" };
    const indent = 2;
    const expected: Command_ChangeActorName = {
      code: CHANGE_NAME,
      parameters: [param.actorId, param.name],
      indent,
    };
    expect(makeCommandChangeActorName(param, indent)).toEqual(expected);
  });
});

describe("makeCommandChangeActorNickName", () => {
  test("should create a command to change actor nickname", () => {
    const param: ParamObject_ChangeActorNickName = {
      actorId: 2,
      nickname: "New Nickname",
    };
    const indent = 3;
    const expected: Command_ChangeActorNickName = {
      code: CHANGE_NICKNAME,
      parameters: [param.actorId, param.nickname],
      indent,
    };
    expect(makeCommandChangeActorNickName(param, indent)).toEqual(expected);
  });
});

describe("makeCommandChangeActorProfile", () => {
  test("should create a command to change actor profile", () => {
    const param: ParamObject_ChangeActorProfile = {
      actorId: 3,
      profile: "New Profile",
    };
    const indent = 4;
    const expected: Command_ChangeActorProfile = {
      code: CHANGE_PROFILE,
      parameters: [param.actorId, param.profile],
      indent,
    };
    expect(makeCommandChangeActorProfile(param, indent)).toEqual(expected);
  });
});
