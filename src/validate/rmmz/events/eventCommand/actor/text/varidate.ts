import type {
  Command_ChangeActorName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz";
import validate from "./chageActorTextValidate";

export const isActorTextCommand = (
  data: unknown
): data is
  | Command_ChangeActorName
  | Command_ChangeActorProfile
  | Command_ChangeActorName => {
  return validate(data);
};
