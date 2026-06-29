import { RawGameData2 } from '../../../fileio';
import { EventCommand } from '../../../rmmz';
import { EventContainerExtractor, ExtractedRawGameDataTexts } from './text';
export declare const extractTextFromRawGameData: (data: RawGameData2<EventCommand>, extractor: EventContainerExtractor) => ExtractedRawGameDataTexts;
