import { DataReadErrorItem, MapBatchReadResult, ReadSystemResult } from '../../../../fileio';
import { SystemTexts } from '../../../../rmmz';
import { ExtractedCommonEventText, ExtractedBattleEventText, ExtractedMapTexts } from './eventCommand';
import { ExtractedDataBundle } from './mainData';
export interface ExtractedRawGameDataTexts {
    value: ExtractedRawGameDataTextValue;
    errors: DataReadErrorItem[];
}
export interface ExtractedRawGameDataTextValue {
    mainData: ExtractedDataBundle;
    eventData: {
        commonEvents: ExtractedCommonEventText[];
        troops: ExtractedBattleEventText[];
    };
    mapFiles: MapBatchReadResult<ExtractedMapTexts>;
    system: ReadSystemResult<SystemTexts>;
}
