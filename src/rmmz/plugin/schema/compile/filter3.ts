import type { PluginParamGroups } from "./filter2Type2";
import { filterParams } from "./filterParamArray";
import type {
  PrimitiveParam,
  ArrayParam,
  StructArrayRefParam,
  StructRefParam,
  ParamKinds,
  PrimitiveStringParam,
} from "./kinds";
import type {
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
  XXX,
} from "./kinds/core/types";
import { isArrayParam } from "./kinds/isArray";

// export const filter4 = <U extends PrimitiveParam>(
//   plugin: PluginSchemaArray<PrimitiveParam>,
//   fn: (param: PrimitiveParam) => param is U
// ) => {
//   const structs = filterStructs(plugin.structs, fn);
//   const structsSet: ReadonlySet<string> = new Set(
//     structs.map((schema) => schema.struct)
//   );

//   const params = filterParams(plugin.params, structsSet, fn);
//   return { params, structs };
// };

// export const filterStructs = <T>(
//   structs: ReadonlyArray<PluginStructSchemaArray<T>>,
//   fn: (param: PluginParam) => boolean
// ) => {
//   return structs.filter((schema) => schema.params.some((p) => fn(p)));
// };

export const filterStructsEx = <T extends PluginParam>(
  structs: ReadonlyArray<PluginStructSchemaArray>,
  fn: (param: PluginParam) => param is T
): XXX<T>[] => {
  return structs.reduce((acc, schema): XXX<T>[] => {
    const filtered = ss2(schema, fn);
    return filtered.params.length > 0 ? [...acc, filtered] : acc;
  }, []);
};

const ss2 = <T extends PluginParam>(
  strcutSchema: PluginStructSchemaArray,
  fn: (schema: PluginParam<PrimitiveParam>) => schema is T
): XXX<T> =>
  ({
    struct: strcutSchema.struct,
    params: strcutSchema.params.filter((p) => fn(p)),
  } satisfies PluginStructSchemaArray);
