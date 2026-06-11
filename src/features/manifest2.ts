import type { FileReadBundle } from "@RpgTypes/fileio";
import type {
  PluginExtractionResult,
  PluginParamsObject,
} from "@sigureya/rmmz-plugin-schema";
import {
  createManifestData,
  parseDeepRecord,
} from "@sigureya/rmmz-plugin-schema";

const xxx = (
  plugin: PluginExtractionResult<unknown>,
  data: FileReadBundle,
  hashFn: (text: string) => string,
) => {
  const enalbldPlugins = plugin.plugins.filter((p) => p.record.status);
  enalbldPlugins.map((p) => {
    const paramObject: PluginParamsObject = {
      name: p.record.name,
      description: p.record.description,
      parameters: parseDeepRecord(p.record.parameters),
      status: true,
    };
    //    return createManifestData(paramObject, p.schema, hashFn);
  });
  return "";
};
