export interface ExtractedTextItemBase<UUID> {
  filename: string;
  id: number;
  uuid: UUID;
  speaker?: string;
  baseText: string;
  otherData?: string[];
  kind: string;
  dataKey: string;
}

export interface ExtractedTextItem<
  UUID,
  Key extends string = string,
  Other extends string[] = string[]
> extends ExtractedTextItemBase<UUID> {
  filename: string;
  id: number;
  uuid: UUID;
  speaker?: string;
  baseText: string;
  otherData?: Other;
  kind: string;
  dataKey: Key;
}

export type ExtractedTextBundle<T, UUID = string> = {
  main: ExtractedTextItem<UUID, Extract<keyof T, string>>[];
  note: ExtractedNoteItem<UUID>[];
};

export type ExtractedNoteItem<
  UUID,
  Other extends string[] = [string]
> = ExtractedTextItem<UUID, "note", Other> & { otherData: Other };

export type ExtractedPropertyItem<UUID, T extends object> = ExtractedTextItem<
  UUID,
  Extract<keyof T, string>
>;
