import type { Rectangle } from "../window";
export declare class Scene_Status {
    create(): void;
    helpAreaHeight(): number;
    createProfileWindow(): void;
    profileWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createStatusParamsWindow(): void;
    statusParamsWindowRect(): Rectangle;
    createStatusEquipWindow(): void;
    statusEquipWindowRect(): Rectangle;
    statusParamsWidth(): number;
    statusParamsHeight(): number;
    profileHeight(): number;
    start(): void;
    needsPageButtons(): boolean;
    refreshActor(): void;
    onActorChange(): void;
}
