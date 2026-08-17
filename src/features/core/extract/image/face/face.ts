import type { Command_ShowMessageHeader, Data_Actor } from "@RpgTypes/rmmz";
import { resolveSpeakerName } from "@RpgTypes/rmmz";
import type { FaceData } from "./types";

export const faceDataFromActor = (actor: Data_Actor): FaceData => {
  return {
    charcterName: actor.name,
    emotionId: 0,
    faceImage: actor.faceName,
    faceIndex: actor.faceIndex,
  };
};

export const faceDataFromMessage = (
  command: Command_ShowMessageHeader,
): FaceData => {
  return {
    charcterName: resolveSpeakerName(command),
    emotionId: 0,
    faceImage: command.parameters[0],
    faceIndex: command.parameters[1],
  };
};
