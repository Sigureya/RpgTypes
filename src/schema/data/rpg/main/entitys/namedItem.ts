export interface Data_NamedItem {
  name: string;
  id: number;
}

export type NamedItem<T extends Data_NamedItem> = Data_NamedItem & Partial<T>;
export type NamedItemArray<T extends Data_NamedItem> = NamedItem<T>[];
export type ReadonlyNamedItemArray<T extends Data_NamedItem> = ReadonlyArray<
  NamedItem<T>
>;
