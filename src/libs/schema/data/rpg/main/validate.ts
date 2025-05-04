import Ajv from "ajv";
import type { Data_Actor } from "./traitContainers";
import { SCHEMA_DATA_ACTOR } from "./traitContainers";
const ajv = new Ajv();

const actor = ajv.compile(SCHEMA_DATA_ACTOR);

export const isDataActor = (data: unknown): data is Data_Actor => {
  return actor(data);
};
