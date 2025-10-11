import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";
import {
  isArrayParam,
  isStructArrayParam,
  isStructParam,
} from "@RpgTypes/rmmz/plugin";
import { createStructMap3 } from "@RpgTypes/rmmz/plugin/gen";
import {
  structParamPath,
  structArrayParamPath,
  scalaParamPath,
  arrayParamPath,
} from "./param";
import type { ParamJSONPath, ParamJSONPathSturct } from "./types";

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

export const structXXX = (
  structSchema: PluginStructSchemaArray,
  parent: string
): ParamJSONPathSturct => {
  const params: ParamJSONPath[] = structSchema.params.map(({ attr, name }) => {
    if (isStructArrayParam(attr)) {
      return structArrayParamPath({ attr, name }, parent);
    }
    if (isArrayParam(attr)) {
      return arrayParamPath({ attr, name }, parent);
    }
    if (isStructParam(attr)) {
      return structParamPath({ attr, name }, parent);
    }
    return scalaParamPath({ attr, name }, parent);
  });

  return {
    scala: [],
    struct: structSchema.struct,
    params: params,
  };
};
