import { Rmmz_Variables, Rmmz_Switches } from './core/variables';
declare global {
    class Game_Variables implements Rmmz_Variables {
        clear(): void;
        value(id: number): number;
        setValue(id: number, value: number): void;
        onChange(): void;
        _data: (number | string)[];
    }
    class Game_Switches implements Rmmz_Switches {
        value(switchId: number): boolean;
        setValue(switchId: number, value: boolean): void;
        _data: boolean[];
    }
}
