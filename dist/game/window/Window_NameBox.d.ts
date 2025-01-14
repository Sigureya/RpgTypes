import type { Window_Base } from "./Window_Base";
import type { Window_Message } from "./Window_Message";
export declare class Window_NameBox extends Window_Base {
    initialize(): void;
    setMessageWindow(messageWindow: Window_Message): void;
    setName(name: string): void;
    clear(): void;
    start(): void;
    updatePlacement(): void;
    updateBackground(): void;
    windowWidth(): number;
    windowHeight(): number;
    refresh(): void;
}
