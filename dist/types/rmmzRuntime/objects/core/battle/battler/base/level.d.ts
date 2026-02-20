export interface Rmmz_Level {
    get level(): number;
    currentExp(): number;
    changeExp(exp: number, show: boolean): void;
    changeLevel(level: number, show: boolean): void;
}
