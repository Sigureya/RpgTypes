import { NAME_INPUT_PROCESSING } from "@RpgTypes/libs/eventCommand";
import type {
  Command_NameInputProcessing,
  ParamObject_NameInputProcessing,
} from "./types";

export const makeCommandNameInputProcessing = (
  parameters: ParamObject_NameInputProcessing,
  indent: number = 0,
): Command_NameInputProcessing => ({
  code: NAME_INPUT_PROCESSING,
  indent,
  parameters: [parameters.actorId, parameters.maxLength],
});
