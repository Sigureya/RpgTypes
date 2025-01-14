import type { Scene_File } from "./sceneFIle";
export declare class Scene_Save extends Scene_File {
    initialize(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
    executeSave(savefileId: number): void;
    onSaveSuccess(): void;
    onSaveFailure(): void;
}
