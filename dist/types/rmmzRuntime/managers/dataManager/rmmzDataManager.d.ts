import { Data_Map } from '../../../rmmz/rpg';
import { RpgMakerDataManagerBase } from './base';
import { RpgDataTypes } from './dataTypes';
export interface Rmmz_DataManager extends RpgMakerDataManagerBase {
    onXhrLoad(xhr: XMLHttpRequest, name: string, src: string, url: string): void;
    removeInvalidGlobalInfo(): void;
    isGlobalInfoLoaded(): boolean;
    isMapObject(data: RpgDataTypes): data is Data_Map;
    extractArrayMetadata(list: (null | {
        note: string;
    })[]): void;
    isTitleSkip(): boolean;
    earliestSavefileId(): number;
    emptySavefileId(): number;
    correctDataErrors(): void;
    loadGlobalInfo(): void;
}
