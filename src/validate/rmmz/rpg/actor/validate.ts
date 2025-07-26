import type { Data_Actor } from "@RpgTypes/rpg";
import validate from "./actorValidate";

export const isDataActor = (data: unknown): data is Data_Actor => {
  return validate(data);
};
