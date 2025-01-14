import type { Scene_File } from "./sceneFIle";
export declare class Scene_Load extends Scene_File {
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
