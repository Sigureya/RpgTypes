import { ExtractedSystemTextItem } from './item';
export interface SystemTexts<UUID> {
    gameTitle: string;
    filename: string;
    texts: ExtractedSystemTextItem<UUID>[];
}
