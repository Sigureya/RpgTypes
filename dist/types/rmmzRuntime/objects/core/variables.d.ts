export interface Rmmz_Variables {
    clear(): void;
    value(id: number): number;
    setValue(id: number, value: number): void;
    onChange(): void;
}
export interface Rmmz_Switches {
    value(switchId: number): boolean;
    setValue(switchId: number, value: boolean): void;
}
