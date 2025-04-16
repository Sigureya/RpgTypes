import type { Data_NamedItem } from "@sigureya/rpgtypes";

export interface NamedItemSource {
  label: string;
  sourceKey: string;
  items: Data_NamedItem[];
}
export type NamedItemRecord<T extends {}> = Record<keyof T, NamedItemSource>;
