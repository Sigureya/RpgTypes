import type {
  Command_ChangeActorName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz";
import validate from "./changeActorTextValidate";

export const isCommandChangeActorText = (
  data: unknown,
): data is
  | Command_ChangeActorName
  | Command_ChangeActorProfile
  | Command_ChangeActorName => {
  return validate(data);
};
