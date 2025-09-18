export interface Rmmz_Scene_Map {
    onMapLoaded(): void;
    onTransfer(): void;
    onTransferEnd(): void;
    shouldAutosave(): boolean;
    updateMainMultiply(): void;
    updateMain(): void;
    isPlayerActive(): boolean;
    isFastForward(): boolean;
    stop(): void;
    neesdFadeIn(): boolean;
    needsSlowFadeOut(): boolean;
    updateWaitCount(): boolean;
    updateDestination(): void;
    updateMenuButton(): void;
    hideMenuButton(): void;
    onMapTouch(): void;
    isAnyButtonPressed(): boolean;
}
