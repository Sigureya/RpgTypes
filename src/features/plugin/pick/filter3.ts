import type { PluginParamGroups } from "./filter2Type2";

export const isEmptyParamGroup = (gropu: PluginParamGroups): boolean => {
  return (
    gropu.array.length === 0 &&
    gropu.single.length === 0 &&
    gropu.struct.length === 0 &&
    gropu.structArray.length === 0
  );
};

// export const filterStructsEx = <T extends PluginParam>(
//   structs: ReadonlyArray<PluginStructSchemaArray>,
//   fn: (param: PluginParam) => param is T
// ): PluginStructSchemaArray<T>[] => {
//   return structs.reduce((acc, schema): PluginStructSchemaArray<T>[] => {
//     const filtered = pickParams(schema, fn);
//     return filtered.params.length > 0 ? [...acc, filtered] : acc;
//   }, []);
// };

// const pickParams = <T extends PluginParam>(
//   strcutSchema: PluginStructSchemaArray,
//   fn: (schema: PluginParam<PrimitiveParam>) => schema is T
// ): PluginStructSchemaArray<T> => ({
//   struct: strcutSchema.struct,
//   params: strcutSchema.params.filter((p) => fn(p)),
// });
