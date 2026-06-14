import { ExtractedTextItem } from '../../../../libs';
import { TextCommandParameter } from './eventCommand';
import { ExtractedRawGameDataEventTexts } from './types';
export declare const extractSpeakerTexts: <T>(data: ExtractedRawGameDataEventTexts, hashFn: (text: string) => T) => ExtractedTextItem<T>[];
export declare const collectTextCommands: (data: ExtractedRawGameDataEventTexts) => TextCommandParameter[];
