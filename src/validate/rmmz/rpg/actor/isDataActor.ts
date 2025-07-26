import type { Data_Actor } from "@RpgTypes/rmmz/rpg";
import validate from "./actorValidate";

export const isDataActor = (data: unknown): data is Data_Actor => {
  return validate(data);
};
