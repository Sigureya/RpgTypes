import type { Data_NamedItem } from "src/namedItemSource";

export interface Data_Goods extends Data_NamedItem {
  name: string;
  id: number;
  price: number;
  iconIndex: number;
}
