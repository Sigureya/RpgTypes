import type { PluginStructSchemaArray } from "./arraySchemaTypes";

export interface ArraySchemaFilterd {
  directs: PluginStructSchemaArray[];
  directNames: Set<string>;
  indirects: Set<string>;
}
