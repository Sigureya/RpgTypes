import type {
  Command_ShowChoices,
  CommandUnion_AnyAudio,
} from "@RpgTypes/rmmz";
import validatePlayAudio from "./audio/play/playAudioValidate";
import validateChoice from "./message/choice/choiceValidate";

export const isCommandChoice = (
  command: unknown,
): command is Command_ShowChoices => {
  return validateChoice(command);
};
export const isCommandAudio = (
  data: unknown,
): data is CommandUnion_AnyAudio => {
  return validatePlayAudio(data);
};
