import { Rectangle } from '../../../libs';
export interface Rmmz_Scene_MenuBase<Actor> {
    initialize(): void;
    create(): void;
    update(): void;
    helpAreaTop(): number;
    helpAreaBottom(): number;
    helpAreaHeight(): number;
    mainAreaTop(): number;
    mainAreaBottom(): number;
    mainAreaHeight(): number;
    actor(): Actor;
    updateActor(): void;
    createBackground(): void;
    setBackgroundOpacity(opacity: number): void;
    createHelpWindow(): void;
    helpWindowRect(): Rectangle;
    createButtons(): void;
    needsCancelButton(): boolean;
    createCancelButton(): void;
    needsPageButtons(): boolean;
    createPageButtons(): void;
    updatePageButtons(): void;
    arePageButtonsEnabled(): boolean;
    nextActor(): void;
    onActorChange(): void;
    previousActor(): void;
    onActorChange(): void;
}
