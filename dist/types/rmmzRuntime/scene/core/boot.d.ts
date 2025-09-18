export interface Rmmz_Scene_Boot {
    create(): void;
    isReady(): boolean;
    start(): void;
    onDatabaseLoaded(): void;
    setEncryptionInfo(): void;
    loadSystemImages(): void;
    loadPlayerData(): void;
    loadGameFonts(): void;
    startNormalGame(): void;
    resizeScreen(): void;
    updateDocumentTitle(): void;
    checkPlayerLocation(): void;
}
