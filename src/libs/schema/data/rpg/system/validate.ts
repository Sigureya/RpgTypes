import Ajv from "ajv";
import { SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./schema";
import type { System_BoolanOptions } from "./system";

const ajv = new Ajv();
const bb = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
export const isSystemBooleanOptions = (
  data: object
): data is System_BoolanOptions => {
  return bb(data);
};
