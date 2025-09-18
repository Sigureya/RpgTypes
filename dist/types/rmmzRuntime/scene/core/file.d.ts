export interface Rmmz_Scene_File {
    mode(): string;
    needsAutosave(): boolean;
    activateListWindow(): void;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
    savefileId(): number;
    isSavefileEnabled(savefileId: number): boolean;
}
