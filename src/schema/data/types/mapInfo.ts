import type { Data_NamedItem } from "./main";

export interface Data_MapInfo extends Data_NamedItem {
  name: string;
  id: number;
  expanded: boolean;
  order: number;
  parentId: number;
  scrollX: number;
  scrollY: number;
}
