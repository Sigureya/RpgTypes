import { ControlCharInfo, Data_Actor } from '../../../../../../rmmz';
import { ExtractedTextBundle } from './mainData';
export interface ExtractedActorTexts<UUID> {
    controlChars: ControlCharInfo[];
    texts: ExtractedTextBundle<Data_Actor, UUID>[];
}
