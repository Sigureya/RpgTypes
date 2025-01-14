import type { Window_Command } from "./Window_Command";
export declare class Window_TitleCommand extends Window_Command {
    makeCommandList(): void;
    isContinueEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}
