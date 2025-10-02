import { compilePluginToObject } from "./schema/compile/kinds/core/compilePlugin";
import type { PluginJSON } from "./schema/compile/kinds/core/pluginJSONTypes";

export const pluginSourceToJSON = (text: string): PluginJSON => {
  return compilePluginToObject(text);
};
