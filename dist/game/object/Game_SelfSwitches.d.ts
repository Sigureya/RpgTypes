export declare class Game_SelfSwitches {
    _data: Record<string, boolean>;
    constructor();
    initialize(): void;
    clear(): void;
    value(key: string): boolean;
    setValue(key: string, value: boolean): void;
    onChange(): void;
}
