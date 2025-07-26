import type { CommandUnion_AnyAudio } from "src/rmmz/eventCommand";
import validateAudioCommand from "./playAudioValidate";

export const isAudioCommand = (
  data: unknown
): data is CommandUnion_AnyAudio => {
  return validateAudioCommand(data);
};
