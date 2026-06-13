import { RawGameData } from '../../../fileio';
import { Data_System, EventCommand } from '../../../rmmz';
import { EventContainerExtractor, ExtractedRawGameDataTexts } from './text';
export declare const extractTextFromRawGameData: (data: RawGameData<EventCommand, Data_System | null>, extractor: EventContainerExtractor) => ExtractedRawGameDataTexts;
