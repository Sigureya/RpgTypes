import type { Options, Vocabulary } from "ajv";
import Ajv from "ajv";
import { metaSchemaBooleanRmmzParamCore } from "./boolean";
import {
  X_RMMZ_PARAM_SHARED,
  X_RMMZ_PARAM_NUMBER,
  X_RMMZ_PARAM_BOOLEAN,
  X_RMMZ_PARAM_DATA_INDEX,
} from "./keyConstants";
import { metaSchemaSharedParam } from "./metaTextField";
import { metaSchemaNumberRmmzParamCore } from "./numbers";
import { metaSchemaDataIdParamCore } from "./rpgDataId";

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
    metaSchema: metaSchemaNumberRmmzParamCore(),
  },
  {
    keyword: X_RMMZ_PARAM_BOOLEAN,
    metaSchema: metaSchemaBooleanRmmzParamCore(),
  },
  {
    keyword: X_RMMZ_PARAM_DATA_INDEX,
    metaSchema: metaSchemaDataIdParamCore(),
  },
];
