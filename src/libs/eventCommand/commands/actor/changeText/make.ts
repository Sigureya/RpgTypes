import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_PROFILE } from "@RpgTypes/schema";
import type {
  ParamObject_ChangeActorName,
  Command2_ChangeActorName,
  Command2_ChangeActorNickName,
  Command2_ChangeActorProfile,
  ParamObject_ChangeActorNickName,
  ParamObject_ChangeActorProfile,
} from "./types";

export const makeCommandChangeActorName = (
  param: ParamObject_ChangeActorName,
  indent: number = 0
): Command2_ChangeActorName => ({
  code: CHANGE_NAME,
  parameters: [param.actorId, param.name],
  indent,
});

export const makeCommandChangeActorNickName = (
  param: ParamObject_ChangeActorNickName,
  indent: number = 0
): Command2_ChangeActorNickName => ({
  code: CHANGE_NICKNAME,
  parameters: [param.actorId, param.nickname],
  indent,
});

export const makeCommandChangeActorProfile = (
  param: ParamObject_ChangeActorProfile,
  indent: number = 0
): Command2_ChangeActorProfile => ({
  code: CHANGE_PROFILE,
  parameters: [param.actorId, param.profile],
  indent,
});
