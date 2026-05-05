import type { RootTypeCategory } from "@sigureya/rmmz-plugin-schema";
import type { ExtractedTextItemBase } from "./mainData";

export interface ExtractedPluginItem<UUID> extends ExtractedTextItemBase<UUID> {
  id: 0;
  uuid: UUID;
  kind: string;
  filename: string;
  dataKey: string;

  baseText: string;
  otherData: PluginOtherData;
}

export type PluginOtherData = [
  root: `${string}:${RootTypeCategory}` | `command<${string}>`,
  type: "" | `struct<${string}>`
];

export interface PluginExtractTerms {
  root: string;
}
