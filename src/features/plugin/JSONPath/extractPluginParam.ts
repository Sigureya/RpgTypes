import type {
  ClassifiedTextParams,
  PluginSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import {
  classifyTextParams,
  filterPluginSchemaByStringParam,
} from "@RpgTypes/rmmz/plugin";
import type { StructPathResult } from "./core";
import {
  getPathFromStructParam,
  getPathFromStructSchema,
} from "./core/paramStruct";

const p = (plugin: PluginSchemaArray) => {
  const texts = filterPluginSchemaByStringParam(plugin);
  const structs = texts.structs.map((s): [string, ClassifiedTextParams] => [
    s.struct,
    classifyTextParams(s),
  ]);

  const map = new Map<string, ClassifiedTextParams>(structs);
  const vvvv: StructPathResult[] = texts.structs.map((struct) =>
    getPathFromStructSchema(struct.struct, "$", map)
  );
  return "";
};
