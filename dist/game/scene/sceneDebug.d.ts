import type { Rectangle } from "../window";
export declare class Scene_Debug {
    constructor();
    initialize(): void;
    create(): void;
    needsCancelButton(): boolean;
    createRangeWindow(): void;
    rangeWindow(): void;
    createEditWindow(): void;
    editWindowRect(): Rectangle;
    createDebugHelpWindow(): void;
    debugHelpWindowRect(): Rectangle;
    onRangeOk(): void;
    onEditCancel(): void;
    refreshHelpWindow(): void;
    helpText(): string;
}
