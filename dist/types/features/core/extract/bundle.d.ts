import { RawGameData } from '../../../fileio';
import { EventContainerExtractor } from './text';
import { ExtractedRawGameDataTexts } from './types';
export declare const extractTextFromRawGameData: (data: RawGameData, extractor: EventContainerExtractor) => ExtractedRawGameDataTexts;
