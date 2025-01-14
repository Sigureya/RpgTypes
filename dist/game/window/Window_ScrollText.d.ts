import type { Window_Base } from "./Window_Base";
export declare class Window_ScrollText extends Window_Base {
    update(): void;
    startMessage(): void;
    refresh(): void;
    updatePlacement(): void;
    contentsHeight(): number;
    updateMessage(): void;
    scrollSpeed(): void;
    isFastForward(): boolean;
    fastForwardRate(): void;
    terminateMessage(): void;
}
