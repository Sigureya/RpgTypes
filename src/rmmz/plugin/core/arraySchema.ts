import type {
  PluginStructSchemaArray,
  PluginParam,
  PluginSchemaArray,
} from "./arraySchemaTypes";
import type { PrimitiveStringParam, PrimitiveParam } from "./paramUnion";
import type { FileParam } from "./primitiveParams";
import { isScalarParam, isNumberValueParam } from "./typeTest";

export const filterStructs = (
  s: ReadonlyArray<PluginStructSchemaArray>,
  fn: (param: PluginParam) => boolean
): PluginStructSchemaArray[] => {
  return [];
};

const xxx = (
  schema: PluginSchemaArray,
  fn: (param: PluginParam) => boolean
) => {
  const structs = schema.structs.map((struct) => sss(struct, fn));
  return {
    commands: schema.params.filter(fn),
    structs: schema.structs.map((struct) => sss(struct, fn)),
    params: schema.params.filter(fn),
  };
};

const attrXX = (
  param: PluginParam
): param is PluginParam<PrimitiveStringParam | FileParam> => {
  const attr: PrimitiveParam = param.attr;
  return isScalarParam(attr) && isNumberValueParam(attr);
};

const sss = (
  struct: PluginStructSchemaArray,
  fn: (param: PluginParam) => boolean
) => {
  return {
    struct: struct.struct,
    params: struct.params.filter(fn),
  } satisfies PluginStructSchemaArray;
};
