import { ExtractedSystemTextItem } from './item';
export interface ExtractedSystemTexts<UUID> {
    gameTitle: string;
    filename: string;
    texts: ExtractedSystemTextItem<UUID>[];
}
