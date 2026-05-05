import { ControlCharInfo } from '@sigureya/rpgtypes';
export interface ConvertedTextItem {
    id: number;
    speaker?: string;
    baseText: string;
    otherData?: string[];
    kind: string;
    dataKey?: string;
}
export type ExtractedDataArray<UUID> = [
    filename: string,
    id: number,
    uuid: UUID,
    duplicateTarget: UUID | "",
    kind: string,
    r18: boolean,
    speaker: string,
    baseText: string
];
export interface ExtractedTextG2 {
    filename: string;
    texts: ConvertedTextItem[];
}
export interface GameTextExtractionResult {
    items: ExtractedTextG2[];
    gameTitle: string;
    controlChars: ControlCharInfo[];
}
