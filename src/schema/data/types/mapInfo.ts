import type { Data_NamedItem } from "./bases";

export interface Data_MapInfo extends Data_NamedItem {
  expanded: boolean;
  order: number;
  parentId: number;
  scrollX: number;
  scrollY: number;
}
