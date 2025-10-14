import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";
import { createStructMap3 } from "@RpgTypes/rmmz/plugin/gen";
import {
  structParamPath,
  structArrayParamPath,
  scalaParamPath,
  arrayParamPath,
} from "./param";

export type YYY = ReturnType<typeof structYYY>;

export const structYYY = (
  structSchema: PluginStructSchemaArray,
  parent: string
) => {
  return {
    struct: structSchema.struct,
    params: createStructMap3(structSchema, {
      struct: (struct, name) => {
        return structParamPath({ attr: struct, name: name }, parent);
      },
      structArray: (structArray, name) => {
        return structArrayParamPath({ attr: structArray, name }, parent);
      },
      scala: (param, name) => scalaParamPath({ attr: param, name }, parent),
      array: (param, name) => arrayParamPath({ attr: param, name }, parent),
    }),
  };
};
