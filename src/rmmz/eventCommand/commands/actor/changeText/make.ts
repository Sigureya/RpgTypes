import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
} from "@RpgTypes/libs/eventCommand";
import type {
  ParamObject_ChangeActorName,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
  ParamObject_ChangeActorNickName,
  ParamObject_ChangeActorProfile,
} from "./types";

export const makeCommandChangeActorName = (
  param: ParamObject_ChangeActorName,
  indent: number = 0,
): Command_ChangeActorName => ({
  code: CHANGE_NAME,
  parameters: [param.actorId, param.name],
  indent,
});

export const makeCommandChangeActorNickName = (
  param: ParamObject_ChangeActorNickName,
  indent: number = 0,
): Command_ChangeActorNickName => ({
  code: CHANGE_NICKNAME,
  parameters: [param.actorId, param.nickname],
  indent,
});

export const makeCommandChangeActorProfile = (
  param: ParamObject_ChangeActorProfile,
  indent: number = 0,
): Command_ChangeActorProfile => ({
  code: CHANGE_PROFILE,
  parameters: [param.actorId, param.profile],
  indent,
});
