export interface Rmmz_Level {
  currentExp(): number;
  currentLevel(): number;
  changeExp(exp: number, show: boolean): void;
  changeLevel(level: number, show: boolean): void;
}
