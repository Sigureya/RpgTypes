import validate from "./actorValidate";
import type { Data_Actor } from "./types";

export const isDataActor2 = (data: unknown): data is Data_Actor => {
  return validate(data);
};
