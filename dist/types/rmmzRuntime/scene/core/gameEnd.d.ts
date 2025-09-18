import { Rectangle } from '../../../libs';
export interface Rmmz_Scene_GameEnd {
    initialize(): void;
    create(): void;
    stop(): void;
    createBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    commandToTitle(): void;
}
