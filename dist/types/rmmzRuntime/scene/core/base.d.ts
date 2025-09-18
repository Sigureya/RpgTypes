export interface Rmmz_Scene_Base {
    create(): void;
    isActive(): boolean;
    isReady(): boolean;
    start(): void;
    update(): void;
    stop(): void;
    isStarted(): boolean;
    isBusy(): boolean;
    isFading(): boolean;
    terminate(): void;
    createWindowLayer(): void;
    startFadeIn(duration: number, white: number): void;
    startFadeOut(duration: number, white: number | undefined): void;
    createColorFilter(): void;
    updateColorFilter(): void;
    updateFade(): void;
    updateChildren(): void;
    popScene(): void;
    checkGameover(): void;
    fadeOutAll(): void;
    fadeSpeed(): void;
    slowFadeSpeed(): number;
    scaleSprite(sprite: {
        bitmap: {
            width: number;
            height: number;
        };
        scale: {
            x: number;
            y: number;
        };
    }): void;
    centerSprite(sprite: {
        x: number;
        y: number;
        anchor: {
            x: number;
            y: number;
        };
    }): void;
    isBottomHelpMode(): boolean;
    isBottomButtonMode(): boolean;
    isRightInputMode(): boolean;
    mainCommandWidth(): number;
    buttonAreaTop(): number;
    buttonAreaBottom(): number;
    buttonAreaHeight(): number;
    buttonY(): number;
    calcWindowHeight(numLines: number, selectable: boolean): number;
    requestAutosave(): void;
    isAutosaveEnabled(): boolean;
    executeAutosave(): void;
    onAutosaveSuccess(): void;
    onAutosaveFailure(): void;
}
