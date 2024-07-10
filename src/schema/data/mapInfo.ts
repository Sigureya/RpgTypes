import { Data_NamedItem } from "./bases";

export interface MapInfo extends Data_NamedItem {
  expanded: boolean;
  order: number;
  parentId: number;
  scrollX: number;
  scrollY: number;
}
