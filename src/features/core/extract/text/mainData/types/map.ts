import type { ExtractedNoteItem } from "./mainData";

export interface MapTerms {
  displayName: string;
}
export type ExtractedMapEventNode<UUID> = ExtractedNoteItem<
  UUID,
  [mapName: string, ventName: string, noteKey: string]
>;
