import type { ExtractedCommandItem, ExtractedTroopTextItem } from "./extracted";

export interface ExtractedEventDataBundle<UUID> {
  commonEvents: ExtractedCommandItem<UUID>[];
  troops: ExtractedTroopTextItem<UUID>[];
}
