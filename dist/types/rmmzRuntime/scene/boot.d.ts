import { Scene_Base } from './base';
export declare class Scene_Boot extends Scene_Base {
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
