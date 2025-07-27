import type {
  Command_ChangeActorImages,
  ParamObject_ChangeActorImages,
} from "./types";

export const makeCommandChangeActorImages = (
  {
    actorId = 1,
    faceIndex = 0,
    faceName = "",
    characterIndex = 0,
    characterName = "",
    battlerName = "",
  }: Partial<ParamObject_ChangeActorImages> = {},
  indent: number = 0
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
