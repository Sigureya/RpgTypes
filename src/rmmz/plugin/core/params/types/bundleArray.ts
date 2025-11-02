import type { PluginCommandSchemaArray } from "./commandsArray";
import type { PluginParam } from "./paramItem";
import type { PluginStructSchemaArray } from "./structs";

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray[];
}
