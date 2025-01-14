export interface DataManager_Interface {
    removeInvalidGlobalInfo(): void;
    loadGlobalInfo(): void;
    saveGlobalInfo(): void;
    isGlobalInfoLoaded(): boolean;
    loadDatabase(): void;
    loadDataFile(name: string, src: string): void;
    isDatabaseLoaded(): boolean;
    loadMapData(mapId: number): void;
    makeEmptyMap(): void;
    isMapLoaded(): boolean;
    onLoad(): void;
    isMapObject(): boolean;
    extractArrayMetadata(): void;
    extractMetadata(): void;
    isBattleTest(): boolean;
    isEventTest(): boolean;
    isTitleSkip(): boolean;
    isSkill(): boolean;
    isItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    createGameObjects(): void;
    setupNewGame(): void;
    setupBattleTest(): void;
    setupEventTest(): void;
}
