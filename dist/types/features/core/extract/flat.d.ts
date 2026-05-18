import { ExtractedTextItem } from '../../../libs';
import { ExtractedTextFinalWithNotes } from './types';
export declare const createDuplicateMap: (list: readonly ExtractedTextItem<unknown>[]) => Map<string, number>;
export declare const flattenExtractedItems: <UUID>(data: ExtractedTextFinalWithNotes<UUID>) => ExtractedTextItem<UUID>[];
