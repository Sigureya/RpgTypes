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
