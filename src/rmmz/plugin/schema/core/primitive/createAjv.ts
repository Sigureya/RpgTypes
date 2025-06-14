import Ajv from "ajv";
import { metaSchemaBooleanRmmzParam } from "./boolean";
import {
  X_RMMZ_PARAM_SHARED,
  X_RMMZ_PARAM_NUMBER,
  X_RMMZ_PARAM_BOOLEAN,
} from "./keyConstants";
import { metaSchemaSharedParam } from "./metaTextField";
import { metaSchemaNumberRmmzParam } from "./numbers";

export const createAjv = () => {
  return new Ajv({
    strict: true,
    keywords: [
      {
        keyword: X_RMMZ_PARAM_SHARED,
        metaSchema: metaSchemaSharedParam(),
      },
      {
        keyword: X_RMMZ_PARAM_NUMBER,
        metaSchema: metaSchemaNumberRmmzParam(),
      },
      {
        keyword: X_RMMZ_PARAM_BOOLEAN,
        metaSchema: metaSchemaBooleanRmmzParam(),
      },
    ],
  });
};
