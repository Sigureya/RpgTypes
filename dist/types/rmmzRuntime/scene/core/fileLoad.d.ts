import { Rmmz_Scene_File } from './file';
export interface Rmmz_Scene_Load extends Rmmz_Scene_File {
    initialize(): void;
    terminate(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
    executeLoad(savefileId: number): void;
    onLoadSuccess(): void;
    onLoadFailure(): void;
    reloadMapIfUpdated(): void;
}
