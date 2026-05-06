import type { PluginMeta } from "@RpgTypes/libs";
import { PLUGIN_MZ3D } from "./cutievirus";
import { allTriacontanePlugins } from "./triacontane/all";

export const allNoteSchemas = (): PluginMeta[] => {
  return [PLUGIN_MZ3D, ...allTriacontanePlugins()];
};
