import type { ExtractedCommandItem, ExtractedTroopTextItem } from "./union";

export interface ExtractedEventDataBundle<UUID> {
  commonEvents: ExtractedCommandItem<UUID>[];
  troops: ExtractedTroopTextItem<UUID>[];
}
