import type { Options, Vocabulary } from "ajv";
import Ajv from "ajv";
import { metaSchemaBooleanRmmzParam } from "./boolean";
import {
  X_RMMZ_PARAM_SHARED,
  X_RMMZ_PARAM_NUMBER,
  X_RMMZ_PARAM_BOOLEAN,
  X_RMMZ_PARAM_DATA_INDEX,
} from "./keyConstants";
import { metaSchemaSharedParam } from "./metaTextField";
import { metaSchemaNumberRmmzParam } from "./numbers";
import { metaSchemaDataIdParam } from "./rpgDataId";

export const createAjv = (options?: Options) => {
  return new Ajv({
    ...options,
    strict: true,
    keywords: keywords(),
  });
};

const keywords = (): Vocabulary => [
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
  {
    keyword: X_RMMZ_PARAM_DATA_INDEX,
    metaSchema: metaSchemaDataIdParam(),
  },
];
