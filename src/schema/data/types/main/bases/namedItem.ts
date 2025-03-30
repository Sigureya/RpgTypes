export interface Data_NamedItem {
  name: string;
  id: number;
}

export type NamedItem<T extends Data_NamedItem> = Data_NamedItem & Partial<T>;
