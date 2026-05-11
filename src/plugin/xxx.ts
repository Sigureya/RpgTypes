import type { PluginMeta } from "@RpgTypes/libs";

export const definedTextKeys = (list: ReadonlyArray<PluginMeta>): string[] => {
  return list.flatMap(mmm);
};

const mmm = (meta: PluginMeta): string[] => {
  return meta.noteSchema
    .filter((schema) => schema.valueType === "text")
    .map((schema) => schema.key);
};
