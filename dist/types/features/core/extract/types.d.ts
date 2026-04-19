import { MapBatchReadResult, ReadSystemResult, DataReadErrorItem } from '../../../fileio';
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
