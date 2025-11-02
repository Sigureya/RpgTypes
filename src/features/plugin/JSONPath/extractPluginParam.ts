import type { PluginSchemaArray } from "@RpgTypes/rmmz/plugin";
import { classifyPluginParams } from "@RpgTypes/rmmz/plugin";
import { filterPluginSchemaByStringParam } from "@RpgTypes/rmmz/plugin/core/params/arraySchemaFilterByParam";

const p = (plugin: PluginSchemaArray) => {
  const texts = filterPluginSchemaByStringParam(plugin);
  const c = texts.structs.map(
    (s): [string, ReturnType<typeof classifyPluginParams>] => [
      s.struct,
      classifyPluginParams(s),
    ]
  );
  return "";
};
