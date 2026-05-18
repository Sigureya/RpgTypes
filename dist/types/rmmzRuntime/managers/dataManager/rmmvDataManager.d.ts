import { RpgMakerDataManagerBase } from './base';
export interface Rmmv_DataManager extends RpgMakerDataManagerBase {
    _globalId: string;
    _lastAccessedId: number;
    _errorUrl: string | null;
    _databaseFiles: Array<{
        name: string;
        src: string;
    }>;
    onLoad(object: object): void;
    checkError(): void;
    loadGlobalInfo(): unknown[];
    saveGlobalInfo(info: unknown[]): void;
    isThisGameFile(savefileId: number): boolean;
    isAnySavefileExists(): boolean;
    latestSavefileId(): number;
    maxSavefiles(): number;
    lastAccessedSavefileId(): number;
    loadAllSavefileImages(): void;
    loadSavefileImages(info: unknown): void;
    loadSavefileInfo(savefileId: number): unknown;
    saveGameWithoutRescue(savefileId: number): boolean;
    loadGameWithoutRescue(savefileId: number): boolean;
    selectSavefileForNewGame(): void;
    makeSavefileInfo(): unknown;
    makeSaveContents(): unknown;
    extractSaveContents(contents: unknown): void;
}
