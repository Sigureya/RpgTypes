import { Rmmz_Scene_File } from './file';
export interface Rmmz_Scene_Save extends Rmmz_Scene_File {
    initialize(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
    executeSave(savefileId: number): void;
    onSaveSuccess(): void;
    onSaveFailure(): void;
}
