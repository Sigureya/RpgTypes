export declare class Game_Variables {
    _data: number[];
    constructor();
    initialize(): void;
    clear(): void;
    value(variableId: number): number;
    setValue(variableId: number, value: number): void;
    /**
     * @deprecated
     * @param variableId
     * @param value
     */
    setValue(variableId: number, value: string): void;
    onChange(): void;
}
