import type {
  Command_ChangeClaass,
  ParamObject_ChangeClass,
  Command_ChangeEquip,
  ParamObject_ChangeEquip,
  Command_ChangeActorImages,
  ParamObject_ChangeActorImages,
} from "./types";

export const makeCommandChangeClass = (
  param: ParamObject_ChangeClass,
  indent: number = 0,
): Command_ChangeClaass => ({
  code: 321,
  parameters: [param.actorId, param.classId, param.keepExp],
  indent,
});

export const makeCommandChangeEquip = (
  param: ParamObject_ChangeEquip,
  indent: number = 0,
): Command_ChangeEquip => ({
  code: 319,
  parameters: [param.actorId, param.equipType, param.equipId],
  indent,
});
export const makeCommandChangeActorImages = (
  {
    actorId = 1,
    faceIndex = 0,
    faceName = "",
    characterIndex = 0,
    characterName = "",
    battlerName = "",
  }: Partial<ParamObject_ChangeActorImages> = {},
  indent: number = 0,
): Command_ChangeActorImages => {
  return {
    code: 322,
    indent: indent,
    parameters: [
      actorId,
      characterName,
      characterIndex,
      faceName,
      faceIndex,
      battlerName,
    ],
  };
};
