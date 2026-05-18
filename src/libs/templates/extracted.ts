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
  Other extends string[] = string[],
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
