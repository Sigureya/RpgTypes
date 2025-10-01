import type { PrimitiveParam } from "./schema/compile/kinds";
import type { PrimitiveStructSchema } from "./schema/compile/kinds/compileFlatStruct";
import { compileFlatStruct } from "./schema/compile/kinds/compileFlatStruct";
import { compilePluginToObject } from "./schema/compile/kinds/core/compilePlugin";
import type { PluginJSON } from "./schema/compile/kinds/core/pluginJSONTypes";

export const pluginSourceToJSON = (text: string): PluginJSON => {
  return compilePluginToObject(text);
};

export const structToJSONSchema = <T extends object>(
  params: Record<keyof T, PrimitiveParam>
): PrimitiveStructSchema<T> => {
  return compileFlatStruct(params);
};
