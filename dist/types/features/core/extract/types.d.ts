import { MapBatchReadResult, ReadSystemResult, DataReadErrorItem } from '../../../fileio';
import { SummarizedNote } from './note';
import { ExtractedDataBundle, ExtractedCommonEventText, ExtractedBattleEventText, ExtractedMapTexts } from './text';
import { ExtractedSystemTexts } from './text/system';
export interface ExtractedRawGameDataTextValue {
    mainData: ExtractedDataBundle;
    eventData: {
        commonEvents: ExtractedCommonEventText[];
        troops: ExtractedBattleEventText[];
    };
    mapFiles: MapBatchReadResult<ExtractedMapTexts>;
    system: ReadSystemResult<ExtractedSystemTexts>;
}
export interface ExtractedRawGameDataTexts {
    value: ExtractedRawGameDataTextValue;
    errors: DataReadErrorItem[];
}
export interface RawGameDataNoteNormalization {
    nonTextNoteKeys: Set<string>;
    data: ExtractedRawGameDataTexts;
    mapNoteSummary: Map<string, SummarizedNote[]>;
    dataNoteSummary: Map<string, SummarizedNote[]>;
}
